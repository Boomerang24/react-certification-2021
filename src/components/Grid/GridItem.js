import React from 'react'
import { Channel, StyledGridItem, StyledImage,VideoTitle } from './GridItem.styles'

export const GridItem = ({title, thumbnail, channelTitle}) => {
    return (
        <StyledGridItem>
            <StyledImage src={thumbnail} alt="SoyUnaImagen" />
            <Channel>{channelTitle}</Channel>
            <VideoTitle>{title}</VideoTitle>
        </StyledGridItem>
    )
}