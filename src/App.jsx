import React from "react";
import Swal from "sweetalert2";
import "./App.css"; 

const App = () => {
  const sumNumbers = async () => {
    const { value: number1 } = await Swal.fire({
      title: "Enter a number",
      input: "number",
      inputPlaceholder: "Enter a number",
      color: "#000",
      confirmButtonColor: "#000",
    });

    if (!number1) return;

    const { value: number2 } = await Swal.fire({
      title: "Enter another number",
      input: "number",
      inputPlaceholder: "Enter another number",
      color: "#000",
      confirmButtonText: "Submit",
      confirmButtonColor: "#000",
    });

    if (!number2) return;

    const sum = parseFloat(number1) + parseFloat(number2);

    Swal.fire({
      title: "Result",
      text: `The sum of the two numbers is ${sum}`,
      icon: "success",
      color: "#000",
      confirmButtonText: "Close",
      confirmButtonColor: "#000",
    });
  };

  return (
    <div className="card">
      <h1>Sum Calculator</h1>
      <button onClick={sumNumbers}>Start Calculation</button>
    </div>
  );
};

export default App;
