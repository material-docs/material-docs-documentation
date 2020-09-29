/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import DocsPage from "@material-docs/core/components/DocsPage/DocsPage";
import Markdown from "@material-docs/core/components/Markdown/Markdown";

import content from "./CreatingMaterialDocs.md";
import BasicStructureImage from "./images/BasicStructureImage.png";
import PageAboutMeImage from "./images/PageAboutMeImage.png";
import ResultImage1 from "./images/ResultImage1.png";
import ResultImage2 from "./images/ResultImage2.png";

export default function CreatingMaterialDocs() {
    return (
        <DocsPage
            name={"Creating Material Docs"}
            searchTags={["create", "material", "docs", "tutorial", "faq", "manual"]}
            searchLabel={"Creating Material Docs"}
            order={1}
        >
            <Markdown
                data={{
                    locale: "pages/CreatingMaterialDocsTutorial",
                    BasicStructureImage,
                    PageAboutMeImage,
                    ResultImage1,
                    ResultImage2,
                    createReactAppLink: "https://reactjs.org/docs/create-a-new-react-app.html",
                    gitHubSource: "https://github.com/material-docs/material-docs-example-project/tree/creating-material-docs",

                }}
                children={content}
            />
        </DocsPage>
    );
}