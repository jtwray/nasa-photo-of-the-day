import React, {useState, useEffect} from "react";
import axios from 'axios';
import "./App.css";
function App() {
  // Initialize state to hold the image URL
  const [picture, setPicture] = useState("");
  const apiKey=`yHw381OIugvbURlMdFPe6KdZ0lG9r9Qd7txnjNox`;
  const [date, setDate]=useState( "" );
  const [apiResult, setApiResult]=useState( "" );
  const [title, setTitle]=useState( "" );
  console.log(new Date(date))
  
  useEffect(() => {
    // This axios GET request will return a single image
    axios
      // .get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
      // Which we then set to state
      .then(res => setPicture(res.data.url))
      // Always include error handling
      .catch( error => console.error );
    
  }, []);

	return (
		<div className="App">
			<div>
				<button
					onClick={() => {
						
					}}>
					refreshpictureOfTheDayNasaStyLe
        </button>
        <h1>{}</h1>
				<div>
					<img src={`${picture}`} alt='Deep Space'></img>
				</div>
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