import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store/store";
// import { server } from "../mocks/server";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import App from "../../App";
import userEvent from "@testing-library/user-event";

describe("Test create contact page", () => {
  test("Should able to add new contact", async () => {
    const history = createMemoryHistory();

    const componentUnderTest = (
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );

    // render the page on memory
    const screen = render(componentUnderTest);

    userEvent.click(screen.getByTestId("add-new-contact-navigation-button"));

    userEvent.type(screen.getByTestId("firstName"), "Frodo");

    expect(await screen.findByDisplayValue("Frodo")).toBeInTheDocument();

    userEvent.type(screen.getByTestId("lastName"), "Aragorn");

    expect(await screen.findByDisplayValue("Aragorn")).toBeInTheDocument();

    userEvent.type(screen.getByTestId("age"), "21");

    expect(await screen.findByDisplayValue("21")).toBeInTheDocument();

    userEvent.click(screen.getByTestId("create-button"));

    expect(await screen.findByTestId("create-button")).toBeDisabled();

    expect(await screen.findByText("Luke Skywalker")).toBeInTheDocument();
  });

  test("When fieldss is empty return errors", async () => {
    const history = createMemoryHistory();

    const componentUnderTest = (
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );

    // render the page on memory
    const screen = render(componentUnderTest);

    userEvent.click(screen.getByTestId("add-new-contact-navigation-button"));

    userEvent.click(screen.getByTestId("create-button"));

    expect((await screen.findAllByText("Required")).length).toBe(3);
  });
});
