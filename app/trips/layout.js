"use client";

import NavBar from "@/app/components/NavBar";

export default function TripsLayout({ children }) {

    return (
        <div>
            <NavBar />
            <main className="m-1 p-1">{children}</main>
        </div>
    )
}