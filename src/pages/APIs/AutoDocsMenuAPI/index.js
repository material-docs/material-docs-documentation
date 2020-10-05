/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import ApiPage from "../../../components/ApiPage";
import importCode from "./importCode.md";
import useLang from "@material-docs/core/hooks/useLang";
import {H2, List, ListItem} from "@material-docs/core";
import Link from "@material-docs/core/components/Link";


export default function AutoDocsMenuAPI() {
    const {lang} = useLang();
    const locale = lang.locale.pages.AutoDocsMenuAPI;
    return (
        <ApiPage
            name={"AutoDocsMenu"}
            overrideName={"MaterialDocs-AutoDocsMenu"}
            localeName={"AutoDocsMenuAPI"}
            importCode={importCode}
            properties={[
                {name: "layoutData", type: "PagesGroupData", default: "", description: locale.props.layoutData}
            ]}
            enableCss={false}
        >
            <H2>Demos</H2>
            <List>
                <ListItem><Link page={["Components", "Layout"]}>Layout</Link></ListItem>
            </List>
        </ApiPage>
    );
}