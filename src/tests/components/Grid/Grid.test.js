import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Grid } from "../../../components/Grid/Grid";
import { VideosContext } from "../../../components/providers/VideosProvider";
import { videosMock } from "../../../mock/testMock";
import { lightTheme } from "../../../ThemeStyles";

describe("Test for Grid", () => {
  test("should render a video preview correctly", () => {
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
          <Grid />
        </VideosContext.Provider>
      </BrowserRouter>
    );

    expect(screen.getAllByAltText("videoPreview").length).toBe(1);
  });

  test("should render home view with multiple videos", () => {
    render(
      <BrowserRouter>
        <VideosContext.Provider
          value={{
            videosList: videosMock,
            globalState: lightTheme,
          }}
        >
          <Grid />
        </VideosContext.Provider>
      </BrowserRouter>
    );

    expect(screen.getAllByAltText("videoPreview").length).toBe(3);
  });
});
