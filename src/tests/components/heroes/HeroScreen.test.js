import { mount } from "enzyme";
import { MemoryRouter, Route } from "react-router-dom";
import HeroScreen from "../../../components/heroes/HeroScreen";

describe("Pruebas en HeroScreen", () => {
  const historyMock = {
    length: 10,
    push: jest.fn(),
    goBack: jest.fn(),
  };

  test("debe de mostar el componente redirect si no hay argumentos en el URL", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero"]}>
        <HeroScreen history={historyMock} />
      </MemoryRouter>
    );
    expect(wrapper.find("Redirect").exists()).toBe(true);
  });

  test("debe de mostrar un hero si el parametro existe y se encuentra", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero/marvel-wolverine"]}>
        <Route path="/hero/:heroeId" component={HeroScreen} />
      </MemoryRouter>
    );

    expect(wrapper.find(".row").exists()).toBe(true);
  });

  test("debe de regresar a la anterior pantalla con push", () => {
    const historyMock = {
      length: 1,
      push: jest.fn(),
      goBack: jest.fn(),
    };

    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero/marvel-wolverine"]}>
        <Route
          path="/hero/:heroeId"
          component={() => <HeroScreen history={historyMock} />}
        />
      </MemoryRouter>
    );

    wrapper.find("button").prop("onClick")();

    expect(historyMock.push).toHaveBeenCalledWith("/");
    expect(historyMock.goBack).not.toHaveBeenCalled();
  });

  test("deb de regreasar a la pantalla anterior GOBACK", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero/marvel-wolverine"]}>
        <Route
          path="/hero/:heroeId"
          component={() => <HeroScreen history={historyMock} />}
        />
      </MemoryRouter>
    );

    wrapper.find("button").prop("onClick")();

    expect(historyMock.push).toHaveBeenCalledTimes(0);
    expect(historyMock.goBack).toHaveBeenCalled();
  });

  test("debe de llamar el redirect si el hero no existe", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero/marvel-wolverine22"]}>
        <Route
          path="/hero/:heroeId"
          component={() => <HeroScreen history={historyMock} />}
        />
      </MemoryRouter>
    );

    expect(wrapper.text()).toBe("");
  });
});
