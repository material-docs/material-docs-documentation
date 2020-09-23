import React from "react";
import {DocsLayout, DocsPages, DocsPage, DocsMenu, DocsMenuItem} from "@material-docs/core";

export default function Documentation() {
    return (
        <DocsLayout name="Simple docs">
            <DocsMenu>
                <DocsMenuItem textPrimary="First Page" name="My first page"/>
                <DocsMenuItem textPrimary="Second Page" name="This page is cooler than first."/>
            </DocsMenu>
            <DocsPages>
                <DocsPage name="My first page">Page content...</DocsPage>
                <DocsPage name="This page is cooler than first.">Page content...</DocsPage>
            </DocsPages>
        </DocsLayout>
    );
}