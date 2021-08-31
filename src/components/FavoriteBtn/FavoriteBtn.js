import { Tooltip } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { StyledFav } from "../NavBar/NavBar.styles";
import { Toaster } from "react-hot-toast";
import { VideosContext } from "../providers/VideosProvider";

export const FavoriteBtn = ({ handleFav, currentVideo }) => {
  const {
    globalState: { favVideos },
  } = useContext(VideosContext);

  const [exists, setExists] = useState(false);

  useEffect(() => {
    const videoExist = favVideos.some(
      (video) => currentVideo.videoID === video.videoID
    );
    setExists(videoExist);
  }, [favVideos, currentVideo]);

  return (
    <Tooltip title="Favorites">
      <StyledFav onClick={handleFav}>
        <Toaster position="bottom-center" reverseOrder={true} color="cyan" />
        {exists ? <MdFavorite /> : <MdFavoriteBorder />}
      </StyledFav>
    </Tooltip>
  );
};

export default FavoriteBtn;
