/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";

import {H2, List, ListItem, useLang} from "@material-docs/core";
import ApiPage from "../../../components/ApiPage";
import Link from "@material-docs/core/components/Link/Link";

import importCode from "./importCode.md";

export default function LangProviderAPI() {
    const {lang} = useLang();
    const locale = lang.locale.pages.LangProviderAPI;

    return (
        <ApiPage
            name={"LangProvider"}
            localeName={"LangProviderAPI"}
            overrideName={"MaterialDocs-LangProvider"}
            importCode={importCode}
            properties={[
                {name: "lang", type: "{locale: object}", default: "", description: locale.props.lang},
                {name: "children", type: "node", default: "", description: locale.props.children},
            ]}
            enableCss={false}
        >
            {/*<H2>Demos</H2>*/}
            {/*<List>*/}
            {/*    <ListItem><Link page={["Components", "Text decorators"]}>Text styling</Link></ListItem>*/}
            {/*</List>*/}
        </ApiPage>
    );
}