import styled from 'styled-components'
import Switches from '../Switch/Switch'

export const StyledSwitch = styled(Switches)`

    
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }

    @media screen and (max-width: 560px) {
        display: none;
    }
`;