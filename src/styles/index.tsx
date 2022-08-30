import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
    ${normalize}

:root{
//Text
   --light-text: #fff;
   --dark-text: #3b4363;
//Background
   --light-background: radial-gradient(circle, hsl(0, 0%, 99%), #00000076);
   --dark-background: radial-gradient(circle, hsl(190, 60%, 30%), #0c1132);
   --dark: #3b4363;
   --light: #fff;
}

*,*::before,*::after{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
}

body {
    font-family: 'Barlow Semi Condensed', sans-serif;
    background-repeat: no-repeat;
    background: var(--background);
    color: var(--text);
}

body[theme='light'] {
    --background: var(--light-background);
    --text: var(--dark-text);
    --ui-text: var(--light-text);
    --ui-background: var(--dark);
}

body[theme='dark'] {
    --background: var(--dark-background);
    --text: var(--light-text);
    --ui-text: var(--dark-text);
    --ui-background: var(--light);
}
`;
