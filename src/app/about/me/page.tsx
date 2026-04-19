'use client';
import {redirect, useSearchParams} from 'next/navigation';

export default function Me() {
  const params = useSearchParams();
  const name = params.get('name');
  const names = params.getAll('name');
  const hasName = params.has('name');
  console.log(name, names, hasName);
  return <div>Me
    <button onClick={() => redirect('/login')}>重定向</button>
  </div>;
}
