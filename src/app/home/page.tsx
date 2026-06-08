"use client";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

const checkLogin = async () => {
  const res = await fetch("/api/login");
  const data = await res.json();
  return data.code === 1;
};

export default function HomePage() {
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    checkLogin().then((isLoggedIn) => {
      if (!isLoggedIn) {
        redirect("/");
      }
      setIsChecking(false);
    }).catch(() => {
      redirect("/");
    });
  }, []);

  if (isChecking) {
    return <div>检查登录状态...</div>;
  }

  return <div>你已经登录进入Home页面</div>;
}
