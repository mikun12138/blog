---
title: 在 android termux 上安装 wordpress
date: 2025-10-24 18:19:51
tags: termux
---

采用 nginx + php-fpm

php-fpm 即 FastCGI Process Manager, 相比于 php-cgi 实现了更快的 FastCGI 协议(和一堆杂七杂八的配置), linux 独占

``` bash
    pkg install php php-fpm
```

php-fpm 默认使用 unix-socket, 相比 tcp-socket, 优点是性能更好(省去了tcp握手等网络开销), 缺点是仅能本地访问

``` nginx
# nginx.conf

server {
    listen      8080 default_server;
    listen      [::]:8080 default_server;
    server_name _;

    charset utf-8;

    location / {
        root    /data/data/com.termux/files/home/wordpress/test;
        index   index.php index.html index.htm;
    }

    error_page  500 502 503 504  /50x.html;
    location = /50x.html {
        root    html;
    }

    location ~ \.php$ {
        root path/to/wordpress; # 自己改
        include fastcgi_params;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        fastcgi_index index.php;
        # unix-socket 配置
        fastcgi_pass unix:/data/data/com.termux/files/usr/var/run/php-fpm.sock; # 一般是这个位置 
        # 若使用 tcp-socket ...
        fastcgi_pass 127.0.0.1:9000;
    }
}

```

wordpress 安装配置页写 localhost 炸掉了 改 127.0.0.1 就行

参考链接:
- [CGI、FastCGI、PHP-CGI与PHP-FPM的概念以及各个之间的关系](https://www.cnblogs.com/hld123/p/13408138.html)