import { fireEvent, render, screen } from "@testing-library/react";
import LogonBtn from "../../../components/AuthButton/LogonBtn";
import { VideosContext } from "../../../components/providers/VideosProvider";
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

jest.mock("@auth0/auth0-react");

describe("Logon btn", () => {
  // it("should set click to setAnchorEl", () => {
  //   render(
  //     <VideosContext.Provider value={{ dispatch: jest.fn() }}>
  //       <LogonBtn />
  //     </VideosContext.Provider>
  //   );

  //   console.log(mockSetState.mock);

  //   expect(mockSetState).toHaveBeenCalledTimes(2);
  // });

  it("should open Auth0 popup", () => {
    const loginWithPopup = jest.fn();
    useAuth0.mockImplementation(() => {
      return { loginWithPopup };
    });
    render(
      <VideosContext.Provider value={{ dispatch: jest.fn() }}>
        <LogonBtn />
      </VideosContext.Provider>
    );

    fireEvent.click(screen.getByTestId("Auth0"));

    expect(loginWithPopup).toHaveBeenCalled();
  });

  it("should open mock popup", () => {
    const setOpenLogon = jest.fn();
    const loginWithPopup = jest.fn();
    useAuth0.mockImplementation(() => {
      return { loginWithPopup };
    });
    React.useState = jest.fn().mockReturnValue(["", setOpenLogon]);
    render(
      <VideosContext.Provider value={{ dispatch: jest.fn() }}>
        <LogonBtn />
      </VideosContext.Provider>
    );

    fireEvent.click(screen.getByTestId("Wizeline"));

    expect(React.useState).toHaveBeenCalled();
    expect(React.useState).toHaveBeenCalledTimes(2);
  });
});
