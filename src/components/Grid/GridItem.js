import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { VideosContext } from "../providers/VideosProvider";
import {
  Channel,
  Container,
  StyledFav,
  StyledGridItem,
  StyledImage,
  VideoTitle,
} from "./GridItem.styles";
import { FavoriteBtn } from "../FavoriteBtn/FavoriteBtn.js";
import { types } from "../../types/types";
import toast from "react-hot-toast";

export const GridItem = ({ title, thumbnail, channelTitle, videoID }) => {
  const { dispatch, loggedIn } = useContext(VideosContext);

  const player = loggedIn ? `/favorite/${videoID}` : `/video/${videoID}`;

  const currentVideo = { title, thumbnail, channelTitle, videoID };

  const handleFav = () => {
    dispatch({ type: types.modifyVideos, payload: currentVideo });
    dispatch({ type: types.modifyLocalStorage });
    toast("Fav. Videos Updated", {
      id: "fav",
    });
  };

  return (
    <Container>
      <Link to={player}>
        <StyledGridItem data-testid={videoID}>
          <StyledImage src={thumbnail} role="img" alt={videoID} />
          <Channel>{channelTitle}</Channel>
          <VideoTitle>{title}</VideoTitle>
        </StyledGridItem>
      </Link>
      {loggedIn && (
        <StyledFav>
          <FavoriteBtn handleFav={handleFav} currentVideo={currentVideo} />
        </StyledFav>
      )}
    </Container>
  );
};
