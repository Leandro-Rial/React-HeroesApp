import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../../auth/AuthContext";
import LoginScreen from "../../../components/login/LoginScreen";
import { types } from "../../../types/types";

describe("Pruebas en LoginScreen", () => {
  const historyMock = {
    push: jest.fn(),
    location: {},
    listen: jest.fn(),
    createHref: jest.fn(),
    replace: jest.fn(),
  };

  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: false,
    },
  };

  const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
      <MemoryRouter>
        <LoginScreen history={historyMock} />
      </MemoryRouter>
    </AuthContext.Provider>
  );

  test("debe de mostar correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de realizar el dispatch y la navegacion", () => {
    const handleClick = wrapper.find("button").prop("onClick");

    handleClick();

    expect(contextValue.dispatch).toHaveBeenCalledWith({
      type: types.login,
      payload: {
        name: "Leandro",
      },
    });
    expect(historyMock.replace).toHaveBeenCalledWith('/');
    
    localStorage.setItem('lastPath', '/dc')
    
    handleClick();
    
    expect(historyMock.replace).toHaveBeenCalledWith('/dc');

  });
});
