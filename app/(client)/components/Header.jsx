"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
    const pathname = usePathname();
    
    return (
        <header className="w-full bg-gray-900 text-white p-4">
            <nav className="flex justify-between items-center max-w-6xl mx-auto">
                <div className="text-xl font-bold">LOGO</div>
                <ul className="flex items-center space-x-6">
                    <li>
                        <Link href="/" className={`hover:text-gray-400 ${pathname === "/" ? "bg-gray-700 px-3 py-1 rounded" : ""}`}>Home</Link>
                    </li>
                    <li>
                        <Link href="/descripcion" className={`hover:text-gray-400 ${pathname === "/descripcion" ? "bg-gray-700 px-3 py-1 rounded" : ""}`}>Descripción</Link>
                    </li>
                    <li>
                        <Link href="/contacto" className={`hover:text-gray-400 ${pathname === "/contacto" ? "bg-gray-700 px-3 py-1 rounded" : ""}`}>Contacto</Link>
                    </li>
                    <li>
                        <Link href="/nosotros" className={`hover:text-gray-400 ${pathname === "/nosotros" ? "bg-gray-700 px-3 py-1 rounded" : ""}`}>Nosotros</Link>
                    </li>
                    <li>
                        <Link href="./login" className={`hover:text-gray-400 ${pathname === "/nosotros" ? "bg-gray-700 px-3 py-1 rounded" : ""}`}>Login</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}