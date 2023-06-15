import { useState } from "react";
import "./App.css";
import { PinTab } from "./Components/PinTab";

function App() {
  const [otp, setOtp] = useState("");
  return (
    <div data-testid="app-component" className="App">
      {/* You can pass setOtp as a prop */}
      <PinTab length={5} maxChar={1} setOtp={setOtp} />
      {/* Show the OTP entered by user below */}
      <h3 data-testid="otp">
        OTP : <span style={{ color: "red" }}>{otp}</span>
      </h3>
    </div>
  );
}

export default App;
