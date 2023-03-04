import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


     @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;500;600;700&display=swap');
        /* font-family: 'Fredoka', sans-serif; */ */

    @import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');  
    @font-face {
        font-family: 'Varela Round', sans-serif;
        src: url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap') format('woff2');
        src: url('https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;500;600;700&display=swap');
         font-family: 'Fredoka', sans-serif;
    }

    :root {
        --blue1: #4cc9f0;
        --blue2: #4895ef;
        --blue3: #4361ee;
        --blue4: #3f37c9;
        --blue5: #3a0ca3;
        --purple1: #480ca8;
        --purple2: #560bad;
        --purple3: #7209b7;
        --violet: #b5179e;
        --pink: #f72585;

        --black: #1A1A1A;
        --grey1: #b5b6ba;
        --grey2: #7a7d85;
        --grey3: #404145;
        --white: #FFFFFF;
    }
    ::placeholder {
        color: var(--blue1);
        opacity: 1;
    }
    ::selection {
        background-color: var(--blue1);
        color: var(--blue5);
    }

    *{
        box-sizing: border-box;
        list-style: none;
        margin: 0;
        padding: 0;
        /* font-family: 'bar', sans-serif; */
    }

    html, textarea {
        color: var(--blue1);
        direction: rtl;
        font-family: 'Varela Round', sans-serif;
        line-height: 1.6;
        font-family: 'Fredoka', sans-serif;
    }
    
    body {
        background-color: var(--white);
        color: var(--blue1);
        height: 100vh;
    }
    
    h1, h2, h3, h4, h5, h6, p {
        /* פונט באנגלית */
        margin: 0;
        padding: 0;
        font-family: 'Varela Round', sans-serif;
        font-family: 'Fredoka', sans-serif;
        font-weight: normal;
    }

    button {
        cursor: pointer;
        font-family: 'Varela Round', sans-serif;
            font-family: 'Fredoka', sans-serif;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    img {
        width: 100%;
    }

    .w-80{
        width: 80%;
    }

    .flex {
        display: flex;
    }

    .flex-1{
        flex: 1;
    }

    .flex-end {
        justify-content: flex-end;
    }
    .column {
        flex-direction: column;
    }
    .space-between{
        justify-content: space-between;
    }
    .align-center {
        align-items: center;
    }

    .space-evenly {
        justify-content:space-evenly;
    }

    .justify-center{
        justify-content: center;
    }
    .justify-end{
        justify-content: flex-end;
    }

    .absolute {
        position: absolute;
    }
    .relative {
        position: relative;
    }

    .column-reverse {
        flex-direction: column-reverse;
    }

    .margin-auto{
        margin: 0 auto;
    }
    
    .red{
        background-color:red;
    }

    .green{

        background-color: green;

    }

    .yellow{
        background-color: yellow;
    }
`;

export default GlobalStyle;