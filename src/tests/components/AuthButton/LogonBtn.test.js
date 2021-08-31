import { render } from "@testing-library/react";
import { useState } from "react";
import LogonBtn from "../../../components/AuthButton/LogonBtn";
import { VideosContext } from "../../../components/providers/VideosProvider";

const mockSetState = jest.fn();

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: () => {
    return ["", mockSetState];
  },
}));

describe("Logon btn", () => {
  it("should set click to setAnchorEl", () => {
    render(
      <VideosContext.Provider value={{ dispatch: jest.fn() }}>
        <LogonBtn />
      </VideosContext.Provider>
    );

    console.log(mockSetState.mock);

    expect(mockSetState).toHaveBeenCalledTimes(2);
  });
});
