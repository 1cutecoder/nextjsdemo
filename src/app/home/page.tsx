import Image from "next/image";

// 头像 - 固定 64px
export function Avatar() {
  return (
    <Image
      src="/avatar.jpg"
      width={64}
      height={64}
      alt="用户头像"
      sizes="64px" // ← 告诉浏览器这张图只需要 64px
    />
  );
}

// 横幅图 - 响应式全宽
export function Banner() {
  return (
    <Image
      src="/banner.jpg"
      width={1920}
      height={600}
      alt="横幅"
      sizes="100vw" // ← 占满整个视口宽度，使用 deviceSizes
    />
  );
}

// 响应式内容图
export function ContentImage() {
  return (
    <Image
      src="/content.jpg"
      width={1200}
      height={800}
      alt="内容图"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1200px"
      // ↑ 手机上 100% 宽度，平板上 50%，桌面最大 1200px
    />
  );
}

export default async function Home() {
  const len = 20;
  return (
    <div>
      <h1>Home</h1>
      {Array.from({ length: len }).map((_, index) => (
        <Image
          sizes="32px"
          key={index}
          src={`https://eo-img.521799.xyz/i/pc/img${index + 1}.webp`}
          alt="1"
          width={192}
          height={108}
        />
      ))}
    </div>
  );
}
