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
import Markdown from "@material-docs/core/components/Markdown";

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
                    <TableCell>
                        <Markdown inline typographyInheritSize>
                            Hello __darkness__ my old _friend_
                        </Markdown>
                    </TableCell>
                    <TableCell>
                        <Markdown inline typographyInheritSize>
                            Привет, __тьма__, моя старая _подруга_
                        </Markdown>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        <Markdown inline typographyInheritSize>
                            I`ve come ___to talk___ with you again
                        </Markdown>
                    </TableCell>
                    <TableCell>
                        <Markdown inline typographyInheritSize>
                            Я пришел снова ___побеседовать___ с тобой
                        </Markdown>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
}
