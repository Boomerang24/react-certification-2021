import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getVideos } from "../../helpers/getVideos";
import { VideosContext } from "../providers/VideosProvider";

export const useFetchVideos = (search) => {
  const { pathname } = useLocation();
  const parentRoute = pathname.split("/", 2)[1];

  const [fetch, setFetch] = useState([]);

  const { favVideos } = useContext(VideosContext).globalState;

  useEffect(() => {
    if (parentRoute === "favorite") {
      setFetch([...favVideos]);
    } else {
      getVideos(search).then((vids) => {
        setFetch([...vids]);
      });
    }
  }, [parentRoute, favVideos, search]);

  return fetch;
};
