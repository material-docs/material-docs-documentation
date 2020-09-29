/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import DocsPage from "@material-docs/core/components/DocsPage/DocsPage";
import Markdown from "@material-docs/core/components/Markdown/Markdown";

import content from "./HostingMaterialDocsOnGHPages.md";
import GitHubPagesInitialImage from "./images/GitHubPagesInitialImage.png";
import GitHubPagesSetupImage from "./images/GitHubPagesSetupImage.png";
import DNSSetup from "./images/DNSSetup.png";
import GitHubPagesDNSSetup from "./images/GitHubPagesDNSSetup.png";

export default function HostingMaterialDocsOnGHPages() {
    return (
        <DocsPage
            name={"Hosting on GitHub Pages"}
            searchTags={["create", "material", "docs", "tutorial", "faq", "manual"]}
            searchLabel={"Hosting you Material Docs based documentation on GitHub pages"}
            order={2}
        >
            <Markdown
                data={{
                    locale: "pages/HostingMaterialDocsOnGHPagesTutorial",
                    GitHubPagesInitialImage,
                    GitHubPagesSetupImage,
                    DNSSetup,
                    GitHubPagesDNSSetup,
                }}
                children={content}
            />
        </DocsPage>
    );
}