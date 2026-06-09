import Image from "next/image";
export default async function Home() {
  const len = 20;
  return (
    <div>
      <h1>Home</h1>
      {Array.from({ length: len }).map((_, index) => (
        <Image
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
