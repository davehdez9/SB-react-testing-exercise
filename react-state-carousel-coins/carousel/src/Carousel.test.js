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

//Left arrow is missing when I am in the first image 
// Right arrow is missing when I am in the last image

it("should not be left arrow in the first image and It should be a right arrow in the last image", function (){
  const {queryByTestId} = render(<Carousel />)
  const leftArrow = queryByTestId("left-arrow")
  const rightArrow = queryByTestId("right-arrow")

  // In the first image Without left arrow
  expect(leftArrow).toHaveClass("hidden")
  expect(rightArrow).not.toHaveClass("hidden")

  fireEvent.click(rightArrow)

  expect(leftArrow).not.toHaveClass("hidden")
  expect(rightArrow).not.toHaveClass("hidden")

  fireEvent.click(rightArrow)

  expect(leftArrow).not.toHaveClass("hidden")
  expect(rightArrow).toHaveClass("hidden")
})