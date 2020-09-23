import React from "react";
import List from "@material-docs/core/components/List";
import ListItem from "@material-docs/core/components/ListItem";
import {H4} from "@material-docs/core/components";

export default function SimpleList() {
    return (
        <React.Fragment>
            <H4 noTag>Buy</H4>
            <List>
                <ListItem>Carrot x3</ListItem>
                <ListItem>Potato 3kg</ListItem>
                <ListItem>Apples 1kg</ListItem>
                <ListItem>Strawberry 1kg</ListItem>
            </List>
        </React.Fragment>
    );
}