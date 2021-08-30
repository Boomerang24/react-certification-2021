import React, { useState, useContext } from "react";
import { StyledSwitch } from "../Switch/Switch.styles";
import {
  Container,
  Nav,
  SearchBar,
  SearchButton,
  SearchNav,
} from "./NavBar.styles";
import { VideosContext } from "../providers/VideosProvider";
import { useHistory } from "react-router-dom";
import AuthenticationButton from "../AuthButton/AuthenticationButton";
import SideMenu from "../Sidebar/SideMenu";

export const NavBar = () => {
  const { setBusqueda } = useContext(VideosContext);
  const [inputValue, setInputvalue] = useState("");

  const history = useHistory();

  const handleInputChange = (e) => {
    setInputvalue(e.target.value);
  };

  const handleSubmitChange = (e) => {
    e.preventDefault();
    setBusqueda(inputValue);
    history.push("/");
  };

  return (
    <Nav data-testid="navbar-container">
      <SideMenu />
      <SearchNav>
        <form type="submit" onSubmit={handleSubmitChange}>
          <SearchBar
            type="text"
            placeholder="Enter your video name"
            value={inputValue}
            onChange={handleInputChange}
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
