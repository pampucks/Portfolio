// For .tsx:
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h1>Hello React with Vite and Bun!</h1>
      <button onClick={() => setCount((c) => c + 1)}>Count is: {count}</button>
    </div>
  );
}

export default App;
