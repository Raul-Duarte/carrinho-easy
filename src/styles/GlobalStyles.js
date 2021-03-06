import {createGlobalStyle} from "styled-components"
import 'react-toastify/dist/ReactToastify.css';
import background from '../assets/images/back.jpg'

export default createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  outline: 0;
  box-sizing: border-box;
}
body{
  background-image: url(${background});
  -webkit-font-smoothing: antialiased;
}

body, input,button{
  font: 14px sans-serif;
}

#root{
  max-width: 1020px;
  margin: 0 auto;
  padding: 0 20px 50px;
}
button{
  cursor: pointer;
  
}
`;
