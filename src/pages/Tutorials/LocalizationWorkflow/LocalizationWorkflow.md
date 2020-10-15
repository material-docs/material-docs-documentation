# &{&&locale/headers/localizationProcess}&
## &{&&locale/headers/localization}&
### &{&&locale/headers/creatingLang}&
&{&&locale/langStructureCaption}&
* Lang
  * ```name: string``` -  &{&&locale/langStructureName}&
  * ```label: string``` - &{&&locale/langStructureLabel}&
  * ```locale: object``` - &{&&locale/langStructureLocale}&
  * ```loadLang(): object``` - &{&&locale/langStructureLoadLang}&

> &{&&locale/langStructureComment}&

&{&&locale/creatingLang}& ```<DocsLayout/>```:
##### locale/EN.js
```{"type": "code", "themeLight": "darcula"}
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
&{&&locale/applyingLang}& ```<DocsLayout/>```:
```{"type": "code", "themeLight": "darcula"}
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
&{&&locale/appliedLang}& 
### &{&&locale/headers/langAccess}&
&{&&locale/accessingLang}& 
&{&&locale/accessingLangComment}& 

```{"type": "code", "themeLight": "darcula"}
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
### &{&&locale/headers/langTranslation}&
&{&&locale/translating}& 
> &{&&locale/translatingComment}& 

&{&&locale/createTranslate}& 
```{"type": "code", "themeLight": "darcula"}
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
> &{&&locale/missingFieldsComment}& 

&{&&locale/providingLang}& 
```{"type": "code", "themeLight": "darcula"}
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
&{&&locale/languageSwitch}& 
### &{&&locale/headers/interfaceLocalization}& Material Docs
&{&&locale/interfaceTranslating}& 
```{"type": "code", "themeLight": "darcula"}
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
&{&&locale/interfaceTranslated}& 
### &{&&locale/headers/mechanismAccess}&
&{&&locale/usingHooks}& 

## &{&&locale/headers/sourcesOnGitHub}& GitHub
&{&&locale/sourcesOnGitHub}&  GitHub [&{&&locale/here}& ](&&GitHubLink)