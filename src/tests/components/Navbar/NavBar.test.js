import { useAuth0 } from "@auth0/auth0-react";
import { Grid } from "@material-ui/core";
import { fireEvent, render, screen } from "@testing-library/react";
import { NavBar } from "../../../components/NavBar/NavBar";
import { VideosProvider } from "../../../components/providers/VideosProvider";

jest.mock("../../../components/AuthButton/authentication-button", () => () => (
  <button data-testid="logout-button"></button>
));

// jest.mock("../../../components/AuthButton/authentication-button", () => ({
//   AuthenticationButton: jest.fn(),
// }));

describe("Test for Navbar", () => {
  beforeEach(() => {
    render(
      <VideosProvider>
        <NavBar />
      </VideosProvider>
    );
  });

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
    // AuthenticationButton.mockImplementation()
    // expect(screen.getByTestId("logon-button")).toBeInTheDocument();
    expect(screen.getByTestId("logout-button")).toBeInTheDocument();
  });
});

// describe("Search button is working", () => {
//   screen.debug();
//   const mockpush = jest.fn();
//   const btnSearch = screen.getByTestId("search-button");

//   // jest.mock("react-router-dom", () => ({
//   //   useHistory: () => ({
//   //     mockpush,
//   //   }),
//   // }));

//   // fireEvent.click(btnSearch);
//   // expect(mockpush).toHaveBeenCalled();
//   // expect(mockpush).toHaveBeenCalledTimes(1);
// });
