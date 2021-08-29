import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { GridItem } from "../../../components/Grid/GridItem";
import { VideosContext } from "../../../components/providers/VideosProvider";
import { lightTheme } from "../../../ThemeStyles";

describe("Test for GridItem", () => {
  test("should render correctly", () => {
    render(
      <BrowserRouter>
        <VideosContext.Provider
          value={{
            globalState: lightTheme,
          }}
        >
          <GridItem
            title="Toalla Del Mojado"
            thumbnail="SoyUnURL"
            channelTitle="Renders Perros"
          />
        </VideosContext.Provider>
      </BrowserRouter>
    );

    expect(screen.getByAltText("videoPreview")).toBeInTheDocument();
    expect(screen.getByText("Renders Perros")).toBeInTheDocument();
    expect(screen.getByRole("img").getAttribute("src")).toBe("SoyUnURL");
  });
});
