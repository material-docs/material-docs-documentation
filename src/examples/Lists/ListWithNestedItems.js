/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import List from "@material-docs/core/components/List";
import ListItem from "@material-docs/core/components/ListItem";
import ListItemContained from "@material-docs/core/components/ListItemContained/ListItemContained";

export default function ListWithNestedItems() {
    return (
        <React.Fragment>
            <List>
                <ListItem>
                    Web
                    <ListItemContained>
                        <ListItem>Front-end</ListItem>
                        <ListItem>Back-end</ListItem>
                    </ListItemContained>
                </ListItem>
                <ListItem>
                    <ListItemContained>
                        <ListItem>Engine programmer</ListItem>
                        <ListItem>Level designer</ListItem>
                        <ListItem>Character artist</ListItem>
                    </ListItemContained>
                    Gamedev
                </ListItem>
                <ListItem>Data science</ListItem>
            </List>
        </React.Fragment>
    );
}