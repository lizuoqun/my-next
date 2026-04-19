'use client';
import React, {useState} from 'react';

export default function Template({children}: { children: React.ReactNode }) {
  const [count, setCount] = useState(0);
  return <div className="border border-black rounded-lg p-4">
    <h1>Template</h1>
    <button onClick={() => setCount(count + 1)}>
      count is: {count}
    </button>
    {children}
  </div>;
}
