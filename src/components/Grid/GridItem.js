import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { VideosContext } from '../providers/VideosProvider';
import { Channel, StyledGridItem, StyledImage,VideoTitle } from './GridItem.styles'

export const GridItem = ({title, thumbnail, channelTitle, videoID}) => {

    const {globalState} = useContext(VideosContext);

    return (
        <Link to={videoID}>
            <StyledGridItem theme={globalState.theme}>
                <StyledImage src={thumbnail} role="img" alt="videoPreview" />
                <Channel>{channelTitle}</Channel>
                <VideoTitle>{title}</VideoTitle>
            </StyledGridItem>
        </Link>
    );
};
