import { useState } from "react";
import "./App.css";
import Header from "./components/HeaderComp";
import AddTransaction from "./components/AddTransaction";
import Balance from "./components/Balance";

function App() {
  const [transaction, setTransaction] = useState([]);

  function addTransaction(newTransaction) {
    console.log(newTransaction);
    setTransaction([...transaction, newTransaction]);
  }
  return (
    <div>
      <Header />
      <Balance />
      <AddTransaction addTransaction={addTransaction} />
    </div>
  );
}

export default App;
