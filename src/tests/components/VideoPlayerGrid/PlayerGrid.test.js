import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { PlayerGrid } from "../../../components/VideoPlayerGrid/PlayerGrid";
import { VideosContext } from "../../../components/providers/VideosProvider";
import { lightTheme } from "../../../ThemeStyles";

describe("Test for PlayerGrid", () => {
  test("iframe should render correctly", () => {
    render(
      <BrowserRouter>
        <VideosContext.Provider
          value={{
            videosList: [
              {
                publishedAt: "hoy",
                title: "Dross",
                thumbnail: "SoyUnPreview",
                channelTitle: "Magnates",
                videoID: "s7d8f7s",
              },
            ],
            globalState: lightTheme,
          }}
        >
          <PlayerGrid />
        </VideosContext.Provider>
      </BrowserRouter>
    );

    expect(screen.getByRole("iframe")).toBeInTheDocument();
  });
});
