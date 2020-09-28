/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import DocsPage from "@material-docs/core/components/DocsPage/DocsPage";
import Markdown from "@material-docs/core/components/Markdown/Markdown";

import content from "./AdvancedMaterialDocsUsage.md";

export default function AdvancedMaterialDocsUsage() {
    return (
        <DocsPage
            name={"Advanced Material Docs Usage"}
            searchTags={["create", "material", "docs", "tutorial", "faq", "manual", "advanced"]}
            searchLabel={"Hosting you Material Docs based documentation on GitHub pages"}
        >
            <Markdown
                data={{
                    locale: "pages/HostingMaterialDocsOnGHPagesTutorial",
                }}
                children={content}
            />
        </DocsPage>
    );
}