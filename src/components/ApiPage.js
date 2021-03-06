/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {Code, H3, Markdown, useLang} from "@material-docs/core";
import ReactComponentApiPage from "@material-docs/react-components-docs-extension/components/ReactComponentApiPage";
import ReactComponentApiPageSummary
    from "@material-docs/react-components-docs-extension/components/ReactComponentApiPageSummary";
import ReactComponentApiPageImport
    from "@material-docs/react-components-docs-extension/components/ReactComponentApiPageImport";
import ReactComponentApiPageProps
    from "@material-docs/react-components-docs-extension/components/ReactComponentApiPageProps";
import Prop from "@material-docs/react-components-docs-extension/components/Prop";
import ReactComponentApiPageStyles
    from "@material-docs/react-components-docs-extension/components/ReactComponentApiPageStyles";
import Style from "@material-docs/react-components-docs-extension/components/Style";
import ReactComponentApiPageFooter
    from "@material-docs/react-components-docs-extension/components/ReactComponentApiPageFooter";
import ReactComponentApiPageDetails
    from "@material-docs/react-components-docs-extension/components/ReactComponentApiPageDetails";


export default function ApiPage(props, ref) {
    const {
        // lang,
        localeName,
        importCode,
        name,
        overrideName,
        properties = [],
        css = [],
        children,
        enableCss = true,
        enableProps = true,
        refNotForwarded = false,
        propsForwarded = false,
        ...other
    } = props;
    const {lang} = useLang();
    if (!localeName) throw new Error(`Documentation: localeName is required prop`);

    const locale = props.locale || lang.locale.pages[localeName];
    const componentAPILocale = lang.locale.common.ComponentAPI;

    const searchTags = locale.searchTags && Object.keys(locale.searchTags).map(key => locale.searchTags[key]);

    return (
        <ReactComponentApiPage
            name={name}
            searchDescription={locale.searchDescription}
            searchLabel={name + " API"}
            searchTags={searchTags}
        >
            <ReactComponentApiPageSummary>
                <H3 noTag noDivider>
                    <Markdown data={{name}} typographyInheritSize inline>
                        {componentAPILocale.summary}
                    </Markdown>
                </H3>
            </ReactComponentApiPageSummary>
            <ReactComponentApiPageImport>
                <Code themeLight={"darcula"}>{importCode}</Code>
                <Markdown>{componentAPILocale.importDifferenceText}</Markdown>
                {overrideName && <Markdown data={{name: overrideName}}>{componentAPILocale.componentName}</Markdown>}
            </ReactComponentApiPageImport>
            {enableProps &&
            <ReactComponentApiPageProps>
                {properties.map(prop =>
                    <Prop name={prop.name} type={prop.type} def={prop.default} key={prop.name}>{prop.description}</Prop>
                )}
            </ReactComponentApiPageProps>
            }
            <ReactComponentApiPageDetails>
                {!refNotForwarded && <Markdown>{componentAPILocale.refText}</Markdown>}
                {propsForwarded && <Markdown>{componentAPILocale.propsText}</Markdown>}
            </ReactComponentApiPageDetails>
            {enableCss &&
            <ReactComponentApiPageStyles>
                {css.map(rule =>
                    <Style name={rule.name} global={rule.global} key={rule.name}>{rule.description}</Style>
                )}
            </ReactComponentApiPageStyles>
            }
            <ReactComponentApiPageFooter>
                <Markdown data={{name}}>
                    {componentAPILocale.customization}
                </Markdown>
                {children}
            </ReactComponentApiPageFooter>
        </ReactComponentApiPage>
    );
}