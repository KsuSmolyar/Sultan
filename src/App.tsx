import { useEffect } from "react";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { init, ProductType, selectIsEmpty } from "./store/slices/catalogSlice";
import { Template } from "./templates/template";
import data from "./fileData/fileData.json";

function App() {
	const isEmpty = useAppSelector(selectIsEmpty);
	const dispatch = useAppDispatch();
	useEffect(() => {
		if (isEmpty) {
			dispatch(init(data as ProductType[]));
		}
	}, [isEmpty]);
	return (
		<div className='App'>
			<Template />
		</div>
	);
}

export default App;
