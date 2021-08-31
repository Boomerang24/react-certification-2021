import { render, screen } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import Favoritos from "../../../components/Grid/Favoritos";
import { useFetchVideos } from "../../../components/hooks/useFetchVideos";
import { VideosContext } from "../../../components/providers/VideosProvider";
import { videosMock } from "../../../mock/testMock";

jest.mock("../../../components/hooks/useFetchVideos");

describe("Favoritos View", () => {
  it("Should render the view correctly", () => {
    useFetchVideos.mockImplementation(() => {
      return videosMock;
    });

    render(
      <VideosContext.Provider value={{ busqueda: "Dross" }}>
        <MemoryRouter>
          <Favoritos />
        </MemoryRouter>
      </VideosContext.Provider>
    );

    expect(screen.getByText(`Welcome to "Favoritos"`)).toBeInTheDocument();
  });
});
