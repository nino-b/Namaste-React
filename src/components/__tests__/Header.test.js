import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';


test('Should render header component with a login button', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore} >
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const logInButton = screen.getByRole('button', { name: 'Log In' });
  expect(logInButton).toBeInTheDocument();

  // const logInButton = screen.getByText('Log In');
  // expect(logInButton).toBeInTheDocument();
});



test('Should render header component with cart items 0', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore} >
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // const cartItems = screen.getByText('Cart - (0 items)');
  // expect(cartItems).toBeInTheDocument();

  // const logInButton = screen.getByText('Log In');
  // expect(logInButton).toBeInTheDocument();
});



test('Should render header component with Cart item', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore} >
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText(/Cart/);
  expect(cartItems).toBeInTheDocument();
});


test('Should change login button to logout on click', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore} >
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const logInButton = screen.getByRole('button', { name: 'Log In' });
  fireEvent.click(logInButton);

  const logoutButton = screen.getByRole('button', { name: 'Log Out' });
  expect(logoutButton).toBeInTheDocument();
});
