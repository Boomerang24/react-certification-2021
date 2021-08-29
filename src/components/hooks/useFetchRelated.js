import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getRelatedVideos } from "../../helpers/getRelatedVideos";
import { VideosContext } from "../providers/VideosProvider";

export const useFetchRelated = (videoID) => {
  const { pathname } = useLocation();
  const parentRoute = pathname.split("/", 2)[1];

  const [relatedvid, setRelatedVid] = useState([]);

  const { favVideos } = useContext(VideosContext).globalState;

  useEffect(() => {
    if (parentRoute === "video") {
      getRelatedVideos(videoID).then((vids) => {
        setRelatedVid([...vids]);
      });
    } else {
      setRelatedVid([...favVideos]);
    }
  }, [parentRoute, videoID, favVideos]);

  return relatedvid;
};
