// import { videos } from '../../mock/mockedData'
import React, { useContext } from 'react'
import { GridItem } from './GridItem'
import { StyledGrid } from './Grid.styles';
import { VideosContext } from '../providers/VideosProvider';

export const Grid = () => {

    const {videosList} = useContext(VideosContext);

    return (
//         <iframe id="ytplayer" type="text/html" width="640" height="360"
//   src='http://www.youtube.com/embed/udKE1ksKWDE'
//   frameBorder="0"/>
        <StyledGrid>
            {
                videosList.map(({publishedAt, title, thumbnail, channelTitle, videoID}) => {
                    return <GridItem 
                        key={publishedAt}
                        title={title}
                        thumbnail={thumbnail}
                        channelTitle={channelTitle}
                        videoID={videoID}
                    />
                })
            }
        </StyledGrid>
    );
};
