import { Global, css } from '@emotion/react';

const CSS = css`
    html {
        scroll-behavior: smooth;
    }

    body {
        overflow-x: hidden;
        background-color: #222;
    }

    ::selection {
        background: #2dffc0c5;
    }
`;

function GlobalCSS() {
    return <Global styles={CSS} />;
}

export default GlobalCSS;
