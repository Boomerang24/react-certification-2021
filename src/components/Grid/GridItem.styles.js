import styled from 'styled-components'

export const StyledGridItem = styled.div`
    
    background: transparent;
    box-shadow: 1px 1px 10px 2px rgba(230,230,230,0.75);
    margin: 15px;
    max-width: 240px;
    border-radius: 7px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

export const Channel = styled.p`
    display: flex;
    padding-left: 20px;
    padding-top: 5px;
    line-height: 1px;
    font-size: 12px;
    color: grey;
    text-decoration: underline;
`;

export const VideoTitle = styled.p`
    
    padding: 5px;
    font-size: 18px;
    line-height: 25px;
    max-height: 45px;
    min-height: 45px;
    text-overflow: ellipsis;
    overflow: hidden;
    /* 3 lines below add the 2 lined title plus ... */
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
`;

export const StyledImage = styled.img`
    border-radius: 7px;
    height: 123px;
    width: 240px;
    object-fit: cover;
`;