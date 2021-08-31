import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Grid } from "../../../components/Grid/Grid";
import { useFetchVideos } from "../../../components/hooks/useFetchVideos";
import { VideosContext } from "../../../components/providers/VideosProvider";
import { videosMock } from "../../../mock/testMock";

jest.mock("../../../components/hooks/useFetchVideos");

describe("Test for Grid", () => {
  test("should render a video preview correctly", () => {
    useFetchVideos.mockImplementation(() => {
      return videosMock;
    });
    render(
      <BrowserRouter>
        <VideosContext.Provider value={{ busqueda: "" }}>
          <Grid />
        </VideosContext.Provider>
      </BrowserRouter>
    );

    expect(screen.getByAltText("603qVfnyuXc")).toBeInTheDocument();
  });
});
