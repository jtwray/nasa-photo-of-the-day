import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";
import {Button, Alert, Spinner} from "reactstrap";
import styled from "styled-components";

function App() {
	// Initialize state to hold the image URL
	let d = new Date();
	let yyyy = d.getFullYear();
	let mm = d.getMonth();
	let dd = d.getDate();
	const [date, settheDate] = useState(`${yyyy}-${mm}-${dd}`);
	const [apiResult, setApiResult] = useState({});
	const [picture, setPicture] = useState({
		epicEarthPic: [],
	});

	const [earth, setEarth] = useState("");
	let {nasaSpacePic, epicEarthPic} = picture;
	const apiKey = `yHw381OIugvbURlMdFPe6KdZ0lG9r9Qd7txnjNox`;
	console.log(nasaSpacePic);

	console.log(new Date(date));

	useEffect(() => {
		axios
			.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
			// Which we then set to state
			.then((res) => {
				setPicture((nasaSpacePic = res.data.url));
				setApiResult(res.data);
				console.log(apiResult);
				const {title} = apiResult;
			})
			// Always include error handling
			.catch((error) => console.error);
	}, [picture]);
	useEffect(() => {
		axios
			.get(
				`https://api.nasa.gov/EPIC/api/natural/${date}/?api_key=${apiKey}`
			)
			.then((res) => {
				const pictures = res.data;

				console.log(pictures[0].caption);
				return setEarth(pictures[0]);
			})
			// Always include error handling
			.catch((error) => console.error);
	}, []);

	const {title, explanation} = apiResult;
	const {caption} = earth;
	return (
		<div className="App">
			<CustomButton>
				<div>
					<h1>{title}</h1>
					<div>
						<CustomImage>
							<img src={`${picture}`} alt="Deep Space"></img>
						</CustomImage>
						<p>{explanation}</p>

						<CustomImage>
							<img
								src={`https://api.nasa.gov/EPIC/archive/natural/2015/06/13/png/epic_1b_20150613110250.png?api_key=${apiKey}`}
								alt="earth"
							/>
						</CustomImage>
						<p>{caption}</p>
						{date}
					</div>
				</div>
			</CustomButton>
		</div>
	);
}
const CustomImage = styled.div`
	max-width: 100%;
	border: solid purple 10px;
	border-radius: 4;
	padding: 10px 15px;
	zoom:inherit;
`;

const CustomButton = styled.button({
	background: `https://apod.nasa.gov/apod/image/1908/m27bigFranke1024.jpg`,
});
export default App;
