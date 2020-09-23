/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";

import {H2, List, ListItem, useLang} from "@material-docs/core";
import ApiPage from "../../../components/ApiPage";
import Link from "@material-docs/core/components/Link/Link";
import importCode from "./importCode.md";

export default function DocsPageAPI() {
    const {lang} = useLang();
    const locale = lang.locale.pages.DocsPageAPI;

    return (
        <ApiPage
            name={"DocsPage"}
            localeName={"DocsPageAPI"}
            overrideName={"MatDoc-DocsPage"}
            importCode={importCode}
            properties={[
                {name: "name", type: "string", default: "", description: locale.props.name},
                {name: "searchTags", type: "string[]", default: "", description: locale.props.searchTags},
                {name: "searchLabel", type: "string", default: "", description: locale.props.searchLabel},
                {name: "searchDescription", type: "string", default: "", description: locale.props.searchDescription},
                {name: "noGenerateAutoSearch", type: "boolean", default: "false", description: locale.props.noGenerateAutoSearch},
                {name: "noAutoMenu", type: "boolean", default: "false", description: locale.props.noAutoMenu},
                {name: "order", type: "number", default: "", description: locale.props.code},
                {name: "children", type: "node", default: "", description: locale.props.children},
            ]}
            css={[
                {name: "root", global: "MatDoc-root", description: locale.css.root},
                {name: "contentItem", global: "MatDoc-contentItem", description: locale.css.contentItem},
                {name: "contentItemActive", global: "MatDoc-contentItemActive", description: locale.css.contentItemActive},
                {name: "contentLink", global: "MatDoc-contentLink", description: locale.css.contentLink},
                {name: "copyright", global: "MatDoc-copyright", description: locale.css.copyright},
            ]}
        >
            <H2>Demos</H2>
            <List>
                <ListItem><Link page={["Components", "Layout"]}>Layout</Link></ListItem>
            </List>
        </ApiPage>
    );
}