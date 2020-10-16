/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import DocsPage from "@material-docs/core/components/DocsPage/DocsPage";
import Markdown from "@material-docs/core/components/Markdown/Markdown";
import logo from "./images/MaterialDocsLogoOverview.svg"

import content from "./introduction.md";

export default function Introduction() {
    return (
        <DocsPage
            name={"Introduction"}
            searchTags={["introduction", "material", "docs", "about", "why"]}
            searchLabel={"Introduction to Material Docs."}
            order={1}
        >
            <Markdown
                data={{
                    locale: "pages/IntroductionPage",
                    logo: logo
                }}
                children={content}
            />
        </DocsPage>
    );
}