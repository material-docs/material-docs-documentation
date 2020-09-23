import React from "react";
import ReactComponentApiPage from "@material-docs/react-components-docs-extension/components/ReactComponentApiPage";
import ReactComponentApiPageSummary from "@material-docs/react-components-docs-extension/components/ReactComponentApiPageSummary";
import ReactComponentApiPageImport from "@material-docs/react-components-docs-extension/components/ReactComponentApiPageImport";
import ReactComponentApiPageProps from "@material-docs/react-components-docs-extension/components/ReactComponentApiPageProps";
import ReactComponentApiPageStyles from "@material-docs/react-components-docs-extension/components/ReactComponentApiPageStyles";
import ReactComponentApiPageFooter from "@material-docs/react-components-docs-extension/components/ReactComponentApiPageFooter";
import ReactComponentApiPageDetails from "@material-docs/react-components-docs-extension/components/ReactComponentApiPageDetails";
import Style from "@material-docs/react-components-docs-extension/components/Style";
import Prop from "@material-docs/react-components-docs-extension/components/Prop";


export default function ApiPage(props, ref) {
    return (
        <ReactComponentApiPage
            name={name}
            searchDescription={locale.searchDescription}
        >
            <ReactComponentApiPageSummary>
                Summary block is displayed above the Import block
            </ReactComponentApiPageSummary>
            <ReactComponentApiPageImport>
                Information about how to import your component
            </ReactComponentApiPageImport>
            <ReactComponentApiPageProps>
                <Prop name={"property"} type={"string"} def={"\"Hello\""}>
                    This is a test prop. You can add more.
                </Prop>
            </ReactComponentApiPageProps>
            <ReactComponentApiPageDetails>
                Details block placed after props.
            </ReactComponentApiPageDetails>
            <ReactComponentApiPageStyles>
                <Style name={"nyRuleName"} global={"myGlobalClassName"}>This is my css rule.</Style>
            </ReactComponentApiPageStyles>
            <ReactComponentApiPageFooter>
                Footer block is shown at the end of the page. We recommend to add links and other additional info.
            </ReactComponentApiPageFooter>
        </ReactComponentApiPage>
    );
}