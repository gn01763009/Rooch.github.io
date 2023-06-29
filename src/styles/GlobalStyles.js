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
.mark-value{
    
}
`

export default GlobalStyles;