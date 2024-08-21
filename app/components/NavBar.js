import Link from "next/link";
import {usePathname} from "next/navigation";

export default function NavBar() {
    const pathname = usePathname()
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" href="/">Travel Planner</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className={`nav-link ${pathname === '/' ? 'active' : ''}`} href="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${pathname === '/trips' ? 'active' : ''}`} href="/trips">Trips</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}