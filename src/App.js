import React from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { StyledSection } from "./style";
import { createGlobalStyle } from "styled-components";
import ReactIcon from "../src/assets/react-1.svg";
import { Flex, Box } from "rebass";

const GlobalStyle = createGlobalStyle`
  body {
    background: #222;
    color: white;
  }
  ul {
    list-style-type: none;
    display: flex;
    li {
      padding-right: 20px;
      a {
        color: white;
      }
    }
  }
  .container img {
    display: block;
    margin: 0 auto;
  }
  .container h2 {
    text-align: center;
  }
`;

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <StyledSection>
        <Flex flexDirection="cols">
          <Box>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </Box>
        </Flex>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </StyledSection>
    </Router>
  );
};

function Home() {
  return (
    <div className="container">
      <h2>React boilerplate</h2>
      <img src={ReactIcon} width="200px" />
    </div>
  );
}

function About() {
  return (
    <Flex flexDirection="rows" alignItems="center">
      <h2>About</h2>
    </Flex>
  );
}

export default hot(module)(App);
