import react, { useState } from 'react'

export default function App() {
	const [count, setCount] = useState(0)

	function increment() {
		setCount(pCount => pCount + 1)
	}
	function decrement() {
		setCount(pCount => pCount - 1)
	}

	return (
		<>
			<button onClick={decrement}>-</button>
			<span>{count}</span>
			<button onClick={increment}>+</button>
		</>
	)
}