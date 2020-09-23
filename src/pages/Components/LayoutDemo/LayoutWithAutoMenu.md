import React from "react";
import {DocsLayout, DocsPages, DocsPage, DocsMenu, DocsMenuItem, PagesGroup, AutoDocsMenu} from "@material-docs/core";

export default function Documentation() {
    return (
        <DocsLayout name="Docs with auto menu">
            <DocsMenu>
                <AutoDocsMenu/>
            </DocsMenu>
            <DocsPages>
                <PagesGroup name="My page group">
                    <DocsPage name="My first page">Page content...</DocsPage>
                    <DocsPage name="This page is cooler than first.">Page content...</DocsPage>                
                </PagesGroup>
                <PagesGroup name="Another page group">
                    <DocsPage name="Here we are">Page content...</DocsPage>
                    <DocsPage name="Riding the sky">Page content...</DocsPage>                
                </PagesGroup>
                <DocsPage name="I am in the root group">Page content...</DocsPage>                
            </DocsPages>
        </DocsLayout>
    );
}