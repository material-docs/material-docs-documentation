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


export default function CreatingMaterialDocs() {
    return (
        <DocsPage
            name={"Creating Material Docs"}
            searchTags={["create", "material", "docs", "tutorial", "faq", "manual"]}
            searchLabel={"Creating Material Docs"}
        >
            <Markdown
                data={{
                    BasicStructureImage,
                    PageAboutMeImage,
                }}
                children={content}
            />
        </DocsPage>
    );
}