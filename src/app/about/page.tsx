import Link from 'next/link';

const getData = async () => {
  //触发异步会自动跳转到loading组件 异步结束正常返回页面
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('数据');
    }, 5000);
  });
};
export default async function Home() {
  const data = await getData();
  console.log(data);
  return <div>
    <h1>About</h1>
    <Link href="/about/me">跳转到me</Link>
  </div>;
}
