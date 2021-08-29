import React, { useContext } from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { useParams } from "react-router-dom";
import { types } from "../../types/types";
import { GridItem } from "../Grid/GridItem";
import { useFetchRelated } from "../hooks/useFetchRelated";
import { useVideoInfo } from "../hooks/useVideoInfo";
import { StyledFav } from "../NavBar/NavBar.styles";
import { VideosContext } from "../providers/VideosProvider";
import {
  StyledPlayer,
  StyledPlayerGrid,
  StyledRelatedVideos,
  StyledVideo,
  StyledVideoInfo,
} from "./PlayerGrid.styles";

export const PlayerGrid = () => {
  const { videoID } = useParams();

  const relatedVideos = useFetchRelated(videoID);
  const { publishedAt, title, thumbnail, channelTitle, description } =
    useVideoInfo(videoID);
  const { globalState, dispatch } = useContext(VideosContext);

  const currentVideo = { publishedAt, title, thumbnail, channelTitle, videoID };

  const handleFav = () => {
    dispatch({ type: types.modifyVideos, payload: currentVideo });
  };

  return (
    <StyledPlayerGrid theme={globalState.theme}>
      <StyledPlayer theme={globalState.theme}>
        <StyledVideo
          role="iframe"
          src={`https://www.youtube.com/embed/${videoID}`}
          title="YouTube video player"
        ></StyledVideo>
        <StyledVideoInfo theme={globalState.theme} key={videoID}>
          <StyledFav onClick={handleFav}>
            <MdFavoriteBorder />
          </StyledFav>
          <h1>{title}</h1>
          <h4>{channelTitle}</h4>
          <h6>{description}</h6>
        </StyledVideoInfo>
      </StyledPlayer>
      <StyledRelatedVideos>
        {relatedVideos.map(
          ({ publishedAt, title, thumbnail, channelTitle, videoID }) => {
            return (
              <GridItem
                key={publishedAt}
                title={title}
                thumbnail={thumbnail}
                channelTitle={channelTitle}
                videoID={videoID}
              />
            );
          }
        )}
      </StyledRelatedVideos>
    </StyledPlayerGrid>
  );
};
