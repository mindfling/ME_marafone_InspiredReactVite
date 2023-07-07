import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const sayHelloTimes = (count = 0) => {
  if (count < 0) return 0;
  let result = `Lets say Hello ${count} ${count == 1 ? 'time'  : 'times'}:\n\n`;
  if (count === 0) {
    result = 'We cant say Hello zero or less times';
  }
  
  let i = 0;
  while(i < count) {
    result += ++i + '. Helllloooo\n';
  }
  
  alert(result);
  return result;
}

function App() {
  const [count, setCount] = useState(10);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h2>Vite + React ++plus {count} Dim</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setCount((count) => {
          if (count > 1) {
            return count - 1;
          } else {
            console.log('bottom is 0');
            return 0;
          }
        })}>
          decrease to {count}
        </button>
        <button onClick={() => sayHelloTimes(count)}>
          say Hello {count} times
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
