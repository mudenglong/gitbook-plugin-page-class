# gitbook-plugin-page-class
This plugin wraps a div with a equivalent class of current page so you can style it accordingly; 给每个页面body标签 添加一个页面名称class名

![picture](http://u.thsi.cn/imgsrc/iwencai/fb8231a467be7a6e545b6ee765765f0d.png)


# configs

book.json:

```

    "plugins": [
        "page-class"
    ],

    "pluginsConfig": {
        "hxc3-page-class":{
            // 前缀
            "prefixName": "wrap-"
        }
    },

```