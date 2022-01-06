import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Spline+Sans:wght@300;500;700&display=swap');

    * {
        box-sizing: border-box;
    }

    body {
        background: ${({ theme }) => theme.colors.body};
        color: hsl(192, 100%, 9%);
        font-family: 'Spline Sans', sans-serif;
        font-size: 1.1rem;
        margin: 0;
    }

    p {
        opacity: 0.6;
        line-height: 1.5;
    }

    img {
    max-width: 100%;
    }
`;

export default GlobalStyles;
