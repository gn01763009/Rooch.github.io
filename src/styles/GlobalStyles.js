import { createGlobalStyle } from "styled-components";
import "@fontsource/akaya-telivigala"
import "@fontsource/sora"




const GlobalStyles = createGlobalStyle`

${'' /* 
*{
    outline: 1px solid red !important;
} */}

*,*::before,*::after{
    margin: 0;
    padding: 0;
}

body{
    font-family: OpenSans,SF Pro HK,SF Pro Display,SF Pro Icons,PingFang HK,Segoe UI,SegoeUI,Microsoft JhengHei,微軟正黑體,Helvetica Neue,Helvetica,Arial,sans-serif;
    overflow-x: hidden;
    color: #363636;
}

h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
}
a{
    color: inherit;
    text-decoration:none;
}
.logo{
    width: 76px;
}
.btn-primary{
    background-color: #FB4A1E;
    color: White;
    transition: all 0.2s ease;
}
.btn-primary:hover{
    background-color: #FF5F3A;
    color: White;
    transform: scale(0.9);
}
.btn-secondary{
    background-color: #363636;
    color: White;
    transition: all 0.2s ease;
}
.btn-secondary:hover{
    background-color: #4D4D4D;
    color: White;
    transform: scale(0.9);
}
.mark-value{
    
}
`

export default GlobalStyles;