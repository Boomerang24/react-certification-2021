import { render, screen } from "@testing-library/react";
import AuthenticationButton from "../../../components/AuthButton/AuthenticationButton";
import { VideosContext } from "../../../components/providers/VideosProvider";

describe("Authentication Button", () => {
  it("should render LOGIN btn", () => {
    const loggedIn = false;

    render(
      <VideosContext.Provider value={{ loggedIn }}>
        <AuthenticationButton />
      </VideosContext.Provider>
    );

    expect(screen.getByTestId("login-button")).toBeInTheDocument();
  });

  it("should render LOGOUT btn", () => {
    const loggedIn = true;

    render(
      <VideosContext.Provider value={{ loggedIn }}>
        <AuthenticationButton />
      </VideosContext.Provider>
    );

    expect(screen.getByTestId("logout-button")).toBeInTheDocument();
  });
});
