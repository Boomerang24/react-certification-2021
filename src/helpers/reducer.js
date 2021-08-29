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
      return {
        ...state,
        favVideos: updatedVideos,
      };
    case types.modifyLocalStorage:
      storage.set("favList", state.favVideos);
      return state;
    case types.saveThemeStorage:
      storage.set("theme", state.theme);
      return state;
    default:
      return state;
  }
};
