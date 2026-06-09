import img1 from "@/public/1.png";
import Image from "next/image";
export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Image src={img1} width={192} height={108} alt="1" loading="eager" />
    </div>
  );
}
