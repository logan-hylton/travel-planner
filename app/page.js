"use client"
import NavBar from "@/app/components/NavBar";

export default function Home() {
    return (
        <div>
            <NavBar/>
            <main className="m-1 p-1">
                <h2 className="h2">Home Page!</h2>
            </main>
        </div>
    )
}