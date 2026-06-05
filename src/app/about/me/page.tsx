"use client";
import { useSearchParams } from "next/navigation";
export default function About() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const age = searchParams.get("age");
  const ids = searchParams.getAll("id");
  console.info("page me id = " + id);
  console.info("page me age = " + age);
  console.info("page me ids = " + ids);

  return (
    <div>
      <h1 className="text-3xl font-bold h-500">me</h1>
    </div>
  );
}
