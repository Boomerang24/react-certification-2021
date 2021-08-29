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
            videosList: videosMock,
            globalState: lightTheme,
          }}
        >
          <Grid />
        </VideosContext.Provider>
      </BrowserRouter>
    );

    expect(screen.getAllByAltText("videoPreview").length).toBe(1);
    expect(screen.getByAltText(videosMock[0].title)).toBeInTheDocument("Dross");
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
