'use client'
import {Suspense, useState} from 'react';
import {Button} from "@/components/ui/button";

export default function MyComponent({ children }: { children: React.ReactNode }) {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Count: {count}</p>
            <Button onClick={() => setCount(count + 1)}>Increment</Button>
            <Suspense fallback={<div>Loading MDX...</div>}>
                {children}
            </Suspense>
        </div>
    );
}
