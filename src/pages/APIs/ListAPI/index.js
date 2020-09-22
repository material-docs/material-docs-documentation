/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";

import {H2, List, ListItem, useLang} from "@material-docs/core";
import ApiPage from "../../../components/ApiPage";
import Link from "@material-docs/core/components/Link/Link";

const importCode = `
import {List} from "@material-docs/core";
// or
import List from "@material-docs/core/components/List";
`.trim();

export default function ListAPI() {
    const {lang} = useLang();
    const locale = lang.locale.pages.ListAPI;

    return (
        <ApiPage
            name={"List"}
            localeName={"ListAPI"}
            overrideName={"MatDoc-List"}
            importCode={importCode}
            properties={[
                {name: "image", type: "string", default: "", description: locale.props.image},
                {name: "styling", type: "\"inside\" | \"outside\" | \"inherit\" | \"revert\" | \"unset\"", default: "\"inside\"", description: locale.props.styling},
                {name: "children", type: "node", default: "", description: locale.props.children},
            ]}
            css={[
                {name: "root", global: "MatDoc-root", description: locale.css.root},
                {name: "stylePositionInside", global: "MatDoc-stylePositionInside", description: locale.css.stylePositionInside},
                {name: "stylePositionOutside", global: "MatDoc-stylePositionOutside", description: locale.css.stylePositionOutside},
                {name: "stylePositionInherit", global: "MatDoc-stylePositionInherit", description: locale.css.stylePositionInherit},
                {name: "stylePositionRevert", global: "MatDoc-stylePositionRevert", description: locale.css.stylePositionRevert},
                {name: "stylePositionUnset", global: "MatDoc-stylePositionUnset", description: locale.css.stylePositionUnset},
            ]}
        >
            <H2>Demos</H2>
            <List>
                <ListItem><Link page={["Components", "Lists"]}>Lists</Link></ListItem>
            </List>
        </ApiPage>
    );
}