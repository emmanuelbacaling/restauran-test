import { useState } from "react"
import logo from "./logo.svg"
import "./App.css"

function App() {
  const [restaurantData, setRestaurantData] = useState({
    tableNo: 0,
    chairPerTable: 0,
  })

  const [result, setResult] = useState("")

  const [headCount, setHeadCount] = useState(0)

  const handleChange = (e) => {
    const { id, value } = e.target
    if (id === "table-no") {
      setRestaurantData({ ...restaurantData, tableNo: parseInt(value) })
    } else if (id === "chair-per-table") {
      setRestaurantData({ ...restaurantData, chairPerTable: parseInt(value) })
    } else if (id === "head-count") {
      setHeadCount(parseInt(value))
    }
  }

  const calculate = () => {
    const { tableNo, chairPerTable } = restaurantData
    const totalTableHead = tableNo * chairPerTable
    let count = 0
    let message = ""
    if (totalTableHead >= headCount) {
      const erm = headCount / chairPerTable
      const tableNeeded = Math.ceil(erm)
      if (tableNeeded > 0) {
        for (let i = 1; i <= tableNeeded; i++) {
          message = message + `T${i} `
        }

        setResult(
          `${tableNeeded} table is required please proceed to table ${message} `
        )
      }
    }
  }

  return (
    <div className="App">
      <h1>Restaurant input</h1>
      <hr />
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        id="table-no"
        placeholder="table #"
      />
      <br />
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        id="chair-per-table"
        placeholder="Chair per table"
      />
      <br />
      Output: <br />
      {`${restaurantData.tableNo} table available`} <br />{" "}
      {`${restaurantData.chairPerTable} chairs available`}
      <hr />
      <br />
      <h1></h1>
      <hr />
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        id="head-count"
        placeholder="head-count"
      />
      <br />
      <button onClick={() => calculate()}>Submit reservation</button>
      <hr />
      {result}
    </div>
  )
}

export default App
