import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
	    box-sizing: border-box;
    }

    body {
        margin: 0 auto;
        padding: 1.5rem 4rem;
        max-width: 1424px;
        font-family: -apple-system, BlinkMacSystemFont, 'Open Sans Condensed',
            'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
            'Droid Sans', 'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        @media screen and (max-width: 800px) {
            padding: 1rem;
        }
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
    }

    a {
        font-size: 1.1rem;
        text-decoration: none;
        color: black;
    }
`;
