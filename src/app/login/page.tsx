"use client";
export default function Login() {
  async function handleLogin(id: number, formData: FormData) {
    const username = formData.get("username");
    const password = formData.get("password");
    const form = Object.fromEntries(formData);
    console.log("handleLogin params: " + username, password, form, id);
  }
  const userFunction = handleLogin.bind(null, 1); //绑定id参数

  return (
    <div>
      <div>登录页面</div>
      <div className="flex flex-col gap-2 w-[300px] mx-auto mt-30" />
      <form action={userFunction} className="flex flex-col gap-2">
        <input
          className="border border-gray-300 round-md p-2"
          type="text"
          name="username"
          placeholder="用户名"
        ></input>
        <input
          className="border border-gray-300 round-md p-2"
          type="text"
          name="password"
          placeholder="密码"
        ></input>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
          登录
        </button>
      </form>
    </div>
  );
}
