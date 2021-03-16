import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";

//Smoke Test
test('should render without crashing', () => {
  render(<Carousel />)
})

//Snapshot Test
test('should match snapshot', () => {
  const { asFragment } = render(<Carousel />)
  expect(asFragment()).toMatchSnapshot()
})

it("works when you click on the right arrow", function() {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();
});

// Write a test that expects that when I am in the second image(Photo by Pratik Patel on Unplash)
// Clicking left arrow (<-) will move to the first image(photo by Richard Pasquarella on unsplah)


it("Should move to the first image when I click the left arrow when I am in the second image", function (){
  const {queryByTestId, queryByAltText} = render(<Carousel />)

  //expect the first image to show but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument()
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument()

  //Move forward in the carousel 
  const rightArrow = queryByTestId("right-arrow")
  fireEvent.click(rightArrow)

  // Expect the second image to show 
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();

  //Move to the left
  const leftArrow = queryByTestId("left-arrow")
  fireEvent.click(leftArrow)

  //Expect firts Image to show
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument()
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument()
})