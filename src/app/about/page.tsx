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
  return <div className="border border-black rounded-lg p-4">
    <h1>About</h1>
    <Link href="/about/me">跳转到me</Link>
    <div className="border border-black rounded-lg p-4">
      <h2>路由跳转</h2>
      <div className="flex flex-col">
        <Link href={{pathname: '/about/me', query: {name: '张三'}}}>跳转并传参</Link>
        {/*<Link href="/about" prefetch={true}>预获取page页面</Link>*/}
        {/*<Link href="/about" scroll={true}>保持滚动位置</Link>*/}
        {/*<Link href="/about" replace={true}>替换当前页面</Link>*/}
      </div>
    </div>
  </div>;
}
