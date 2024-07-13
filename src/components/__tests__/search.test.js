import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { act } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "./mocks/mockResListData.json"
import '@testing-library/jest-dom';
import { BrowserRouter } from "react-router-dom";


global.fetch = jest.fn(() => {
  return Promise.resolve({
    ok: true, // Ensure this is set to true to avoid the error in fetchData
    json: () => {
      return Promise.resolve(MOCK_DATA);
    }
  });
});



test('Should search resList for burger input', async () => {
  /**
   * When 'render' is executed, it does not render elements on browser, it renders elements on jest-dom, so it does not have all those browser features, like 'fetch'.
   */
  await act(async() => {
    render(
      <BrowserRouter>
        <Body />;
      </BrowserRouter>
    );
  });
  // Use waitFor for any asynchronous DOM updates
  await waitFor(() => {
    const cardsBeforeSearch = screen.getAllByTestId('resCard');
    expect(cardsBeforeSearch.length).toBe(20);
    const searchBtn = screen.getByRole('button', { name: /search/i });

    const searchInput = screen.getByTestId('searchInput');
    //console.log(searchInput);

    fireEvent.change(searchInput, { target: { value: 'burger' } });

    fireEvent.click(searchBtn);
    const cardsAfterSearch = screen.getAllByTestId('resCard');
    expect(cardsAfterSearch.length).toBe(3);



   
  });

});