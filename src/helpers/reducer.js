import { storage } from "../components/providers/storage";
import { types } from "../types/types";

export const reducer = (state, action) => {
  switch (action.type) {
    case types.theme:
      return {
        ...state,
        theme: action.payload,
      };
    case types.modifyVideos:
      let updatedVideos = state.favVideos;
      const verifyVideo = updatedVideos.some(
        ({ videoID }) => videoID === action.payload.videoID
      );
      if (verifyVideo) {
        updatedVideos = updatedVideos.filter(
          ({ videoID }) => videoID !== action.payload.videoID
        );
      } else {
        updatedVideos = [...state.favVideos, action.payload];
      }
      storage.set("favList", updatedVideos);
      return {
        ...state,
        favVideos: updatedVideos,
      };
    default:
      return state;
  }
};
