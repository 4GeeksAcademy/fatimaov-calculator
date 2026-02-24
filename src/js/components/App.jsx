import React, { useState } from "react";


//create your first component
const App = () => {
	// States
	const [accumulator, setAccumulator] = useState(0)
	console.log("accumulator", accumulator)
	const [firstOperand, setFirstOperand] = useState(null)
	console.log("firstOperand", firstOperand)
	const [operation, setOperation] = useState(null)
	console.log("operation", operation)
	const [total, setTotal] = useState(null)
	console.log("total", total)

	// Data Operations
	const operationsArr = {
		addition: (firstOperand, secondOperand) => firstOperand + secondOperand,
		subtraction: (firstOperand, secondOperand) => firstOperand - secondOperand,
		multiplication: (firstOperand, secondOperand) => firstOperand * secondOperand,
		division: (firstOperand, secondOperand) => firstOperand / secondOperand,
		modulus:(firstOperand, secondOperand) => firstOperand % secondOperand, 
		
	}



	// Number btns
	function handleClickNumber(e) {
		setAccumulator(Number(accumulator + e.target.value))
	}

	// Decimal Point
	function handleClickDecimalPoint(accumulator) {
		if (!Number.isInteger(accumulator)) {
			return;
		}
		const decimalNum = accumulator.toString()
		setAccumulator(decimalNum + ".")
	}

	// Addition
	function handleClickAddition(e) {

		setFirstOperand(accumulator)
		setOperation(() => operationsArr.addition)
		setAccumulator('')
	}

	// Subtraction
	function handleClickSubtraction(e) {
		setFirstOperand(accumulator)
		setOperation(() => operationsArr.subtraction)
		setAccumulator('')
	}

	// Multiplication
	function handleClickMultiplication(e) {
		setFirstOperand(accumulator)
		setOperation(() => operationsArr.multiplication)
		setAccumulator('')
	}

	// Total
	function handleClickEqual() {
		if (!firstOperand || !accumulator) {
			return;
		}
		const result = operation(firstOperand, accumulator)
		setTotal(() => result)
		setAccumulator('')
		setFirstOperand(null)
	}

	// Clear
	function handleClickClear(accumulator) {
		const clearResultArr =
			accumulator
				.toString()
				.split('')
				.filter((_, i, arr) => (i) !== (arr.length - 1))

		if (!clearResultArr[(clearResultArr.indexOf('.') + 1)]) {
			const clearResultJoinedString = clearResultArr.join('')
			return setAccumulator(clearResultJoinedString)
		}

		const clearResultJoinedNum = Number(clearResultArr.join(''))
		setAccumulator(clearResultJoinedNum)
	}

	// All Clear
	function handleClickAllClear() {
		setAccumulator('')
		setFirstOperand(null)
		setTotal(null)
	}


	return (
		<>
			<div className="container bg-secondary p-5">
				<div id="display" className="row ">
					<div className="col p-0">
						<p className="bg-white text-end p-3 m-0">{accumulator ? accumulator : 0}</p>
						<p className="bg-white text-end p-3 m-0">total: {total ? total : 0}</p>
					</div>
				</div>
				<div>
					<div className="row row-cols-4 text-center mt-2">
						<div className="col ">
							<button className="btn btn-primary" value={1} onClick={handleClickNumber}>1</button>
						</div>
						<div className="col">
							<button className="btn btn-primary" value={2} onClick={handleClickNumber}>2</button>
						</div>
						<div className="col">
							<button className="btn btn-primary" onClick={handleClickAddition}>+</button>
						</div>
						<div className="col">
							<button className="btn btn-primary" onClick={handleClickSubtraction}>-</button>
						</div>
						<div className="col">
							<button className="btn btn-primary" onClick={handleClickMultiplication}>x</button>
						</div>
					</div>
					<div className="row row-cols-4 text-center mt-2">
						<div className="col">
							<button className="btn btn-primary" onClick={() => handleClickDecimalPoint(accumulator)}>.</button>
						</div>
						<div className="col">
							<button className="btn btn-primary" onClick={handleClickAllClear}>AC</button>
						</div>
						<div className="col">
							<button className="btn btn-primary" onClick={() => handleClickClear(accumulator)}>C</button>
						</div>
						<div className="col">
							<button className="btn btn-primary" onClick={handleClickEqual}>=</button>
						</div>
					</div>



				</div>
			</div>
		</>
	);
};

export default App;