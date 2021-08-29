import React, { useContext } from "react";
import { GridItem } from "./GridItem";
import { StyledGrid } from "./Grid.styles";
import { VideosContext } from "../providers/VideosProvider";
import { useFetchVideos } from "../hooks/useFetchVideos";

export const Grid = () => {
  const { busqueda } = useContext(VideosContext);

  const videosList = useFetchVideos(busqueda);
  return (
    <>
      <StyledGrid>
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
    </>
  );
};
