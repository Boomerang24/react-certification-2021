import React, { useState, useContext } from 'react'
import { StyledSwitch } from '../Switch/Switch.styles'
import { Nav, Menu, SearchBar, Logon } from './NavBar.styles'
import styled from 'styled-components'
import { VideosContext } from '../providers/VideosProvider';
import { useHistory } from 'react-router-dom';

const Container = styled.div`

    display: flex;
    align-items: center;
    flex-direction: row;

    @media screen and (max-width: 560px) {
        .darkmode-switch{
            display: none;
        }
    }
    `;

export const NavBar = () => {
    
    const {setBusqueda} = useContext(VideosContext);
    const [inputValue, setInputvalue] = useState('');

    const history = useHistory();


    const handleInputeChange = ( e ) => {
        setInputvalue(e.target.value);
    }

    const handleSubmitChange = ( e ) => {
        e.preventDefault();
        setBusqueda(inputValue);
        history.push("/");
    }


    return (
        <Nav data-testid="navbar-container">
            <Menu />
            <form type="submit" onSubmit={handleSubmitChange}>
                <SearchBar 
                    type="text"
                    value={inputValue}
                    onChange={handleInputeChange}
                />
            </form>
            <Container >
                <StyledSwitch />
                <Logon />
            </Container>
        </Nav>
    )
};
