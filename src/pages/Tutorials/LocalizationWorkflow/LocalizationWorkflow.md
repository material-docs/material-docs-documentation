# Процесс локализации
## Локализация 
### Создание языкового пакета
В Material Docs присутствует встроенный механизм для локализации. Языковой пакет имеет следующую структуру:
* Lang
  * ```name: string``` -  Название языкового пакета. (_рекомендует называть в соответствии со стандартами, например __en-us___)
  * ```label: string``` - Красивое названия языкового пакета, будет отображено в интерфейсе.
  * ```locale: abject``` - Объект, в котором хранятся ваши данные о локализации. 
  * ```loadLang(): object``` - Функция, которая будет вызвана при загрузке языка. Нужна для получения локализации с удаленного хоста.

> В объекте Lang __обязательно должен быть определен один из параметров: _locale_ или _loadLang_!__

Создадим языковой пакет для существующих страниц и передадим его в ```<DocsLayout/>```:
##### locale/EN.js
```
export default {
    name: "en-us",
    label: "English",
    locale: {
        pages: {
            FirstPage: {
                header1: "My name is Danil Andreev",
                header2: "This is a page about my history.",
                text: "Hello, my name is __Danil Andreev__, I am a programmer from Kiev, Ukraine.",
                header3: "I will show you a piece of code",
            },
            SecondPage: {
                header1: "This is a feature page",
                header2: "Table",
                redirect: "Redirect to Page About Me",
            }
        }
    }
}
```
Теперь, когда мы создали один языковой пакет, мы можем запустить систему локализации Material Docs. Для этого 
нужно передать пакет в ```<DocsLayout/>```:
```
<DocsLayout
    name={"My documentation"}
    version={"1.0.0-alpha"}
    logo={"http://material-docs.com/static/media/logo.5a237c82.svg"}
    keywords={["my", "test", "documentation"]}
    description={"This is an example documentation for Material Docs framework."}
    author={"Danil Andreev"}

    defaultLang={EN}
>
{/*...*/}
</DocsLayout>
``` 
В правом верхнем углу появилось поле с языком. 
### Доступ к языковому пакету
Теперь, давайте достанем текст из языкового пакета. Для этого воспользуемся компонентом ```<Locale/>```. В параметре ___path___
 указывается путь к переменной внутри объекта _locale_ в языковом пакете.
> Обратите внимание, локализацию компонента ```<Markdown/>``` нужно проводить иначе. В этом компоненте присутствует 
> собственный параметр ___locale___, с помощью которого мы советуем указывать путь в языковом пакете. 

```
import React from "react";
import DocsPage from "@material-docs/core/components/DocsPage";
import H1 from "@material-docs/core/components/H1";
import H3 from "@material-docs/core/components/H3";
import Markdown from "@material-docs/core/components/Markdown";
import Image from "@material-docs/core/components/Image";
import H4 from "@material-docs/core/components/H4";
import Code from "@material-docs/core/components/Code";
import Locale from "@material-docs/core/components/Locale";

const image = "https://cdnb.artstation.com/p/users/avatars/000/449/963/large/fc6a568b26ecfe1fe02f6dc60da732ae.jpg?1587936613";

export default function FirstPage() {
    return (
        <DocsPage
            name={"Page about me"}
            searchLabel={"Danil Andreev | About me"}
            searchDescription={"This is a page about my person."}
            searchTags={["me", "info", "danil", "andreev", "programmer"]}
        >
            <H1><Locale path={"pages/FirstPage/header1"}/></H1>
            <H3><Locale path={"pages/FirstPage/header2"}/></H3>
            <Markdown locale={"pages/FirstPage/text"} />
            <Image src={image}/>
            <H4><Locale path={"pages/FirstPage/header3"}/></H4>
            <Code>
                $ Hello darkness my old friend
            </Code>
        </DocsPage>

    );
}
```
### Добавление перевода
После того, как мы создали ___defaultLanguage___, можно переходить к переводу.
> Используйте только те поля, которые указаны в поле ___locale___ __языкового пакета по умолчанию__.

Создадим перевод:
```
export default {
    name: "ru-ru",
    label: "Русский",
    locale: {
        pages: {
            FirstPage: {
                header1: "Моё имя Данил Андреев",
                header3: "Я покажу ваи кусочек кода",
            }
        }
    }
}
```
> Заметьте, __перевод__ содержит __не все поля__, которые присутствуют в стандартном языковом пакете. Поля, которых нет 
> переводе __будут взяты из стандартного пакета__.

Теперь, давайте передадим в компонент ```<DocsLayout/>``` параметр ___langs___:
```
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import DocsLayout from "@material-docs/core/components/DocsLayout";
import DocsPages from "@material-docs/core/components/DocsPages";
import DocsMenu from "@material-docs/core/components/DocsMenu";
import AutoDocsMenu from "@material-docs/core/components/AutoDocsMenu";
import PagesGroup from "@material-docs/core/components/PagesGroup";
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import EN from "./locale/EN";
import RU from "./locale/RU";

ReactDOM.render(
    <React.StrictMode>
        <DocsLayout
            name={"My documentation"}
            version={"1.0.0-alpha"}
            logo={"http://material-docs.com/static/media/logo.5a237c82.svg"}
            keywords={["my", "test", "documentation"]}
            description={"This is an example documentation for Material Docs framework."}
            author={"Danil Andreev"}
            defaultLang={EN}

            langs={[EN, RU]}
        >
            <DocsMenu>
                <AutoDocsMenu />
            </DocsMenu>
            <DocsPages>
                <PagesGroup name={"My Group"}>
                    <FirstPage/>
                </PagesGroup>
                <SecondPage/>
            </DocsPages>
        </DocsLayout>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();
```
Теперь, кнопка выбора языка справа сверху интерфейса доступна и предлагает на выбор 2 языка.
### Локализация интерфейса Material Docs
Интерфейс MaterialDocs по умолчанию имеет английский язык. Для того, чтоб перевести его, необходимо добавить в следующую
структуру в поле ___locale___ языкового пакета:
```javascript
export default {
    name: "ru-ru",
    label: "Русский",
    locale: {
        pages: {
            FirstPage: {
                header1: "Моё имя Данил Андреев",
                header3: "Я покажу ваи кусочек кода",
            }
        },
        MaterialDocs: {
            navigationList: {
                content: "Содержание"
            },
            tooltips: {
                selectLanguage: "Выбрать язык",
                switchTheme: "Переключить светлую/тёмную тему"
            },
            copyright: "Создано с помощью MaterialDocs. Все права защищены.",
            SearchField: {
                "label": "Поиск..."
            },
            notices: {
                codeCopied: "Кол скопирован в буфер обмена",
                codeNotCopied: "Не удалось скопировать код в буфер обмена"
            },
            ExpansionCode: {
                copyToClipboard: "Скопировать код в буфер обмена",
                expand: "Развернуть/свернуть код",
                moreActions: "Больше действий"
            },
            DemoWithCode: {
                copyToClipboard: "Скопировать код в буфер обмена",
                expand: "Развернуть/свернуть код",
                moreActions: "Больше действий"
            }
        }
    }
}
```
Теперь, интерфейс документации переведен. 
### Доступ к механизму локализации
Вы можете получить доступ к механизму локализации с помощью хука ___useLang()___ или компонента высшего порядка ___withLang()___.
Советуем пользоваться ими только в крайних случаях. 

## Исходники на GitHub
Вы можете найти исходники этого примера на GitHub [здесь](&&GitHubLink)