import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render } from "../../utils/test-utils";
import { ProductCard } from "./productCard";
import { ProductType } from "../../store/slices/catalogSlice";

describe("ProductCard", () => {
	const product: ProductType = {
		urlImg: "/Sultan/BlackPearlSystem.png",
		name: "Набор Мицелярная вода 200мл+Крем 46мл+Патчи",
		sizeType: "мл",
		size: 246,
		barcode: 5478332412874,
		maker: "ЧЕРНЫЙ ЖЕМЧУГ",
		brand: "ЧЕРНЫЙ ЖЕМЧУГ",
		description:
			"Черный жемчуг Набор Мицел. вода Интенсивное питание 200мл+Крем 46мл+Патчи. Подарите коже бережный и эффективный уход вместе с программой Интенсивное питание от бренда Черный Жемчуг. Интенсивно питают и увлажняют кожу Мицеллярная вода легко удаляет макияж, а также обеспечивает уход и питание. Мицеллярная вода удаляет макияж одним движением, а также обеспечивает уход и питание: увлажняет и смягчает кожу с 1-ой секунды.",
		price: 731,
		appointment: ["Уход за лицом", "Подарочные наборы"],
	};
	const setup = () => render(<ProductCard product={product} />);

	test("should have button increment", () => {
		setup();
		const buttonIncrement = screen.getByTestId("testIncrementButton");
		expect(buttonIncrement).toBeInTheDocument();
	});
	test("should have count container", () => {
		setup();
		const countContainer = screen.getByTestId("testCount");
		expect(countContainer).toBeInTheDocument();
	});

	test("should have count container with increment count after click on buttonIncrement", () => {
		setup();
		const buttonIncrement = screen.getByTestId("testIncrementButton");
		const countContainer = screen.getByTestId("testCount");
		expect(countContainer.textContent).toBe("1");
		userEvent.click(buttonIncrement);
		expect(countContainer.textContent).toBe("2");
	});

	test("should have count container with decrement count after click on buttonDecrement", () => {
		setup();
		const buttonIncrement = screen.getByTestId("testIncrementButton");
		const buttonDecrement = screen.getByTestId("testDecrementButton");
		const countContainer = screen.getByTestId("testCount");
		userEvent.click(buttonIncrement);
		userEvent.click(buttonDecrement);
		expect(countContainer.textContent).toBe("1");
	});
});
