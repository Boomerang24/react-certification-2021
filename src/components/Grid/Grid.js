// import { videos } from '../../mock/mockedData'
import React, { useContext } from "react";
import { GridItem } from "./GridItem";
import { StyledGrid } from "./Grid.styles";
import { VideosContext } from "../providers/VideosProvider";
import { useFetchVideos } from "../hooks/useFetchVideos";
import { GlobalStyle } from "../../GlobalStyle";

export const Grid = () => {
  const { busqueda, globalState } = useContext(VideosContext);

  const videosList = useFetchVideos(busqueda);
  return (
    <>
      <GlobalStyle theme={globalState.theme} />
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
    </>
  );
};
