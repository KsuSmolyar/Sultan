import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render } from "../../utils/test-utils";
import { Sidebar } from "./sidebar";

describe("Sidebar element", () => {
	const setup = () => render(<Sidebar />);

	test("should have sort button", () => {
		setup();
		const sortButton = screen.getByTestId("sortButton");
		expect(sortButton).toBeInTheDocument();
		const sortList = screen.queryByTestId("sortList");
		expect(sortList).not.toBeInTheDocument();
	});

	test("should have sortList opened after click on sort button", () => {
		setup();
		const sortButton = screen.getByTestId("sortButton");
		userEvent.click(sortButton);
		const sortList = screen.getByTestId("sortList");
		expect(sortList).toBeInTheDocument();
	});
});
