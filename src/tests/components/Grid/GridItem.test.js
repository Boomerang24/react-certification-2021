import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { GridItem } from "../../../components/Grid/GridItem";
import { VideosContext } from "../../../components/providers/VideosProvider";
import { videosMock } from "../../../mock/testMock";
import { lightTheme } from "../../../ThemeStyles";
import toast from "react-hot-toast";

jest.mock("react-hot-toast");

describe("Test for GridItem", () => {
  test("should render correctly", () => {
    // toast.mockImplementation((text, callback) => {
    //   callback();
    // });
    const dispatch = jest.fn();
    const loggedIn = true;
    const favVideos = videosMock;

    render(
      <BrowserRouter>
        <VideosContext.Provider
          value={{
            globalState: { lightTheme, favVideos },
            dispatch,
            loggedIn,
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

    const btn = screen.getByRole("button", { title: /Favorites/i });
    userEvent.click(btn);

    // expect(screen.getByAltText("videoPreview")).toBeInTheDocument();
    // expect(screen.getByText("Renders Perros")).toBeInTheDocument();
    // expect(screen.getByRole("img").getAttribute("src")).toBe("SoyUnURL");
    expect(dispatch).toHaveBeenCalledTimes(2);
  });
});
