"use client";
import { useParams } from "next/navigation";
export default function About() {
  const param = useParams();
  const id = param.id;
  console.info("AboutPage id = " + id);
  return (
    <div>
      <h1 className="text-3xl font-bold h-500">AboutPage {id}</h1>
    </div>
  );
}
