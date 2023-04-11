import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { CatalogPage } from "./catalogPage";
import { render } from "../../utils/test-utils";

describe("Catalog Page", () => {
	const setup = () => render(<CatalogPage />);

	test("should have filtered element", () => {
		setup();
		const filteredElements = screen.getByTestId("Уход за телом");
		expect(filteredElements).toBeInTheDocument();
	});

	test("should have sortDropDown button and sortDropDown is closed", () => {
		setup();
		const sortDropDownButton = screen.getByTestId("sortDropDownButton");
		expect(sortDropDownButton).toBeInTheDocument();
		const sortDropDown = screen.queryByTestId("sortDropDown");
		expect(sortDropDown).not.toBeInTheDocument();
	});

	test("should have sortDropDown opened after click on sortDropDown button", () => {
		setup();
		const sortDropDownButton = screen.getByTestId("sortDropDownButton");
		userEvent.click(sortDropDownButton);
		const sortDropDown = screen.getByTestId("sortDropDown");
		expect(sortDropDown).toBeInTheDocument();
	});
});
