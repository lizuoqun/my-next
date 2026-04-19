'use client';
import {useParams} from 'next/navigation';

export default function DynamicRoute() {
  const {id} = useParams();
  return <div>动态路由获取 {id}</div>;
}
