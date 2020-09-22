/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {Link} from "@material-ui/core";

import {H2, List, ListItem, useLang} from "@material-docs/core";
import ApiPage from "../../../components/ApiPage";

import importCode from "./importCode.md";

export default function TableCellAPI() {
    const {lang} = useLang();
    const locale = lang.locale.pages.TableCellAPI;

    return (
        <ApiPage
            name={"TableCell"}
            localeName={"TableCellAPI"}
            overrideName={"MatDoc-DemoWithCode"}
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
                {name: "root", global: "MatDoc-root", description: locale.css.root},
                {name: "head", global: "MatDoc-head", description: locale.css.head},
                {name: "body", global: "MatDoc-body", description: locale.css.body},
                {name: "footer", global: "MatDoc-footer", description: locale.css.footer},
                {name: "sizeSmall", global: "MatDoc-sizeSmall", description: locale.css.sizeSmall},
                {name: "paddingCheckbox", global: "MatDoc-paddingCheckbox", description: locale.css.paddingCheckbox},
                {name: "paddingNone", global: "MatDoc-paddingNone", description: locale.css.paddingNone},
                {name: "alignLeft", global: "MatDoc-alignLeft", description: locale.css.alignLeft},
                {name: "alignCenter", global: "MatDoc-alignCenter", description: locale.css.alignCenter},
                {name: "alignRight", global: "MatDoc-alignRight", description: locale.css.alignRight},
                {name: "alignJustify", global: "MatDoc-alignJustify", description: locale.css.alignJustify},
                {name: "stickyHeader", global: "MatDoc-stickyHeader", description: locale.css.stickyHeader},
            ]}
        >
            <H2>Demos</H2>
            <List>
                <ListItem><Link>Tables</Link></ListItem>
            </List>
        </ApiPage>
    );
}