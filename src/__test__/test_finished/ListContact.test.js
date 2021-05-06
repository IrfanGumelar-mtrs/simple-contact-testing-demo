import { render, waitForElementToBeRemoved } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store/store";
// import { server } from "../mocks/server";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import App from "../../App";

describe("Test listing contact page", () => {
  test("All contact item should be correctly rendered", async () => {
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

    expect(screen.getByTestId("title")).toBeInTheDocument();

    expect(
      screen.getByTestId("add-new-contact-navigation-button")
    ).toBeInTheDocument();

    expect(screen.getByText("Loading...")).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.getByText("Loading..."));

    // alternatively
    // expect(await screen.findByText("Luke Skywalker")).toBeInTheDocument();

    expect(screen.getByText("Luke Skywalker")).toBeInTheDocument();
    expect(screen.getByText("20 years old")).toBeInTheDocument();

    expect(screen.getByText("Bilbo Baggins")).toBeInTheDocument();
    expect(screen.getByText("111 years old")).toBeInTheDocument();
  });
});
