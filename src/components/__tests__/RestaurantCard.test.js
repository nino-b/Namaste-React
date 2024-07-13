import { Restaurantcard } from "../RestaurantCard";
import MOCK_DATA from "./mocks/resCardMock.json"
import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";



test('Should render Restaurantcard component with props Date', () => {
  render(<Restaurantcard resData={MOCK_DATA} />);
  const name = screen.getByText('Pizza Hut');
  expect(name).toBeInTheDocument();
});



test('Should render Restaurantcard component with Promoted Label', () => {
  render(<Restaurantcard resData={MOCK_DATA} />);
  const name = screen.getByText('Pizza Hut');
  expect(name).toBeInTheDocument();
});