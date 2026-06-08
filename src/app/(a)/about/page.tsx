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
      <h1 className="text-3xl font-bold">About Page</h1>
    </div>
  );
}
