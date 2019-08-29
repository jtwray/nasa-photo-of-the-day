import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";
function App() {
	// Initialize state to hold the image URL
	let d = new Date();
	let yyyy = d.getFullYear();
	let mm = d.getMonth();
	let dd = d.getDate();
	const [date, settheDate] = useState(`${yyyy}-${mm}-${dd}`);
	const [picture, setPicture]=useState( {
		nasaSpacePic: "", epicEarthPic: {}
	});
	const apiKey=`yHw381OIugvbURlMdFPe6KdZ0lG9r9Qd7txnjNox`;
	console.log(picture.nasaSpacePic)

	console.log(new Date(date));

	useEffect(() => {
		// This axios GET request will return a single image
		axios
			.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
			// Which we then set to state
			.then((res) => {
				setPicture(res.data.url);
				setApiResult(res.data);
				const {title} = apiResult;
			})
			// Always include error handling
			.catch((error) => console.error);
	}, []);
	useEffect(() => {
		// This axios GET request will return a single image

		axios
			.get(
				`https://api.nasa.gov/EPIC/api/natural/${date}/?api_key=${apiKey}`
			)
			.then((res) => {
				console.log( res.data );
				
			})
			// Which we then set to state
			.then((res) => {
				setPicture( picture.epicEarthPic=res.data.Array );
				console.log(picture.epicEarthPic)
				setApiResult(res.data);
				const {title} = apiResult;
			})
			// Always include error handling
			.catch((error) => console.error);
	}, []);
	const getPrevDate = () => {
		date.setDate(date.getDate() - 1);
		return ` ${date.getFullYear()}-${date.getMonth() +
			1}-${date.getDate()}`;
	};
	const getNextDate = () => {
		date.setDate(date.getDate() + 1);
		return ` ${date.getFullYear()}-${date.getMonth() +
			1}-${date.getDate()}`;
	};

	const [apiResult, setApiResult] = useState("");

	const {title, explanation} = apiResult;
	return (
		<div className="App">
			<div>
				<button
					onClick={() => {
						settheDate(getPrevDate());
					}}>
					previousDateImage
				</button>
				<button
					onClick={() => {
						settheDate(getNextDate());
					}}>
					NextDateImage
				</button>
				<h1>{title}</h1>
				<div>
					<img src={`${picture}`} alt="Deep Space"></img>
				</div>
				<p>{explanation}</p>
			</div>
			Read through the instructions in the README.md file to build your
			NASA app! Have fun 🚀!
		</div>
	);
}

export default App;
// `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
// const [picture, setPicture] = useState("");
// const apiKey = `yHw381OIugvbURlMdFPe6KdZ0lG9r9Qd7txnjNox`;
