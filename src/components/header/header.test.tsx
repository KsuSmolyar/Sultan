import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Header } from "./header";
import { render } from "../../utils/test-utils";

test("ButtonOrLink element: exist in the DOM", () => {
	render(<Header />);
	expect(screen.getByText("Прайс-лист")).toBeInTheDocument();
});
