/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {H2, List, ListItem, useLang} from "@material-docs/core";
import ApiPage from "../../../components/ApiPage";

import importCode from "./importCode.md";
import Link from "@material-docs/core/components/Link";

export default function TableCellAPI() {
    const {lang} = useLang();
    const locale = lang.locale.pages.TableCellAPI;

    return (
        <ApiPage
            name={"TableCell"}
            localeName={"TableCellAPI"}
            overrideName={"MuiDemoWithCode"}
            importCode={importCode}
            properties={[
                {name: "align", type: "\"center\" | \"inherit\" | \"justify\" | \"left\" | \"right\"", default: "\"inherit\"", description: locale.props.align},
                {name: "component", type: "elementType", default: "", description: locale.props.component},
                {name: "padding", type: "\"checkbox\" | \"default\" | \"none\"", default: "\"default\"", description: locale.props.padding},
                {name: "scope", type: "string", default: "", description: locale.props.scope},
                {name: "size", type: "\"medium\" | \"small\"", default: "\"medium\"", description: locale.props.size},
                {name: "sortDirection", type: "\"asc\" | \"desc\" | \"false\"", default: "\"false\"", description: locale.props.sortDirection},
                {name: "variant", type: "\"body\" | \"footer\" | \"head\"", default: "\"body\"", description: locale.props.variant},
                {name: "children", type: "node", default: "", description: locale.props.children},
            ]}
            css={[
                {name: "root", global: "MaterialDocs-root", description: locale.css.root},
                {name: "head", global: "MaterialDocs-head", description: locale.css.head},
                {name: "body", global: "MaterialDocs-body", description: locale.css.body},
                {name: "footer", global: "MaterialDocs-footer", description: locale.css.footer},
                {name: "sizeSmall", global: "MaterialDocs-sizeSmall", description: locale.css.sizeSmall},
                {name: "paddingCheckbox", global: "MaterialDocs-paddingCheckbox", description: locale.css.paddingCheckbox},
                {name: "paddingNone", global: "MaterialDocs-paddingNone", description: locale.css.paddingNone},
                {name: "alignLeft", global: "MaterialDocs-alignLeft", description: locale.css.alignLeft},
                {name: "alignCenter", global: "MaterialDocs-alignCenter", description: locale.css.alignCenter},
                {name: "alignRight", global: "MaterialDocs-alignRight", description: locale.css.alignRight},
                {name: "alignJustify", global: "MaterialDocs-alignJustify", description: locale.css.alignJustify},
                {name: "stickyHeader", global: "MaterialDocs-stickyHeader", description: locale.css.stickyHeader},
            ]}
        >
            <H2>Demos</H2>
            <List>
                <ListItem><Link page={["Components", "Tables"]}>Tables</Link></ListItem>
            </List>
        </ApiPage>
    );
}