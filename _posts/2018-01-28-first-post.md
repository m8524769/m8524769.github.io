---
layout: post
title: "My First Post!"
date: 2018-01-28 20:00:00 +0800
author: yk
---
You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.

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

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. (中文字体测试)File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
# prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

{% highlight python %}
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
{% endhighlight %}

{% highlight html %}
<head>
    <meta charset="utf-8">
    <title>{{ site.name }}{{ site.separator }}{{ site.title }}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="favicon.ico" rel="shortcut icon">
    <link href="/assets/css/main.css" rel="stylesheet">
</head>
{% endhighlight %}

{% highlight scss %}
figure.highlight {
    position: relative;
    margin-bottom: 1em;
    font-family: "Fira Code", monospace;
    font-size: 1.1rem;
    line-height: 1.4;
    border: 1px solid #fff;
    border-radius: 4px;
    background-color: #252525;
}
{% endhighlight %}

{% highlight C++ %}
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
{% endhighlight %}


{% highlight haskell %}
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
{% endhighlight %}

{% highlight json %}
{
    "timeout": 300,
    "workers": 1,
    "method": "chacha20-ietf",
    "obfs": "tls1.2_ticket_auth",
    "protocol": "auth_aes128_sha1",
    "dns_ipv6": false,
}
{% endhighlight %}

{% highlight JavaScript %}
const expandPost = () => {
    let post = document.getElementById("post");
    post.addEventListener("click", () => {
    });
}
const changeInnerByClick = () => {
    let inners = [
        "How are you today?",
        "Here is my GitHub Page,",
        "which is only a demo.",
        "I wish you like it.",
        "Anyway..",
        "Have a good time!",
        "All the best."
    ];
    let i = 0;
    let inner = document.getElementById("inner");
    inner.addEventListener("click", () => {
        if (i < inners.length)
            inner.innerHTML = inners[i++];
    });
}
{% endhighlight %}

[jekyll-docs]: http://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
