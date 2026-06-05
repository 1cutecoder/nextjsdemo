import Link from "next/link";

const getData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("data");
    }, 200);
  });
};
export default async function About() {
  const data = await getData();
  return (
    <div>
      <h1 className="text-3xl font-bold">About</h1>
      <Link
        className="text-blue-500 block scroll={true} mt"
        href={{ pathname: "/about/me", query: { id: [1, 2], age: 20 } }}
      >
        ME
      </Link>
      <Link className="text-blue-500 block" href="/about/me2">
        ME2
      </Link>
    </div>
  );
}
