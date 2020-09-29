/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import DocsPage from "@material-docs/core/components/DocsPage/DocsPage";
import Markdown from "@material-docs/core/components/Markdown/Markdown";

import content from "./LocalizationWorkflow.md";

export default function AdvancedMaterialDocsUsage() {
    return (
        <DocsPage
            name={"Localization workflow"}
            searchTags={["create", "material", "docs", "tutorial", "faq", "manual", "advanced", "localization"]}
            searchLabel={"Localization of Material Docs based documentation."}
            order={3}
        >
            <Markdown
                data={{
                    locale: "pages/HostingMaterialDocsOnGHPagesTutorial",
                    GitHubLink: "https://github.com/material-docs/material-docs-example-project/tree/localization-workflow"
                }}
                children={content}
            />
        </DocsPage>
    );
}