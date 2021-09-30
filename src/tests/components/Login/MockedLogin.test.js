import { act, fireEvent, render, screen } from "@testing-library/react";
import MockedLogin from "../../../components/Login/MockedLogin";
import { VideosContext } from "../../../components/providers/VideosProvider";

describe("Mocked Login", () => {
  it("should call loginApi function", () => {
    const { getByText } = render(
      <VideosContext.Provider value={{ dispatch: jest.fn() }}>
        <MockedLogin open={true}>
          <div>Prueba</div>
        </MockedLogin>
      </VideosContext.Provider>
    );

    screen.debug();
    expect(getByText("Prueba")).toBeTruthy();
  });
});
