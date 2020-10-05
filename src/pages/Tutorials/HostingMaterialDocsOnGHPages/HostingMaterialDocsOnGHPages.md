# &{&&locale/headers/hostingOnGH}&
> &{&&locale/prevTutorial}& [{"text": "&{&&locale/prevLesson}&", "page": "Tutorials/Creating Material Docs"}]().
## &{&&locale/headers/projectSetup}&
### &{&&locale/headers/problem}&
&{&&locale/overview}&
> _URL_: ```https://material-docs.github.io/material-docs-example-project/PAGE_NAME```

&{&&locale/overview2}&
### &{&&locale/headers/solutionTheory}&
&{&&locale/suggestions}&

### &{&&locale/headers/solutionPractice}&
&{&&locale/jekyll}&
> &{&&locale/jekyllNote}& Jekyll

&{&&locale/page404}&
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
&{&&locale/segmentCount}&

&{&&locale/pageIndex}&
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
## &{&&locale/headers/repoCreating}&
Создайте репозиторий на _GitHub_ с любым названием, в нашем случае - ___material-docs-example-project___. После, 
загрузите в него файлы с помощью любого программного обеспечения на ваше усмотрение.
## &{&&locale/headers/compilation}&
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
## &{&&locale/headers/ghPagesSetup}&
### &{&&locale/headers/basicSetup}&
Зайдите в раздел __Settings__ своего репозитория и найдите там подраздел __GitHub Pages__.
![{"alt": "GitHub Pages", "src": "&&GitHubPagesInitialImage", "fullWidth": true, "frame": true}]()
В разделе __Source__ выберите целевую ветку и в поле __директория__ выберите ___/docs___. Сохраните настройки.
![{"alt": "GitHub Pages", "src": "&&GitHubPagesSetupImage", "fullWidth": true, "frame": true}]()
### &{&&locale/headers/ownDomainHooking}&
> Для примера, мы будем использовать поддомен ___example.material-docs.com___  
> _Интерфейс управления доменом может отличаться в зависимости от вашего хостинга. В примере хостинг_ __Imena.ua__

Заходим в настройки домена и добавляем запись:
![{"alt": "GitHub Pages", "src": "&&DNSSetup", "fullWidth": true, "frame": true}]()
> Если вы используете не поддомен - вместо _example_ введите ___www___  
> _185.199.111.153 - адрес GitHub Pages на момент создания туториала._
#### &{&&locale/headers/nextSteps}&
* Посчитайте значение параметра ___segmentCount___ в файле __404.html__. ([Как это сделать](#решение-на-практике)) 
* В файле __package.json__ выставьте __свой домен__ в поле _homepage_.
* Добавляем домен в настройки GitHub Pages в поле для домена.

![{"alt": "GitHub Pages", "src": "&&GitHubPagesDNSSetup", "fullWidth": true, "frame": true}]()
## &{&&locale/headers/ghSources}&
Вы можете найти этот пример на GitHub [здесь](https://github.com/material-docs/material-docs-example-project/tree/hosting-on-gh-pages)