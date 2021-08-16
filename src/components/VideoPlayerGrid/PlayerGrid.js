import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { GridItem } from '../Grid/GridItem';
// import { data } from '../../mock/mockedUTube';
import {useFetchRelated} from '../hooks/useFetchRelated'
import {useVideoInfo} from '../hooks/useVideoInfo'
import { VideosContext } from '../providers/VideosProvider';
import { StyledPlayer, StyledPlayerGrid, StyledRelatedVideos, StyledVideo, StyledVideoInfo } from './PlayerGrid.styles';

export const PlayerGrid = () => {

    const {videoID} = useParams();
    
    const relatedVideos = useFetchRelated(videoID);
    const {title, channelTitle, description} = useVideoInfo(videoID);
    const {globalState} = useContext(VideosContext);

    return (
        <StyledPlayerGrid theme={globalState.theme}>
            <StyledPlayer theme={globalState.theme}>
                <StyledVideo role="iframe" src={`https://www.youtube.com/embed/${videoID}`} title="YouTube video player"></StyledVideo>
                <StyledVideoInfo theme={globalState.theme}
                    key={videoID}>
                    <h1>{title}</h1>
                    <h4>{channelTitle}</h4>
                    <h6>{description}</h6>
                </StyledVideoInfo>
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
