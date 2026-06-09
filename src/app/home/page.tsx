import { Suspense } from "react";

const DynamicImage = async () => {
  const randomImage = await fetch("https://www.loliapi.com/acg/pc?type=json"); //这个接口随机返回一个二刺猿图片
  const data = await randomImage.json();
  console.log(data);
  return <img width={500} height={500} src={data.url} alt="random image" />;
};
export default async function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <DynamicImage />
      </Suspense>
    </div>
  );
}
