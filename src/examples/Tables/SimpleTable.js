/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import Table from "@material-docs/core/components/Table";
import TableHead from "@material-docs/core/components/TableHead";
import TableBody from "@material-docs/core/components/TableBody";
import TableRow from "@material-docs/core/components/TableRow";
import TableCell from "@material-docs/core/components/TableCell";

export default function SimpleTable() {
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>English</TableCell>
                    <TableCell>Russian</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>Hello darkness my old friend</TableCell>
                    <TableCell>Привет, тьма, моя старая подруга</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>I`ve come to talk with you again</TableCell>
                    <TableCell>Я пришел снова побеседовать с тобой</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
}
