import React from "react";
import { Link } from "react-router-dom";
import {
  Channel,
  StyledGridItem,
  StyledImage,
  VideoTitle,
} from "./GridItem.styles";

export const GridItem = ({ title, thumbnail, channelTitle, videoID }) => {
  return (
    <Link to={`/video/${videoID}`}>
      <StyledGridItem>
        <StyledImage src={thumbnail} role="img" alt="videoPreview" />
        <Channel>{channelTitle}</Channel>
        <VideoTitle>{title}</VideoTitle>
      </StyledGridItem>
    </Link>
  );
};
