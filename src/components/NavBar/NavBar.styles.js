import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'
import { MdFace } from "react-icons/md";

export const Nav = styled.nav`

    background: #333333;
    border: none;
    box-shadow: 0px 2px red;
    height: 55px;
    display: flex;
    padding: 0.1rem;
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
    padding: 0.9rem;
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

export const SearchBar = styled.input`
        
    border: inset;
    border-color: white;
    border-radius: 45px;
    background-color: #1a1a1a;
    color: #b3b3b3;
    display: flex;
    font-family: 'Sora', sans-serif;
    font-size: 15px;
    height: 15px;
    margin: 0.7rem;
    /* padding: 0.3rem; */
    padding: 7px 25px;
    outline: none;
    width: 280px;

    &:hover, &:focus{
        color: whitesmoke;
        transition: all 0.2s ease-in-out;
    }

`;

export const Logon = styled(MdFace)`

    border: none;
    border-radius: 55px;
    border-style: hidden;
    background: #256ce1;
    color: whitesmoke;
    cursor: pointer;
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

    /* @media screen and (max-width: 560px) {
        display: none;
    } */
`;