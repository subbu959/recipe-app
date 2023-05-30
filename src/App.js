import Pages from "./pages/Pages";
import Category from "./components/Category";
import Searched from "./components/Search";
import { BrowserRouter } from "react-router-dom";
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {GiKnifeFork} from "react-icons/gi";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <GiKnifeFork/>
          <Logo to={"/"}>Recipe Guide</Logo>
        </Nav>
        <Searched />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration:none;
  font-size:1.5rem;
  font-weight:400;
  font-family:"Lobster two",cursive;
`
const Nav = styled.div`
  padding:2rem 0rem;
  display:flex;\
  justify-content:center;
  svg{
    font-size:2rem;
  }
`
export default App;
