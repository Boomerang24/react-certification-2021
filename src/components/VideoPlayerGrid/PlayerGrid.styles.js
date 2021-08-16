import styled from 'styled-components'

export const StyledPlayerGrid = styled.div`

    display: flex;
    flex-direction: row;
    
    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

export const StyledPlayer = styled.div`
    
    background: transparent;
    box-shadow: 1px 1px 10px 2px rgba(230,230,230,0.75);
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
`;

export const StyledVideo = styled.iframe`

    height: 720px;
    width: 100%;
`;


export const StyledVideoInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const StyledRelatedVideos = styled.div`

    display: flex;
    flex-direction: column;
    margin: auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;
