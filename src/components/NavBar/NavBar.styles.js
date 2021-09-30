import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { RiSearchLine } from "react-icons/ri";
import { AiFillHome } from "react-icons/ai";

export const Nav = styled.nav`
  background: #333333;
  border: none;
  box-shadow: 0px 2px red;
  height: 55px;
  display: flex;
  width: 100%;
  z-index: 10;
  justify-content: space-between;

  /* @media screen and (prefers-reduced-motion: no-preference) {
    animation: App-logo-spin infinite 7s linear;
  } */
`;

export const Menu = styled(FaBars)`
  color: white;
  font-size: large;
  height: 25px;
  padding: 0.5rem;
  width: 25px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #0d0d0d;
    color: whitesmoke;
    cursor: pointer;
  }

  /* @media screen and (prefers-reduced-motion: no-preference) {
      animation: App-logo-spin infinite 7s linear;
    } */
`;

export const Home = styled(AiFillHome)`
  position: absolute;
  cursor: pointer;
  left: 70px;
  top: 10px;
  max-width: 5rem;
  font-size: 2rem;
  color: white;
  @media screen and (max-width: 610px) {
    display: none;
  }
`;

export const SearchNav = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
`;

export const SearchBar = styled.input`
  border: inset;
  border-color: white;
  border-radius: 45px;
  background-color: #1a1a1a;
  color: #b3b3b3;
  display: flex;
  font-family: "Sora", sans-serif;
  font-size: 15px;
  height: 15px;
  margin: 0.7rem;
  /* padding: 0.3rem; */
  padding: 7px 25px;
  outline: none;
  width: 215px;

  &:hover,
  &:focus {
    color: whitesmoke;
    transition: all 0.2s ease-in-out;
  }

  @media screen and (max-width: 560px) {
    width: 150px;
    font-size: 15px;
  }
`;

export const SearchButton = styled(RiSearchLine)`
  border: none;
  border-radius: 37px;
  border-style: hidden;
  background: #256ce1;
  /* background: ${(props) => props.theme.background}; */
  color: whitesmoke;
  cursor: pointer;
  font-size: 1.2rem;
  margin: auto;
  outline: none;
  padding: 7px 20px;
  transition: all 0.4s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }

  @media screen and (max-width: 560px) {
    display: none;
  }
`;

export const StyledButton = styled.button`
  border: none;
  border-radius: 55px;
  border-style: hidden;
  background: #256ce1;
  color: whitesmoke;
  cursor: pointer;
  display: flex;
  font-size: 1.6rem;
  margin: auto;
  outline: none;
  padding: 5px 18px;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }

  @media screen and (max-width: 560px) {
    margin-right: 10px;
    font-size: 1.4rem;
    padding: 7px 17px;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding-right: 0.7rem;

  @media screen and (max-width: 560px) {
    .darkmode-switch {
      display: none;
    }
  }
`;

export const StyledFav = styled.button`
  border: none;
  border-radius: 55px;
  border-style: hidden;
  background: red;
  color: #010606;
  cursor: pointer;
  display: flex;
  font-size: 1.6rem;
  margin: auto;
  outline: none;
  margin-top: 3px;
  padding: 1px 13px;
  position: absolute;
  /* right: 375px;
  top: 700px; */
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #256ce1;
    color: whitesmoke;
  }
`;
