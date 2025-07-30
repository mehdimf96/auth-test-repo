"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      router.push("/auth/login");
    }
  }, [router]);

  return (
    <div className="wrapper">
      <h1 className="h1-bold">Welcome to dashboard</h1>
    </div>
  );
}
