import styled from 'styled-components'

export const StyledPlayerGrid = styled.div`

    display: flex;
    flex-direction: row;
    background-color: ${props => props.theme.body};
    
    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

export const StyledPlayer = styled.div`
    
    background: transparent;
    border: 1px solid ${props => props.theme.bordercolor};
    box-shadow: ${props => props.theme.boxshadow};
    display: flex;
    align-items: stretch;
    height: 90vh;
    width: 100%;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: flex-start;
    margin-left: 25px;
    margin-right: 25px;
    padding: 10px;

    @media screen and (max-width: 820px) {
        max-width: 90%;
    }
`;

export const StyledVideo = styled.iframe`

    height: 720px;
    width: 100%;
    border: none;
`;


export const StyledVideoInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: ${props => props.theme.fontcolor};
`;

export const StyledRelatedVideos = styled.div`

    display: flex;
    flex-direction: column;
    margin: auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;
