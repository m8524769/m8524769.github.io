---
layout: post
title: "My First Post!"
date: 2018-01-28 20:00:00 +0800
author: yk
extend_excerpt: true
---
You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.

![](https://images.unsplash.com/photo-1560851240-099afcad338b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80)

> Quote Testing..
> Quote Testing..
> Quote Testing..
> Quote Testing..
> Quote Testing..

### 0123456789.:,;(*!?') {#$@&}
我能吞下玻璃而不伤身体。
### 我能吞下玻璃而不伤身体。
## 我能吞下玻璃而不伤身体。

_Double:_ 。：，;（×！？‘’、“”）

- first
- second
    + third

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. (中文字体测试)File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

title|name|date
---|---|---
123|123|123
456|456|456
色的人|angular|
123|123|123

译文标题 | 发表于 | 原文链接
--- | --- | :---:
[RxJS: 操作符状态管理](RxJS-Managing-Operator-State/README.md) | 2019-2-12 | [Angular In Depth](https://blog.angularindepth.com/rxjs-managing-operator-state-2f20681df21d)
[RxJS: 避免 takeUntil 造成的泄露风险](RxJS-Avoiding-takeUntil-Leaks/README.md) | 2018-5-27 | [Angular In Depth](https://blog.angularindepth.com/rxjs-avoiding-takeuntil-leaks-fb5182d047ef)
[认识 rxjs 中的 Subject](Understanding-rxjs-Subjects/README.md) | 2018-4-17 | [Medium](https://medium.com/@luukgruijs/understanding-rxjs-subjects-339428a1815b)
[RxJS: 避免因滥用 switchMap 而导致错误](RxJS-Avoiding-switchMap-Related-Bugs/README.md) | 2018-3-12 | [Angular In Depth](https://blog.angularindepth.com/switchmap-bugs-b6de69155524)

```ruby
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
# prints 'Hi, Tom' to STDOUT.
```

```python
def get_html(url):
    try:
        socket.setdefaulttimeout(4)
        page = urllib.urlopen(url)
    except:
        raise Exception('请检查网络连接.. _(:3」∠)_')
    else:
        html = page.read()
        return html

def get_brief(html):
    Soup = BeautifulSoup(html, 'html.parser')
    brief = Soup.select('meta[name="description"]')
    if brief:
        return brief[0].get('content')

__all__ = ['main']
```

```html
<head>
    <meta charset="utf-8">
    <title>{{ site.name }}{{ site.separator }}{{ site.title }}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="favicon.ico" rel="shortcut icon">
    <link href="/assets/css/main.css" rel="stylesheet">
</head>
```

```cpp
#include <iostream>
#include <fstream>
#include <string>
using namespace std;
std::ifstream tcin("./inTest.txt");

int main()
{
    int k;
    string n;
    tcin >> k >> n;

    int c[10] = {0};
    int sum = 0;
    for (string::iterator x = n.begin(); x != n.end(); ++x)
    {
        int t = *x-48;
        ++c[t];
        sum += t;
    }
    return 0;
}
```

```haskell
module Main where

main :: IO()
main = do putStrLn "Main"

comp :: (Integral a) => a -> a -> String
comp x y
  | x == y = "EQ"
  | x < y  = "LT"
  | x > y  = "GT"

sum' :: (Num a) => [a] -> a
sum' [] = 0
sum' [x] = x
sum' (x:xs) = x + sum' xs
```

[jekyll-docs]: http://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
