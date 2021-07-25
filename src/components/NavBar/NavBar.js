import React from 'react'
import { StyledSwitch } from '../Switch/Switch.styles'
import { Nav, Menu, SearchBar, Logon } from './NavBar.styles'
import styled from 'styled-components'

const Container = styled.div`

    display: flex;
    align-items: center;
    flex-direction: row;
`;

export const NavBar = () => {
    return (
        <>
            <Nav>
                <Menu />
                <SearchBar />
                <Container >
                    <StyledSwitch />
                    <Logon />
                </Container>
            </Nav>
        </>
    )
}