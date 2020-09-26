# Хостинг Material Docs на GitHub Pages
> Этот туториал использует проект, созданный в [{"text": "предыдущем уроке", "page": "Tutorials/Creating Material Docs"}]().
## Настройка проекта для GitHub Pages
### Проблема
Material Docs - это одно страничное React приложение, которое использует __react-router-dom__. Это означает, что
при переключении между страницами _URL_ меняется без перезагрузки страницы. Когда пользователь обращается на сайт, который 
хостится с помощью GitHub Pages, хостинг вернет страницу __index.thml__ или же ту, которая указана в _URL_. 
> _URL_: ```https://material-docs.github.io/material-docs-example-project/PAGE_NAME```

Проще говоря, если мы захостим Material Docs на GitHub Pages без дополнительной настройки - при перезагрузке страницы 
будем получать страницу __404 | Not found__.
### Решение в теории
Для того, чтоб предотвратить данную проблему, предлагается: 
* Создать страницу __404.html__, которая будет помещать путь из _URL_ в __query string__ запроса и делать редирект на 
_URL_, который ведет на __index.html__. 
* На странице __index.html__ мы будем обратно разбирать __query string__ и возвращать все на место __до того, как запустится react__.

### Решение на практике
Создайте файл __.nojekyll__ в директории __public__. Он нужен для того, чтоб GitHub Pages ну использовала фреймворк Jekyll.
> По умолчанию, GitHub Pages использует Jekyll

Теперь, необходимо добавить в директорию __public__ файл __404.html__ с таким содержанием:
##### 404.html
```{"type": "code", "themeLight": "darcula"}
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Single Page Apps for GitHub Pages</title>
    <script type="text/javascript">
        // Single Page Apps for GitHub Pages
        // https://github.com/rafrex/spa-github-pages
        // Copyright (c) 2016 Rafael Pedicini, licensed under the MIT License
        // ----------------------------------------------------------------------
        // This script takes the current url and converts the path and query
        // string into just a query string, and then redirects the browser
        // to the new url with only a query string and hash fragment,
        // e.g. http://www.foo.tld/one/two?a=b&c=d#qwe, becomes
        // http://www.foo.tld/?p=/one/two&q=a=b~and~c=d#qwe
        // Note: this 404.html file must be at least 512 bytes for it to work
        // with Internet Explorer (it is currently > 512 bytes)

        // If you're creating a Project Pages site and NOT using a custom domain,
        // then set segmentCount to 1 (enterprise users may need to set it to > 1).
        // This way the code will only replace the route part of the path, and not
        // the real directory in which the app resides, for example:
        // https://username.github.io/repo-name/one/two?a=b&c=d#qwe becomes
        // https://username.github.io/repo-name/?p=/one/two&q=a=b~and~c=d#qwe
        // Otherwise, leave segmentCount as 0.
        var segmentCount = 1;

        var l = window.location;
        l.replace(
            l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
            l.pathname.split('/').slice(0, 1 + segmentCount).join('/') + '/?p=/' +
            l.pathname.slice(1).split('/').slice(segmentCount).join('/').replace(/&/g, '~and~') +
            (l.search ? '&q=' + l.search.slice(1).replace(/&/g, '~and~') : '') +
            l.hash
        );

    </script>
</head>
<body>
</body>
</html>
``` 
> Переменная ___segmentCount___ указывает количество элементов пути, которые не надо сериализовать.  
> В случае GitHub Pages - необходимо выставить значение ___segmentCount___ = 1.  
> Если вы собираетесь привязать собственный домен - посчитайте ___segmentCount___ и выставьте его.

Далее, добавьте в файл __index.html__ в тэг _head_ следующий код:
##### index.html
```{"type": "code", "themeLight": "darcula"}
<!-- Start Single Page Apps for GitHub Pages -->
<script type="text/javascript">
    // Single Page Apps for GitHub Pages
    // https://github.com/rafrex/spa-github-pages
    // Copyright (c) 2016 Rafael Pedicini, licensed under the MIT License
    // ----------------------------------------------------------------------
    // This script checks to see if a redirect is present in the query string
    // and converts it back into the correct url and adds it to the
    // browser's history using window.history.replaceState(...),
    // which won't cause the browser to attempt to load the new url.
    // When the single page app is loaded further down in this file,
    // the correct url will be waiting in the browser's history for
    // the single page app to route accordingly.
    (function (l) {
        if (l.search) {
            var q = {};
            l.search.slice(1).split('&').forEach(function (v) {
                var a = v.split('=');
                q[a[0]] = a.slice(1).join('=').replace(/~and~/g, '&');
            });
            if (q.p !== undefined) {
                window.history.replaceState(null, null,
                    l.pathname.slice(0, -1) + (q.p || '') +
                    (q.q ? ('?' + q.q) : '') +
                    l.hash
                );
            }
        }
    }(window.location))
</script>
<!-- End Single Page Apps for GitHub Pages -->
```
Теперь, осталось скомпилировать Material Docs и настроить GitHub Pages :)
## Создание репозитория
Создайте репозиторий на _GitHub_ с любым названием, в нашем случае - ___material-docs-example-project___. После, 
загрузите в него файлы с помощью любого программного обеспечения на ваше усмотрение.
## Компиляция
> В файле __package.json__ добавьте поле _homepage_ с адресом страницы на GitHub Pages.  
> Пример адреса ```https://YOUR_USERNAME.github.io/REPOSITORY_NAME/```

Для того, чтоб разместить документацию на GtiHub Pages, необходимо скомпилировать проект. Для этого, необходимо выполнить
команду в директории, где находится файл ```package.json``` :  
Для __yarn__: 
```{"type": "code", "themeLight": "darcula"}
$ yarn run build
```
Для __npm__: 
```{"type": "code", "themeLight": "darcula"}
$ npm run build
```
Таким образом мы получили практически готовую к публикации веб страницу в директории __build__.    
Переименуйте эту директорию в __docs__.
## Настройка GitHub Pages
### Базовая настройка
Зайдите в раздел __Settings__ своего репозитория и найдите там подраздел __GitHub Pages__.
![{"alt": "GitHub Pages", "src": "&&GitHubPagesInitialImage", "fullWidth": true, "frame": true}]()
В разделе __Source__ выберите целевую ветку и в поле __директория__ выберите ___/docs___. Сохраните настройки.
![{"alt": "GitHub Pages", "src": "&&GitHubPagesSetupImage", "fullWidth": true, "frame": true}]()
### Привязывание собственного домена
