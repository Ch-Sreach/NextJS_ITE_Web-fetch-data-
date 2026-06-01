"use client";
import { useRouter } from "next/navigation"

export default function Login() {
    // import jenh pi next router
    const router = useRouter();
    
    const isLogin = true;
    if (!isLogin) {
        throw new Error("Login Failed!!!")
    }
    return (
        <button className="p-8 bg-red-300 w-125" type="button" onClick={() => router.push("/")}>Dashboard
        </button>
    )
}