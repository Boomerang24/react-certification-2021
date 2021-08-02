import React from 'react'
import { useParams } from 'react-router-dom';
import { GridItem } from '../Grid/GridItem';
// import { data } from '../../mock/mockedUTube';
import {useFetchRelated} from '../hooks/useFetchRelated'
import {useVideoInfo} from '../hooks/useVideoInfo'
import { StyledPlayer, StyledPlayerGrid, StyledRelatedVideos, StyledVideo, StyledVideoInfo } from './PlayerGrid.styles';

export const PlayerGrid = () => {

    const {videoID} = useParams();
    
    const relatedVideos = useFetchRelated(videoID);
    const videoInfo = useVideoInfo(videoID);

    return (
        <StyledPlayerGrid>
            <StyledPlayer>
                <StyledVideo role="iframe" src={`https://www.youtube.com/embed/${videoID}`} title="YouTube video player"></StyledVideo>
                {
                    videoInfo.map(({publishedAt, channelTitle, title, description}) => {
                        return <StyledVideoInfo key={publishedAt}>
                            <h1>{title}</h1>
                            <h4>{channelTitle}</h4>
                            <h6>{description}</h6>
                        </StyledVideoInfo>
                        
                    })
                }
            </StyledPlayer>
            <StyledRelatedVideos>
                {
                    relatedVideos.map(({publishedAt, title, thumbnail, channelTitle, videoID}) => {
                        return <GridItem 
                            key={publishedAt}
                            title={title}
                            thumbnail={thumbnail}
                            channelTitle={channelTitle}
                            videoID={videoID}
                        />
                    })
                }            
            </StyledRelatedVideos>
        </StyledPlayerGrid>
    )
}
