import { Grid } from "@material-ui/core";
import { fireEvent, render, screen } from "@testing-library/react";
import { NavBar } from "../../../components/NavBar/NavBar";
import { VideosProvider } from "../../../components/providers/VideosProvider";

beforeEach(() =>
  render(
    <VideosProvider>
      <NavBar />
    </VideosProvider>
  )
);

describe("Test for Navbar", () => {
  test("should render correctly", () => {
    expect(screen.getByTestId("navbar-container")).toBeInTheDocument();
  });

  test("navbar includes a menu", () => {
    expect(screen.getByTestId("navbar-menu")).toBeInTheDocument();
  });

  test("search field is rendered", () => {
    expect(screen.getByTestId("search-field")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/enter your video name/i)
    ).toBeInTheDocument();
  });

  test("search button is displayed", () => {
    expect(screen.getByTestId("search-button")).toBeInTheDocument();
  });

  test("dark mode switch is displayed", () => {
    expect(screen.getByTestId("dark-mode-switch")).toBeInTheDocument();
  });

  test("logon button is displayed", () => {
    expect(screen.getByTestId("logon-button")).toBeInTheDocument();
  });
});

// describe("Search button is working", () => {
//   fireEvent.click(screen.getByTestId("search-button"));
// });
