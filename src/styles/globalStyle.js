import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
html{
    min-height:100%;
    background:#202020;
}
*, button, input{
    border:0;
    background:none;
    font-family:'Fira Code';
}
ul{
    list-style:none;
}
`;
