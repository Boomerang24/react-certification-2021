import { videos } from '../../mock/mockedData'
import React from 'react'
import { GridItem } from './GridItem'
import { StyledGrid } from './Grid.styles';

let videosList = [...videos];

export const Grid = () => {
    return (
        <StyledGrid>
            {
                videosList[0].items.map(({snippet}) => {
                    
                    const {publishedAt, title, thumbnails, channelTitle} = snippet;
                    return <GridItem 
                        key={publishedAt}
                        title={title}
                        thumbnail={thumbnails.high.url}
                        channelTitle={channelTitle}
                    />
                })
            }
        </StyledGrid>
    )
}