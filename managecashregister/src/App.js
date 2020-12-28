import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var [bal, setbal] = useState(0);
  var [tth, settth] = useState(0);
  var [fvh, setfvh] = useState(0);
  var [hnd, sethnd] = useState(0);
  var [fty, setfty] = useState(0);
  var [ten, setten] = useState(0);
  var [fiv, setfiv] = useState(0);
  var [one, setone] = useState(0);
  function denom(b) {
    var rem = 0;
    settth(Math.floor(b / 2000));
    rem = b - Math.floor(b / 2000) * 2000;
    console.log(rem);
    if (rem !== 0) {
      setfvh(Math.floor(rem / 500));
      rem = rem - Math.floor(rem / 500) * 500;
      if (rem === 0) return;
    } else {
      setfvh(Math.floor(b / 500));
      rem = b - Math.floor(b / 500) * 500;
      if (rem === 0) return;
    }
    if (rem !== 0) {
      sethnd(Math.floor(rem / 100));
      rem = rem - Math.floor(rem / 100) * 100;
      if (rem === 0) return;
    } else {
      sethnd(Math.floor(b / 100));
      rem = b - Math.floor(b / 100) * 100;
      if (rem === 0) return;
    }
    if (rem !== 0) {
      setfty(Math.floor(rem / 50));
      rem = rem - Math.floor(rem / 50) * 50;
      if (rem === 0) return;
    } else {
      setfty(Math.floor(b / 50));
      rem = b - Math.floor(b / 50) * 50;
      if (rem === 0) return;
    }
    if (rem !== 0) {
      setten(Math.floor(rem / 10));
      rem = rem - Math.floor(rem / 10) * 10;
      if (rem === 0) return;
    } else {
      setten(Math.floor(b / 10));
      rem = b - Math.floor(b / 10) * 10;
      if (rem === 0) return;
    }
    if (rem !== 0) {
      setfiv(Math.floor(rem / 5));
      rem = rem - Math.floor(rem / 5) * 5;
      if (rem === 0) return;
    } else {
      setfiv(Math.floor(b / 5));
      rem = b - Math.floor(b / 5) * 5;
      if (rem === 0) return;
    }
    if (rem !== 0) {
      setone(Math.floor(rem / 1));
      rem = rem - Math.floor(rem / 1) * 1;
      if (rem === 0) return;
    } else {
      setone(Math.floor(b / 1));
      rem = b - Math.floor(b / 1) * 1;
      if (rem === 0) return;
    }
  }
  function init() {
    bill = event.target.value;
  }
  function init1() {
    cash = event.target.value;
  }
  function balance() {
    balance = cash - bill;
    denom(balance);
    //console.log(bill);
    setbal(balance);
  }
  return (
    <div className="App">
      <h1>Cash Register</h1>
      <h4>Bill amount</h4>
      <input placeholder="Rs" onChange={init}></input>
      <br></br>
      <h4>Cash Received</h4>
      <input placeholder="Rs" onChange={init1}></input>
      <table>
        <tr>
          <td>2000</td> <td>X</td>
          <td> {tth}</td> <td>= </td>
          <td>{tth * 2000}</td>
        </tr>
        <tr>
          <td>500</td>
          <td>X</td>
          <td> {fvh}</td> <td>= </td>
          <td>{fvh * 500}</td>
        </tr>
        <tr>
          <td>100</td> <td>X</td>
          <td>{hnd}</td> <td>= </td>
          <td>{hnd * 100}</td>
        </tr>
        <tr>
          <td>50</td>
          <td>X</td> <td>{fty}</td>
          <td>= </td>
          <td>{fty * 50}</td>
        </tr>
        <tr>
          <td>10</td>
          <td>X</td> <td>{ten}</td> <td>= </td>
          <td>{ten * 10}</td>
        </tr>
        <tr>
          <td>5</td>
          <td>X</td> <td>{fiv}</td>
          <td>= </td>
          <td>{fiv * 5}</td>
        </tr>
        <tr>
          <td>1</td> <td>X</td> <td>{one}</td>
          <td>= </td>
          <td>{one * 1}</td>
        </tr>
      </table>
      <h4>Total:</h4>
      {bal}
      <br></br>
      <button onClick={balance}>Get denomination</button>
    </div>
  );
}
