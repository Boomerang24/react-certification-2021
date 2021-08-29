import React, { useState, useContext } from "react";
import { StyledSwitch } from "../Switch/Switch.styles";
import { Nav, SearchBar, SearchButton, SearchNav } from "./NavBar.styles";
import styled from "styled-components";
import { VideosContext } from "../providers/VideosProvider";
import { useHistory } from "react-router-dom";
import AuthenticationButton from "../AuthButton/authentication-button";
import TemporaryDrawer from "../Sidebar/SideMenu";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;

  @media screen and (max-width: 560px) {
    .darkmode-switch {
      display: none;
    }
  }
`;

export const NavBar = () => {
  const { setBusqueda } = useContext(VideosContext);
  const [inputValue, setInputvalue] = useState("");

  const history = useHistory();

  const handleInputeChange = (e) => {
    setInputvalue(e.target.value);
  };

  const handleSubmitChange = (e) => {
    e.preventDefault();
    setBusqueda(inputValue);
    history.push("/");
  };

  return (
    <Nav data-testid="navbar-container">
      <TemporaryDrawer />
      <SearchNav>
        <form type="submit" onSubmit={handleSubmitChange}>
          <SearchBar
            type="text"
            placeholder="Enter your video name"
            value={inputValue}
            onChange={handleInputeChange}
            data-testid="search-field"
          />
        </form>
        <SearchButton
          onClick={handleSubmitChange}
          data-testid="search-button"
        />
      </SearchNav>
      <Container>
        <StyledSwitch />
        <AuthenticationButton></AuthenticationButton>
      </Container>
    </Nav>
  );
};
