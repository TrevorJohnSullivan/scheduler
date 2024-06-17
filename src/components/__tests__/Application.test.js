import React from "react";
import { render, cleanup, fireEvent, getByText, getByAltText, getByPlaceholderText, getAllByTestId, findByText, prettyDOM } from "@testing-library/react";
import Application from "components/Application";

afterEach(cleanup);


describe("Application", () => {

it("defaults to Monday and changes the schedule when a new day is selected", () => {
  const { queryByText, findByText } = render(<Application />);

  return findByText("Monday").then(() => {
    fireEvent.click(queryByText("Tuesday"));
    expect(queryByText("Leopold Silvers")).toBeInTheDocument();
  });
});


it("loads data, books an interview and reduces the spots remaining for Monday by 1", async () => {
  const { container } = render(<Application />);

  await findByText(container, "Archie Cohen");

  const appointment = getAllByTestId(container, "appointment")[0];
  console.log(prettyDOM(appointment));

  fireEvent.click(getByAltText(appointment, "Add"));

  fireEvent.change(getByPlaceholderText(appointment, /enter student name/i), {
    target: { value: "Lydia Miller-Jones" }
  });
  fireEvent.click(getByAltText(appointment, "Sylvia Palmer"));
  
  fireEvent.click(getByText(appointment, "Save"));

  console.log(prettyDOM(appointment));




});



});
