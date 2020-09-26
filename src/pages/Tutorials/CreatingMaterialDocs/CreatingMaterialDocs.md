# &{&&locale/headers/creatingMaterialDocs}&
## &{&&locale/headers/creatingProject}&
&{&&locale/creatingProjectText}&
```{"type": "code", "themeLight": "darcula", "language": "javascript"}
$ npx create-react-app material-docs-example-project
```
## &{&&locale/headers/materialDocsSetup}&
&{&&locale/setup}&
&{&&locale/withYarn}&
```{"type": "code", "themeLight": "darcula", "language": "javascript"}
$ yarn add @material-docs/core
```
&{&&locale/withNpm}&
```{"type": "code", "themeLight": "darcula", "language": "javascript"}
$ npm install @material-docs/core
```
### &{&&locale/headers/indexSetup}&
&{&&locale/indexSetup}&
```{"type": "code", "themeLight": "darcula", "language": "javascript"}
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
```
&{&&locale/indexOverview}&
```{"type": "expansion-code", "themeLight": "darcula", "language": "javascript", "name": "index.html"}
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
```
### &{&&locale/headers/extraFilesDeleting}&
&{&&locale/deleteFiles}&
* App.css
* App.test.js
* App.js

Они нам не понадобятся. 
## &{&&locale/headers/creatingDocs}&
### &{&&locale/headers/basicStructure}&
![{"alt": "Basic structure", "src": "&&BasicStructureImage", "fullWidth": true, "frame": true}]()
&{&&locale/basicStructure}&
##### index.js
```{"type": "code", "themeLight": "darcula", "language": "javascript"}
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import DocsLayout from "@material-docs/core/components/DocsLayout";
import DocsPages from "@material-docs/core/components/DocsPages";
import DocsMenu from "@material-docs/core/components/DocsMenu";
import AutoDocsMenu from "@material-docs/core/components/AutoDocsMenu";

ReactDOM.render(
    <React.StrictMode>
        <DocsLayout
            name={"My documentation"}
            version={"1.0.0-alpha"}
            logo={"http://material-docs.com/static/media/logo.5a237c82.svg"}
            keywords={["my", "test", "documentation"]}
            description={"This is an example documentation for Material Docs framework."}
            author={"Danil Andreev"}
        >
            <DocsMenu>
                <AutoDocsMenu />
            </DocsMenu>
            <DocsPages>
                
            </DocsPages>
        </DocsLayout>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();
```
&{&&locale/indexJsDescription}&
* ___name___ - &{&&locale/props/name}&
* ___version___ - &{&&locale/props/version}&
* ___logo___ - &{&&locale/props/logo}&
* ___keywords___ - &{&&locale/props/keywords}&
* ___description___ - &{&&locale/props/description}&
* ___author___ - &{&&locale/props/author}&

&{&&locale/moreInfo}& 

## &{&&locale/headers/creatingPage}&
![{"alt": "Page image", "src": "&&PageAboutMeImage", "fullWidth": true, "frame": true}]()
&{&&locale/creatingPage}& 
##### index.html
```{"type": "code", "themeLight": "darcula", "language": "javascript"}
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import DocsLayout from "@material-docs/core/components/DocsLayout";
import DocsPages from "@material-docs/core/components/DocsPages";
import DocsMenu from "@material-docs/core/components/DocsMenu";
import AutoDocsMenu from "@material-docs/core/components/AutoDocsMenu";
import DocsPage from "@material-docs/core/components/DocsPage";
import H1 from "@material-docs/core/components/H1";
import H3 from "@material-docs/core/components/H3";
import Markdown from "@material-docs/core/components/Markdown";
import Image from "@material-docs/core/components/Image";
import Code from "@material-docs/core/components/Code";
import H4 from "@material-docs/core/components/H4";

ReactDOM.render(
    <React.StrictMode>
        <DocsLayout
            name={"My documentation"}
            version={"1.0.0-alpha"}
            logo={"http://material-docs.com/static/media/logo.5a237c82.svg"}
            keywords={["my", "test", "documentation"]}
            description={"This is an example documentation for Material Docs framework."}
            author={"Danil Andreev"}
        >
            <DocsMenu>
                <AutoDocsMenu />
            </DocsMenu>
            <DocsPages>
                <DocsPage
                    name={"Page about me"}
                    searchLabel={"Danil Andreev | About me"}
                    searchDescription={"This is a page about my person."}
                    searchTags={["me", "info", "danil", "andreev", "programmer"]}
                >
                    <H1>My name is Danil Andreev</H1>
                    <H3>This is a page about my history.</H3>
                    <Markdown>Hello, my name is __Danil Andreev__, I am a programmer from Kiev, Ukraine.</Markdown>
                    <Image src={"https://cdnb.artstation.com/p/users/avatars/000/449/963/large/fc6a568b26ecfe1fe02f6dc60da732ae.jpg?1587936613"}/>
                    <H4>I will show you a piece of code</H4>
                    <Code>
                        $ Hello darkness my old friend
                    </Code>
                </DocsPage>
            </DocsPages>
        </DocsLayout>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();
```
### &{&&locale/headers/creatingPageComponent}&
&{&&locale/creatingPageComponent}& 
```{"type": "expansion-code", "themeLight": "darcula", "language": "javascript", "name": "FirstPage.js"}
import React from "react";
import DocsPage from "@material-docs/core/components/DocsPage";
import H1 from "@material-docs/core/components/H1";
import H3 from "@material-docs/core/components/H3";
import Markdown from "@material-docs/core/components/Markdown";
import Image from "@material-docs/core/components/Image";
import H4 from "@material-docs/core/components/H4";
import Code from "@material-docs/core/components/Code";

export default function FirstPage() {
    return (
        <DocsPage
            name={"Page about me"}
            searchLabel={"Danil Andreev | About me"}
            searchDescription={"This is a page about my person."}
            searchTags={["me", "info", "danil", "andreev", "programmer"]}
        >
            <H1>My name is Danil Andreev</H1>
            <H3>This is a page about my history.</H3>
            <Markdown>Hello, my name is __Danil Andreev__, I am a programmer from Kiev, Ukraine.</Markdown>
            <Image src={"https://cdnb.artstation.com/p/users/avatars/000/449/963/large/fc6a568b26ecfe1fe02f6dc60da732ae.jpg?1587936613"}/>
            <H4>I will show you a piece of code</H4>
            <Code>
                $ Hello darkness my old friend
            </Code>
        </DocsPage>

    );
}
```
```{"type": "expansion-code", "themeLight": "darcula", "language": "javascript", "name": "index.js"}
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import DocsLayout from "@material-docs/core/components/DocsLayout";
import DocsPages from "@material-docs/core/components/DocsPages";
import DocsMenu from "@material-docs/core/components/DocsMenu";
import AutoDocsMenu from "@material-docs/core/components/AutoDocsMenu";
import FirstPage from "./pages/FirstPage";

ReactDOM.render(
    <React.StrictMode>
        <DocsLayout
            name={"My documentation"}
            version={"1.0.0-alpha"}
            logo={"http://material-docs.com/static/media/logo.5a237c82.svg"}
            keywords={["my", "test", "documentation"]}
            description={"This is an example documentation for Material Docs framework."}
            author={"Danil Andreev"}
        >
            <DocsMenu>
                <AutoDocsMenu />
            </DocsMenu>
            <DocsPages>
                <FirstPage/>
            </DocsPages>
        </DocsLayout>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();
```
### &{&&locale/headers/creatingAnotherPage}&
```{"type": "expansion-code", "themeLight": "darcula", "language": "javascript", "name": "SecondPage.js"}
import React from "react";
import DocsPage from "@material-docs/core/components/DocsPage";
import H1 from "@material-docs/core/components/H1";
import Table from "@material-docs/core/components/Table";
import TableRow from "@material-docs/core/components/TableRow";
import TableCell from "@material-docs/core/components/TableCell";
import TableHead from "@material-docs/core/components/TableHead";
import TableBody from "@material-docs/core/components/TableBody";
import H3 from "@material-docs/core/components/H3";

export default function SecondPage() {
    return (
        <DocsPage
            name={"Features page"}
            searchLabel={"Features are cool!"}
            searchDescription={"This is a page about features."}
            searchTags={["page", "feature", "amazing"]}
        >
            <H1>This is a feature page</H1>
            <H3 noDivider>Table</H3>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Action</TableCell>
                        <TableCell>Dog</TableCell>
                        <TableCell>Human</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>Can speak</TableCell>
                        <TableCell>No</TableCell>
                        <TableCell>Yes</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Can eat</TableCell>
                        <TableCell>Yes</TableCell>
                        <TableCell>Yes</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Can run very fast</TableCell>
                        <TableCell>No</TableCell>
                        <TableCell>Yes</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </DocsPage>
    );
}
```
### &{&&locale/headers/pagesGrouping}&
&{&&locale/pagesGrouping}& 
```{"type": "expansion-code", "themeLight": "darcula", "language": "javascript", "name": "index.js"}
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import DocsLayout from "@material-docs/core/components/DocsLayout";
import DocsPages from "@material-docs/core/components/DocsPages";
import DocsMenu from "@material-docs/core/components/DocsMenu";
import AutoDocsMenu from "@material-docs/core/components/AutoDocsMenu";
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import PagesGroup from "@material-docs/core/components/PagesGroup";

ReactDOM.render(
    <React.StrictMode>
        <DocsLayout
            name={"My documentation"}
            version={"1.0.0-alpha"}
            logo={"http://material-docs.com/static/media/logo.5a237c82.svg"}
            keywords={["my", "test", "documentation"]}
            description={"This is an example documentation for Material Docs framework."}
            author={"Danil Andreev"}
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
### &{&&locale/headers/pagesRedirecting}&
&{&&locale/redirecting}& 
```
["My Group", "Page about me"]
```
#### SecondPage.js
```{"type": "code", "themeLight": "darcula", "language": "javascript"}
<Link page={["My Group", "Page about me"]}>Redirect to Page About Me</Link>
```
## &{&&locale/headers/result}&
##### Page about me (```FirstPaage.js```)
![{"alt": "Результат", "src": "&&ResultImage1", "fullWidth": true, "frame": true}]()
##### Features page (```SecondPage.js```)
![{"alt": "Результат", "src": "&&ResultImage2", "fullWidth": true, "frame": true}]()
## &{&&locale/headers/gitHubSources}&
&{&&locale/githubExample}&