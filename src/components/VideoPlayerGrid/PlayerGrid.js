import React from 'react'
import { useParams } from 'react-router-dom';
import { GridItem } from '../Grid/GridItem';
// import { data } from '../../mock/mockedUTube';
import {useFetchRelated} from '../hooks/useFetchRelated'
import {useVideoInfo} from '../hooks/useVideoInfo'
import { StyledPlayer, StyledVideo } from './PlayerGrid.styles';

export const PlayerGrid = () => {

    const {videoID} = useParams();
    
    const relatedVideos = useFetchRelated(videoID);
    const videoInfo = useVideoInfo(videoID);

    return (
        <>
            <StyledPlayer>
                <StyledVideo src={`https://www.youtube.com/embed/${videoID}`} title="YouTube video player"></StyledVideo>
                {
                    videoInfo.map(({publishedAt, channelTitle, title, description}) => {
                        console.log(description);
                        return <div key={publishedAt}>
                            <h1>{channelTitle}</h1>
                            <p>{title}</p>
                            <p>{description}</p>
                        </div>
                        
                    })
                }
            </StyledPlayer>
            <div>
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
            </div>
        </>
    )
}
