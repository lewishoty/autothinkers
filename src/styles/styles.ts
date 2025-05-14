import { createGlobalStyle } from "styled-components";

export const Styles = createGlobalStyle`

    @font-face {
        font-family: "Motiva Sans Light";
        src: url("/fonts/Motiva-Sans-Light.ttf") format("truetype");
        font-style: normal;
    }

    @font-face {
        font-family: "Motiva Sans Bold";
        src: url("/fonts/Motiva-Sans-Bold.ttf") format("truetype");
        font-style: normal;
    }


    body,
    html,
    a {
        font-family: 'Motiva Sans Light', sans-serif;
    }


    body {
        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        background: #fff;
        overflow-x: hidden;
    }

    a:hover {
        color: #18216d;
    }

    input,
    textarea {
        border-radius: 4px;
        border: 0;
        background: rgb(241, 242, 243);
        transition: all 0.3s ease-in-out;  
        outline: none;
        width: 100%;  
        padding: 1rem 1.25rem;

        :focus-within {
            background: none;
            box-shadow: #2e186a 0px 0px 0px 1px;
        }
    }

    
    h5 {
        font-family: 'Motiva Sans Bold', serif;
        color: #18216d;
        font-size: 32px;
        line-height: 1.18;
        text-align: center;
        padding: 0.6rem;

        @media only screen and (max-width: 890px) {
          font-size: 26.8px;
        }
      
        @media only screen and (max-width: 414px) {
          font-size: 18.2px;
        }
}

    
    h4 {
        font-family: 'Motiva Sans Bold', serif;
        color:rgb(40, 46, 105);
        font-size: 20px;
        line-height: 1.18;

        @media only screen and (max-width: 890px) {
          font-size: 16.8px;
        }
      
        @media only screen and (max-width: 414px) {
          font-size: 11.4px;
        }
    
}
         h3 {
        font-family: 'Motiva Sans Thin', serif;
        color:rgb(87, 88, 98);
        font-size: 14px;
        line-height: 1.18;

        @media only screen and (max-width: 890px) {
          font-size: 13.4px;
        }
      
        @media only screen and (max-width: 414px) {
          font-size: 8px;
        }
    
}
    h1,
    h2,
    h6 {
        font-family: 'Motiva Sans Bold', serif;
        color: #18216d;
        font-size: 56px;
        line-height: 1.18;

        @media only screen and (max-width: 890px) {
          font-size: 47px;
        }
      
        @media only screen and (max-width: 414px) {
          font-size: 32px;
        }
    }

    p {
        color: #18216d;
        font-size: 21px;        
        line-height: 1.41;
    }

    h1 {
        font-weight: 600;
    }

    a {
        text-decoration: none;
        outline: none;
        color: #2E186A;

        :hover {
            color: #2e186a;
        }
    }
    
    *:focus {
        outline: none;
    }

    .about-block-image svg {
        text-align: center;
    }

    .ant-drawer-body {
        display: flex;
        flex-direction: column;
        text-align: left;
        padding-top: 1.5rem;
    }

    .ant-drawer-content-wrapper {
        width: 300px !important;
    }
`;
