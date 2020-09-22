/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import ApiPage from "../../../components/ApiPage";
import importCode from "./importCode.md";
import demos from "./demos.md";
import Markdown from "@material-docs/core/components/Markdown";
import useLang from "@material-docs/core/hooks/useLang";


export default function AutoDocsMenuAPI() {
    const {lang} = useLang();
    const locale = lang.locale.pages.AutoDocsMenuAPI;
    return (
        <ApiPage
            name={"AutoDocsMenu"}
            overrideName={"MatDoc-AutoDocsMenu"}
            localeName={"AutoDocsMenuAPI"}
            importCode={importCode}
            properties={[
                {name: "layoutData", type: "PagesGroupData", default: "", description: locale.props.layoutData}
            ]}
            enableCss={false}
        >
            <Markdown>{demos}</Markdown>
        </ApiPage>
    );
}