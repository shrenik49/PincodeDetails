import "./styles.css";
import { useEffect, useState } from "react";
import axios from "axios";
export default function App() {
  const [pincode, setPincode] = useState("");

  useEffect(() => {
    const getData = setTimeout(() => {
      axios
        .get(`https://api.postalpincode.in/pincode/${pincode}`)
        .then((data) => {
          console.log(data);
        });
    }, 1000);

    return () => clearTimeout(getData);
  }, [pincode]);

  return (
    <div className="App">
      <input
        placeholder="enter pincode"
        onChange={(event) => setPincode(event.target.value)}
      ></input>
    </div>
  );
}
