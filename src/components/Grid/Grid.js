// import { videos } from '../../mock/mockedData'
import React, { useContext } from "react";
import { GridItem } from "./GridItem";
import { StyledGrid } from "./Grid.styles";
import { VideosContext } from "../providers/VideosProvider";

export const Grid = () => {
  const { videosList, globalState } = useContext(VideosContext);

  return (
    <StyledGrid theme={globalState.theme}>
      {videosList.map(
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
    </StyledGrid>
  );
};
