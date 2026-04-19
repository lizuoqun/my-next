'use client';
import React, {useState} from 'react';

export default function Layout({children}: { children: React.ReactNode }) {
  const [count, setCount] = useState(0);
  return <div>
    <h1>Layout</h1>
    <button onClick={() => setCount(count + 1)}>
      count is: {count}
    </button>
    {children}
  </div>;
}
