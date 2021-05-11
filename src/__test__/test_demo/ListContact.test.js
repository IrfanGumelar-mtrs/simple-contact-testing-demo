import { render, waitForElementToBeRemoved } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store/store";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import App from "../../App";

describe.only("Test listing contact page", () => {
  test("Page should be render correctly", async () => {
    const history = createMemoryHistory();

    const componentUnderTest = (
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );

    const screen = render(componentUnderTest);

    // expect(await screen.findByText("Bilbo Baggins")).toBeInTheDocument();

    expect(screen.getByTestId("title")).toBeInTheDocument();

    expect(
      screen.getByTestId("add-new-contact-navigation-button")
    ).toBeInTheDocument();

    expect(screen.getByText("Loading...")).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.getByText("Loading..."));

    expect(screen.getByText("Luke Skywalker")).toBeInTheDocument();

    expect(screen.getByText("111 years old")).toBeInTheDocument();

    expect(screen.getByText("Bilbo Baggins")).toBeInTheDocument();

    expect(screen.getByText("20 years old")).toBeInTheDocument();
  });
});
