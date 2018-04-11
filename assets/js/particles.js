/* -----------------------------------------------
/* Author : Vincent Garreau  - vincentgarreau.com
/* MIT license: http://opensource.org/licenses/MIT
/* Demo / Generator : vincentgarreau.com/particles.js
/* GitHub : github.com/VincentGarreau/particles.js
/* v2.0.0
/* ----------------------------------------------- */
var pJS = function(tag_id){
  var canvas_el = document.querySelector('#'+tag_id+' > .particles-js-canvas-el')
  this.pJS = {
    canvas: {
      el: canvas_el,
      w: canvas_el.offsetWidth,
      h: canvas_el.offsetHeight
    },
    particles: {
      number: {
        value: 0,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: '#fff'
      },
      shape: {
        type: 'edge',
        stroke: {
          width: 0,
          color: '#000000'
        },
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: {
          enable: true,
          speed: 0.4,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#fff',
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 4,
        direction: 'none',
        random: true,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 3000,
          rotateY: 3000
        }
      },
      array: []
    },
    interactivity: {
      detect_on: 'window',
      events: {
        onhover: {
          enable: true,
          mode: 'grab'
        },
        onclick: {
          enable: true,
          mode: 'push'
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 240,
          line_linked: {
            opacity: 1
          }
        },
        push: {
          particles_nb: 3
        },
      },
      mouse: {}
    },
    retina_detect: false,
    fn: {
      interact: {},
      modes: {},
      vendors: {}
    },
    tmp: {}
  }
  var pJS = this.pJS
  pJS.tmp.obj = {
    size_value: pJS.particles.size.value,
    move_speed: pJS.particles.move.speed,
    line_linked_distance: pJS.particles.line_linked.distance,
    line_linked_width: pJS.particles.line_linked.width,
    mode_grab_distance: pJS.interactivity.modes.grab.distance,
  }
  pJS.fn.retinaInit = function(){
    if(pJS.retina_detect && window.devicePixelRatio > 1){
      pJS.canvas.pxratio = window.devicePixelRatio
      pJS.tmp.retina = true
    }
    else{
      pJS.canvas.pxratio = 1
      pJS.tmp.retina = false
    }
    pJS.canvas.w = pJS.canvas.el.offsetWidth * pJS.canvas.pxratio
    pJS.canvas.h = pJS.canvas.el.offsetHeight * pJS.canvas.pxratio
    pJS.particles.size.value = pJS.tmp.obj.size_value * pJS.canvas.pxratio
    pJS.particles.move.speed = pJS.tmp.obj.move_speed * pJS.canvas.pxratio
    pJS.particles.line_linked.distance = pJS.tmp.obj.line_linked_distance * pJS.canvas.pxratio
    pJS.interactivity.modes.grab.distance = pJS.tmp.obj.mode_grab_distance * pJS.canvas.pxratio
    pJS.particles.line_linked.width = pJS.tmp.obj.line_linked_width * pJS.canvas.pxratio
  }
  pJS.fn.canvasInit = function(){
    pJS.canvas.ctx = pJS.canvas.el.getContext('2d')
  }
  pJS.fn.canvasSize = function(){
    pJS.canvas.el.width = pJS.canvas.w
    pJS.canvas.el.height = pJS.canvas.h
    if(pJS && pJS.interactivity.events.resize){
      window.addEventListener('resize',()=>{
        pJS.canvas.w = pJS.canvas.el.offsetWidth
        pJS.canvas.h = pJS.canvas.el.offsetHeight
        if(pJS.tmp.retina){
          pJS.canvas.w *= pJS.canvas.pxratio
          pJS.canvas.h *= pJS.canvas.pxratio
        }
        pJS.canvas.el.width = pJS.canvas.w
        pJS.canvas.el.height = pJS.canvas.h
        pJS.fn.vendors.densityAutoParticles()
      })
    }
  }
  pJS.fn.canvasPaint = function(){
    pJS.canvas.ctx.fillRect(0, 0, pJS.canvas.w, pJS.canvas.h)
  }
  pJS.fn.canvasClear = function(){
    pJS.canvas.ctx.clearRect(0, 0, pJS.canvas.w, pJS.canvas.h)
  }
  pJS.fn.particle = function(color, opacity, position){
    this.radius = Math.random() * pJS.particles.size.value
    this.x = position ? position.x : Math.random() * pJS.canvas.w
    this.y = position ? position.y : Math.random() * pJS.canvas.h
    if(this.x > pJS.canvas.w - this.radius*2) this.x = this.x - this.radius
    else if(this.x < this.radius*2) this.x = this.x + this.radius
    if(this.y > pJS.canvas.h - this.radius*2) this.y = this.y - this.radius
    else if(this.y < this.radius*2) this.y = this.y + this.radius
    if(pJS.particles.move.bounce){
      pJS.fn.vendors.checkOverlap(this, position)
    }
    this.color = {}
    if(typeof(color.value) == 'object'){
      if(color.value instanceof Array){
        var color_selected = color.value[Math.floor(Math.random() * pJS.particles.color.value.length)]
        this.color.rgb = hexToRgb(color_selected)
      }else{
        if(color.value.r != undefined && color.value.g != undefined && color.value.b != undefined){
          this.color.rgb = {
            r: color.value.r,
            g: color.value.g,
            b: color.value.b
          }
        }
        if(color.value.h != undefined && color.value.s != undefined && color.value.l != undefined){
          this.color.hsl = {
            h: color.value.h,
            s: color.value.s,
            l: color.value.l
          }
        }
      }
    }
    else if(typeof(color.value) == 'string'){
      this.color = color
      this.color.rgb = hexToRgb(this.color.value)
    }
    this.opacity = Math.random() * pJS.particles.opacity.value
    if(pJS.particles.opacity.anim.enable){
      this.opacity_status = false
      this.vo = pJS.particles.opacity.anim.speed / 100
      this.vo = this.vo * Math.random()
    }
    var velbase = { x:0, y:0 }
    if(pJS.particles.move.straight){
      this.vx = velbase.x
      this.vy = velbase.y
      if(pJS.particles.move.random){
        this.vx = this.vx * (Math.random())
        this.vy = this.vy * (Math.random())
      }
    }else{
      this.vx = velbase.x + Math.random()-0.5
      this.vy = velbase.y + Math.random()-0.5
    }
    this.vx_i = this.vx
    this.vy_i = this.vy
    var shape_type = pJS.particles.shape.type
    if(typeof(shape_type) == 'object'){
      if(shape_type instanceof Array){
        var shape_selected = shape_type[Math.floor(Math.random() * shape_type.length)]
        this.shape = shape_selected
      }
    }else{
      this.shape = shape_type
    }
  }
  pJS.fn.particle.prototype.draw = function() {
    var p = this
    if(p.radius_bubble != undefined){
      var radius = p.radius_bubble
    }else{
      var radius = p.radius
    }
    if(p.opacity_bubble != undefined){
      var opacity = p.opacity_bubble
    }else{
      var opacity = p.opacity
    }
    if(p.color.rgb){
      var color_value = 'rgba('+p.color.rgb.r+','+p.color.rgb.g+','+p.color.rgb.b+','+opacity+')'
    }else{
      var color_value = 'hsla('+p.color.hsl.h+','+p.color.hsl.s+'%,'+p.color.hsl.l+'%,'+opacity+')'
    }
    pJS.canvas.ctx.fillStyle = color_value
    pJS.canvas.ctx.beginPath()
    switch(p.shape){
      case 'edge':
        pJS.canvas.ctx.rect(p.x-radius, p.y-radius, radius*2, radius*2)
      break
      case 'triangle':
        pJS.fn.vendors.drawShape(pJS.canvas.ctx, p.x-radius, p.y+radius / 1.66, radius*2, 3, 2)
      break
    }
    pJS.canvas.ctx.closePath()
    pJS.canvas.ctx.fill()
  }
  pJS.fn.particlesCreate=()=>{
    for(var i = 0; i < pJS.particles.number.value; i++) {
      pJS.particles.array.push(new pJS.fn.particle(pJS.particles.color, pJS.particles.opacity.value))
    }
  }
  pJS.fn.particlesUpdate=()=>{
    for(var i = 0; i < pJS.particles.array.length; i++){
      var p = pJS.particles.array[i]
      var ms = pJS.particles.move.speed/2
      p.x += p.vx * ms
      p.y += p.vy * ms
      if(pJS.particles.opacity.anim.enable) {
        if(p.opacity_status == true) {
          if(p.opacity >= pJS.particles.opacity.value) p.opacity_status = false
          p.opacity += p.vo
        }else {
          if(p.opacity <= pJS.particles.opacity.anim.opacity_min) p.opacity_status = true
          p.opacity -= p.vo
        }
        if(p.opacity < 0) p.opacity = 0
      }
      var new_pos = {
        x_left: -p.radius,
        x_right: pJS.canvas.w + p.radius,
        y_top: -p.radius,
        y_bottom: pJS.canvas.h + p.radius
      }
      if(p.x - p.radius > pJS.canvas.w){
        p.x = new_pos.x_left
        p.y = Math.random() * pJS.canvas.h
      }
      else if(p.x + p.radius < 0){
        p.x = new_pos.x_right
        p.y = Math.random() * pJS.canvas.h
      }
      if(p.y - p.radius > pJS.canvas.h){
        p.y = new_pos.y_top
        p.x = Math.random() * pJS.canvas.w
      }
      else if(p.y + p.radius < 0){
        p.y = new_pos.y_bottom
        p.x = Math.random() * pJS.canvas.w
      }
      if(isInArray('grab', pJS.interactivity.events.onhover.mode)){
        pJS.fn.modes.grabParticle(p)
      }
      if(pJS.particles.line_linked.enable || pJS.particles.move.attract.enable){
        for(var j = i+1; j < pJS.particles.array.length; j++){
          var p2 = pJS.particles.array[j]
          pJS.fn.interact.linkParticles(p,p2)
        }
      }
    }
  }
  pJS.fn.particlesDraw=()=>{
    pJS.canvas.ctx.clearRect(0, 0, pJS.canvas.w, pJS.canvas.h)
    pJS.fn.particlesUpdate()
    for(var i = 0; i < pJS.particles.array.length; i++){
      var p = pJS.particles.array[i]
      p.draw()
    }
  }
  pJS.fn.particlesEmpty=()=>{
    pJS.particles.array = []
  }
  pJS.fn.particlesRefresh=()=>{
    cancelRequestAnimFrame(pJS.fn.checkAnimFrame)
    cancelRequestAnimFrame(pJS.fn.drawAnimFrame)
    pJS.fn.particlesEmpty()
    pJS.fn.canvasClear()
    pJS.fn.vendors.start()
  }
  pJS.fn.interact.linkParticles=(p1, p2)=>{
    var dx = p1.x-p2.x,
        dy = p1.y-p2.y,
        dist = Math.sqrt(dx*dx + dy*dy)
    if(dist <= pJS.particles.line_linked.distance){
      var opacity_line = pJS.particles.line_linked.opacity - (dist / (1/pJS.particles.line_linked.opacity)) / pJS.particles.line_linked.distance
      if(opacity_line > 0){
        var color_line = pJS.particles.line_linked.color_rgb_line
        pJS.canvas.ctx.strokeStyle = 'rgba('+color_line.r+','+color_line.g+','+color_line.b+','+opacity_line+')'
        pJS.canvas.ctx.lineWidth = pJS.particles.line_linked.width
        pJS.canvas.ctx.beginPath()
        pJS.canvas.ctx.moveTo(p1.x, p1.y)
        pJS.canvas.ctx.lineTo(p2.x, p2.y)
        pJS.canvas.ctx.stroke()
        pJS.canvas.ctx.closePath()
      }
    }
  }
  pJS.fn.modes.pushParticles=(nb, pos)=>{
    pJS.tmp.pushing = true
    for(var i=0; i<nb; i++){
      pJS.particles.array.push(
        new pJS.fn.particle(
          pJS.particles.color,
          pJS.particles.opacity.value,
          {
            'x': pos ? pos.pos_x : Math.random() * pJS.canvas.w,
            'y': pos ? pos.pos_y : Math.random() * pJS.canvas.h
          }
        )
      )
      if(i == nb-1){
        if(!pJS.particles.move.enable){
          pJS.fn.particlesDraw()
        }
        pJS.tmp.pushing = false
      }
    }
  }
  pJS.fn.modes.removeParticles=(nb)=>{
    pJS.particles.array.splice(0, nb)
  }
  pJS.fn.modes.grabParticle=(p)=>{
    if(pJS.interactivity.events.onhover.enable && pJS.interactivity.status == 'mousemove'){
      var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,
        dy_mouse = p.y - pJS.interactivity.mouse.pos_y,
        dist_mouse = Math.sqrt(dx_mouse*dx_mouse + dy_mouse*dy_mouse)
      if(dist_mouse <= pJS.interactivity.modes.grab.distance){
        var opacity_line = pJS.interactivity.modes.grab.line_linked.opacity - (dist_mouse / (1/pJS.interactivity.modes.grab.line_linked.opacity)) / pJS.interactivity.modes.grab.distance
        if(opacity_line > 0){
          var color_line = pJS.particles.line_linked.color_rgb_line
          pJS.canvas.ctx.strokeStyle = 'rgba('+color_line.r+','+color_line.g+','+color_line.b+','+opacity_line+')'
          pJS.canvas.ctx.lineWidth = pJS.particles.line_linked.width
          pJS.canvas.ctx.beginPath()
          pJS.canvas.ctx.moveTo(p.x, p.y)
          pJS.canvas.ctx.lineTo(pJS.interactivity.mouse.pos_x, pJS.interactivity.mouse.pos_y)
          pJS.canvas.ctx.stroke()
          pJS.canvas.ctx.closePath()
        }
      }
    }
  }
  pJS.fn.vendors.eventsListeners=()=>{
    pJS.interactivity.el = window
    pJS.interactivity.el.addEventListener('mousemove',(e)=>{
      var pos_x = e.clientX,
          pos_y = e.clientY
      pJS.interactivity.mouse.pos_x = pos_x
      pJS.interactivity.mouse.pos_y = pos_y
      if(pJS.tmp.retina){
        pJS.interactivity.mouse.pos_x *= pJS.canvas.pxratio
        pJS.interactivity.mouse.pos_y *= pJS.canvas.pxratio
      }
      pJS.interactivity.status = 'mousemove'
    })
    pJS.interactivity.el.addEventListener('mouseleave',(e)=>{
      pJS.interactivity.mouse.pos_x = null
      pJS.interactivity.mouse.pos_y = null
      pJS.interactivity.status = 'mouseleave'
    })
    pJS.interactivity.el.addEventListener('click',()=>{
      pJS.interactivity.mouse.click_pos_x = pJS.interactivity.mouse.pos_x
      pJS.interactivity.mouse.click_pos_y = pJS.interactivity.mouse.pos_y
      pJS.interactivity.mouse.click_time = new Date().getTime()
      pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb, pJS.interactivity.mouse)
    })
  }
  pJS.fn.vendors.densityAutoParticles=()=>{
    if(pJS.particles.number.density.enable){
      var area = pJS.canvas.el.width * pJS.canvas.el.height / 1000
      if(pJS.tmp.retina){
        area = area/(pJS.canvas.pxratio*2)
      }
      var nb_particles = area * pJS.particles.number.value / pJS.particles.number.density.value_area
      var missing_particles = pJS.particles.array.length - nb_particles
      if(missing_particles < 0) pJS.fn.modes.pushParticles(Math.abs(missing_particles))
      else pJS.fn.modes.removeParticles(missing_particles)
    }
  }
  pJS.fn.vendors.checkOverlap=(p1, position)=>{
    for(var i=0; i<pJS.particles.array.length; i++){
      var p2 = pJS.particles.array[i]
      var dx = p1.x - p2.x,
        dy = p1.y - p2.y,
        dist = Math.sqrt(dx*dx + dy*dy)
      if(dist <= p1.radius + p2.radius){
        p1.x = position ? position.x : Math.random() * pJS.canvas.w
        p1.y = position ? position.y : Math.random() * pJS.canvas.h
        pJS.fn.vendors.checkOverlap(p1)
      }
    }
  }
  pJS.fn.vendors.destroypJS=()=>{
    cancelAnimationFrame(pJS.fn.drawAnimFrame)
    canvas_el.remove()
    pJSDom = null
  }
  pJS.fn.vendors.drawShape=(c, startX, startY, sideLength, sideCountNumerator, sideCountDenominator)=>{
    var sideCount = sideCountNumerator * sideCountDenominator
    var decimalSides = sideCountNumerator / sideCountDenominator
    var interiorAngleDegrees = (180 * (decimalSides - 2)) / decimalSides
    var interiorAngle = Math.PI - Math.PI * interiorAngleDegrees / 180 // convert to radians
    c.save()
    c.beginPath()
    c.translate(startX, startY)
    c.moveTo(0,0)
    for (var i=0; i<sideCount; i++) {
      c.lineTo(sideLength,0)
      c.translate(sideLength,0)
      c.rotate(interiorAngle)
    }
    c.fill()
    c.restore()
  }
  pJS.fn.vendors.draw=()=>{
    pJS.fn.particlesDraw()
    if(!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame)
    else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw)
  }
  pJS.fn.vendors.checkBeforeDraw=()=>{
    pJS.fn.vendors.init()
    pJS.fn.vendors.draw()
  }
  pJS.fn.vendors.init=()=>{
    pJS.fn.retinaInit()
    pJS.fn.canvasInit()
    pJS.fn.canvasSize()
    pJS.fn.canvasPaint()
    pJS.fn.particlesCreate()
    pJS.fn.vendors.densityAutoParticles()
    pJS.particles.line_linked.color_rgb_line = hexToRgb(pJS.particles.line_linked.color)
  }
  pJS.fn.vendors.start=()=>{
    pJS.fn.vendors.checkBeforeDraw()
  }
  pJS.fn.vendors.eventsListeners()
  pJS.fn.vendors.start()
}
window.requestAnimFrame=(()=>{
  return window.requestAnimationFrame  ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame    ||
    window.oRequestAnimationFrame      ||
    window.msRequestAnimationFrame     ||
    function(callback){
      window.setTimeout(callback, 1000 / 60)
    }
})()
window.cancelRequestAnimFrame=(()=>{
  return window.cancelAnimationFrame         ||
    window.webkitCancelRequestAnimationFrame ||
    window.mozCancelRequestAnimationFrame    ||
    window.oCancelRequestAnimationFrame      ||
    window.msCancelRequestAnimationFrame     ||
    clearTimeout
})()
function hexToRgb(hex){
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
  hex = hex.replace(shorthandRegex,(m, r, g, b)=>{
     return r+r+g+g+b+b
  })
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
  } : null
}
function clamp(number, min, max) {
  return Math.min(Math.max(number, min), max)
}
function isInArray(value, array) {
  return array.indexOf(value) > -1
}
window.pJSDom = []
window.particlesJS=(tag_id)=>{
  var pJS_tag = document.getElementById(tag_id),
  pJS_canvas_class = 'particles-js-canvas-el',
  exist_canvas = pJS_tag.getElementsByClassName(pJS_canvas_class)
  if(exist_canvas.length){
    while(exist_canvas.length > 0){
      pJS_tag.removeChild(exist_canvas[0])
    }
  }
  var canvas_el = document.createElement('canvas')
  canvas_el.className = pJS_canvas_class
  canvas_el.style.width = "100%"
  canvas_el.style.height = "100%"
  var canvas = document.getElementById(tag_id).appendChild(canvas_el)
  if(canvas != null){
    pJSDom.push(new pJS(tag_id))
  }
}
window.particlesJS('particles-js')
