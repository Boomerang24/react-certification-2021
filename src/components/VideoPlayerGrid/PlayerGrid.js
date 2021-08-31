import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { types } from "../../types/types";
import { GridItem } from "../Grid/GridItem";
import { useFetchRelated } from "../hooks/useFetchRelated";
import { useVideoInfo } from "../hooks/useVideoInfo";
import { VideosContext } from "../providers/VideosProvider";
import {
  StyledDescription,
  StyledPlayer,
  StyledPlayerGrid,
  StyledRelatedVideos,
  StyledVideo,
  StyledVideoInfo,
} from "./PlayerGrid.styles";
import toast from "react-hot-toast";
import FavoriteBtn from "../FavoriteBtn/FavoriteBtn";

export const PlayerGrid = () => {
  const { videoID } = useParams();

  const relatedVideos = useFetchRelated(videoID);
  const { publishedAt, title, thumbnail, channelTitle, description } =
    useVideoInfo(videoID);
  const { dispatch, loggedIn } = useContext(VideosContext);

  const currentVideo = { publishedAt, title, thumbnail, channelTitle, videoID };

  const handleFav = () => {
    console.log("PlayerGrid");
    dispatch({ type: types.modifyVideos, payload: currentVideo });
    dispatch({ type: types.modifyLocalStorage });
    toast("Fav. Videos Updated", {
      id: "fav",
    });
  };

  return (
    <StyledPlayerGrid>
      <StyledPlayer>
        <StyledVideo
          allowFullScreen={true}
          role="iframe"
          src={`https://www.youtube.com/embed/${videoID}`}
          title="YouTube video player"
        />
        <StyledVideoInfo key={videoID}>
          {loggedIn && (
            <FavoriteBtn handleFav={handleFav} currentVideo={currentVideo} />
          )}
          <h1>{title}</h1>
          <h4>{channelTitle}</h4>
          <StyledDescription>{description}</StyledDescription>
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
