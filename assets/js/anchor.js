(function (root, factory) {
  'use strict'
  root.AnchorJS = factory()
  root.anchors = new root.AnchorJS()
  root.anchors.add('article h2, article h3')
}(this, function () {
  'use strict'
  function AnchorJS(options) {
    this.options = options || {}
    this.elements = []
    function _applyRemainingDefaultOptions(opts) {
      opts.icon = '\ue9cb'
      opts.visible = 'touch'
      opts.placement = 'left'
      opts.ariaLabel = 'Anchor'
      opts.class = ''
      opts.truncate = 64
    }
    _applyRemainingDefaultOptions(this.options)
    this.isTouchDevice = () => {
      return !!(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch)
    }
    this.add = function(selector) {
      var elements, elsWithIds, idList, elementID, i, index, count, tidyText, newTidyText, readableID, anchor, visibleOptionToUse, indexesToDrop = []
      _applyRemainingDefaultOptions(this.options)
      visibleOptionToUse = this.options.visible
      if (visibleOptionToUse === 'touch') {
        visibleOptionToUse = this.isTouchDevice() ? 'always' : 'hover'
      }
      elements = _getElements(selector)
      _addBaselineStyles()
      elsWithIds = document.querySelectorAll('[id]')
      idList = [].map.call(elsWithIds, function assign(el) {
        return el.id
      })
      for (i = 0; i < elements.length; i++) {
        if (this.hasAnchorJSLink(elements[i])) {
          indexesToDrop.push(i)
          continue
        }
        if (elements[i].hasAttribute('id')) {
          elementID = elements[i].getAttribute('id')
        } else if (elements[i].hasAttribute('data-anchor-id')) {
          elementID = elements[i].getAttribute('data-anchor-id')
        } else {
          tidyText = this.urlify(elements[i].textContent)
          newTidyText = tidyText
          count = 0
          do {
            if (index !== undefined) {
              newTidyText = tidyText + '-' + count
            }
            index = idList.indexOf(newTidyText)
            count += 1
          } while (index !== -1)
          index = undefined
          idList.push(newTidyText)
          elements[i].setAttribute('id', newTidyText)
          elementID = newTidyText
        }
        readableID = elementID.replace(/-/g, ' ')
        anchor = document.createElement('a')
        anchor.className = 'anchorjs-link ' + this.options.class
        anchor.href = '#' + elementID
        anchor.setAttribute('aria-label', this.options.ariaLabel)
        anchor.setAttribute('data-anchorjs-icon', this.options.icon)
        if (visibleOptionToUse === 'always') {
          anchor.style.opacity = '1'
        }
        elements[i].insertBefore(anchor, elements[i].firstChild)
      }
      for (i = 0; i < indexesToDrop.length; i++) {
        elements.splice(indexesToDrop[i] - i, 1)
      }
      this.elements = this.elements.concat(elements)
      return this
    }
    this.urlify = function(text) {
      var nonsafeChars = /[& +$,:;=?@"#{}|^~[`%!'<>\]\.\/\(\)\*\\]/g, urlText
      if (!this.options.truncate) {
        _applyRemainingDefaultOptions(this.options)
      }
      urlText = text.trim()
        .replace(/\'/gi, '')
        .replace(nonsafeChars, '-')
        .replace(/-{2,}/g, '-')
        .substring(0, this.options.truncate)
        .replace(/^-+|-+$/gm, '')
        .toLowerCase()
      return urlText
    }
    this.hasAnchorJSLink = el => {
      var hasAnchor = el.firstChild && ((' ' + el.firstChild.className + ' ').indexOf(' anchorjs-link ') > -1)
      return hasAnchor || false
    }
    function _getElements(input) {
      var elements
      if (typeof input === 'string' || input instanceof String) {
        elements = [].slice.call(document.querySelectorAll(input))
      } else if (Array.isArray(input) || input instanceof NodeList) {
        elements = [].slice.call(input)
      }
      return elements
    }
    function _addBaselineStyles() {
      if (document.head.querySelector('style.anchorjs') !== null) {
        return
      }
      var style = document.createElement('style'), firstStyleEl
      style.className = 'anchorjs'
      style.appendChild(document.createTextNode(''))
      firstStyleEl = document.head.querySelector('[rel="stylesheet"], style')
      if (firstStyleEl === undefined) {
        document.head.appendChild(style)
      } else {
        document.head.insertBefore(style, firstStyleEl)
      }
    }
  }
  return AnchorJS
}))
