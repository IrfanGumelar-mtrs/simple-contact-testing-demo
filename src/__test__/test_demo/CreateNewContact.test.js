import { render, waitForElementToBeRemoved } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store/store";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import App from "../../App";
import userEvent from "@testing-library/user-event";

describe("Test create contact page", () => {
  test("Should able to add new cotnact", async () => {
    const history = createMemoryHistory();

    const componentUnderTest = (
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );

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

    expect(await screen.findByText("Your Contacts")).toBeInTheDocument();
    // screen.debug();
  });

  test("When fields empty and the form is submitted, it returns required error", async () => {
    const history = createMemoryHistory();

    const componentUnderTest = (
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );

    const screen = render(componentUnderTest);

    userEvent.click(screen.getByTestId("add-new-contact-navigation-button"));

    userEvent.click(screen.getByTestId("create-button"));

    expect((await screen.findAllByText("Required")).length).toBe(3);

    screen.debug();
  });
});
