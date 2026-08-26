import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello Tailwind</h1>
      <div className="flex justify-center w-full">
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>

        <button
          type="button"
          className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setCount(0)}
        >
          Reset Count
        </button>
      </div>
    </>
  )
}

export default App
