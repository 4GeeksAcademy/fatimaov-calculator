import React, { useState } from "react";

// Arithmetic operations
import operationsArr from "../arithmeticOperations";
import Addition from "./Addition";
import Subtraction from "./Subtraction";
import Multiplication from "./Multiplication";
import Division from "./Division";
import ClearAll from "./ClearAll";
import Clear from "./Clear";
import Display from "./Display";
import Modulus from "./Modulus";
import DigitButton from "./DigitButton";
import Equal from "./Equal";
import DecimalPoint from "./DecimalPoint";


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

	// Number btns
	function handleClickNumber(e) {
		if (total !== 0) {
			setTotal(null)
		}
		setAccumulator(Number(accumulator + e.target.value))
	}

	// Decimal Point
	function handleClickDecimalPoint() {
		if (!Number.isInteger(accumulator)) {
			return;
		}
		const decimalNum = accumulator.toString()
		setAccumulator(decimalNum + ".")
	}

	// Addition
	function handleClickAddition() {
		typeof accumulator === 'string' ? setFirstOperand(Number(accumulator)) : setFirstOperand(accumulator);
		setOperation(() => operationsArr.addition)
		setAccumulator('')
	}

	// Subtraction
	function handleClickSubtraction(e) {
		if (!accumulator && !firstOperand || operation && !accumulator) {
			return setAccumulator(e.target.textContent)
		}
		typeof accumulator === 'string' ? setFirstOperand(Number(accumulator)) : setFirstOperand(accumulator);
		setOperation(() => operationsArr.subtraction)
		setAccumulator('')
	}

	// Multiplication
	function handleClickMultiplication() {
		typeof accumulator === 'string' ? setFirstOperand(Number(accumulator)) : setFirstOperand(accumulator);
		setOperation(() => operationsArr.multiplication)
		setAccumulator('')
	}

	// Division
	function handleClickDivision() {
		typeof accumulator === 'string' ? setFirstOperand(Number(accumulator)) : setFirstOperand(accumulator);
		setOperation(() => operationsArr.division)
		setAccumulator('')
	}

	// Modulus
	function handleClickModulus() {
		typeof accumulator === 'string' ? setFirstOperand(Number(accumulator)) : setFirstOperand(accumulator);
		setOperation(() => operationsArr.modulus)
		setAccumulator('')
	}

	// Total
	function handleClickEqual() {
		if (!firstOperand && !accumulator) {
			return;
		}

		if (accumulator && !firstOperand) {
			setTotal(typeof accumulator === 'string' ? Number(accumulator) : accumulator)
			return;
		}

		const result = operation(firstOperand, typeof accumulator === 'string' ? Number(accumulator) : accumulator);
		setTotal(result)
		setAccumulator('')
		setFirstOperand(null)
	}

	// Clear
	function handleClickClear() {
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

	// Clear All
	function handleClickClearAll() {
		setAccumulator('')
		setFirstOperand(null)
		setTotal(null)
	}

	return (
		<>
			<div className="container bg-secondary p-5">
				<div id="display" className="row ">
					<Display accumulator={accumulator} total={total} />
				</div>
				<div>
					<div className="row row-cols-4 text-center mt-2">
						<ClearAll onSelectedKey={handleClickClearAll} />
						<Division onSelectedKey={handleClickDivision} />
						<Multiplication onSelectedKey={handleClickMultiplication} />
						<Clear onSelectedKey={handleClickClear} />
					</div>
					<div className="row row-cols-4 text-center mt-2">
						{[7, 8, 9].map((digit) => <DigitButton key={digit} value={digit} onSelectedKey={handleClickNumber} />)}
						<Subtraction onSelectedKey={handleClickSubtraction} />
					</div>
					<div className="row row-cols-4 text-center mt-2">
						{[4, 5, 6].map((digit) => <DigitButton key={digit} value={digit} onSelectedKey={handleClickNumber} />)}
						<Addition onSelectedKey={handleClickAddition} />
					</div>
					<div className="row row-cols-2 text-center mt-2">
						<div className="col-9">
							<div className="row row-cols-3">
								{[1, 2, 3].map((digit) => <DigitButton key={digit} value={digit} onSelectedKey={handleClickNumber} />)}
							</div>
							<div className="row row-cols-3">
								<Modulus onSelectedKey={handleClickModulus} />
								<DigitButton value={0} onSelectedKey={handleClickNumber} />
								<DecimalPoint onSelectedKey={handleClickDecimalPoint} />
							</div>
						</div>
						<Equal onSelectedKey={handleClickEqual} />
					</div>
				</div>
			</div>
		</>
	);
};

export default App;