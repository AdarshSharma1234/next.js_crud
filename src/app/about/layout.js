'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
    const pathName = usePathname()
    return (
        <div>
            {
                pathName !== "/about/aboutCollege" ?//Conditional Layout in next.js
                    <ul>
                        <li>
                            <Link href="/about">about Main</Link> 
                        </li>

                        <li>
                            <Link href='/about/aboutStudent'>aboutStudent</Link>
                        </li>

                        <li>
                            <Link href='/about/aboutCollege'>aboutCollege</Link>
                        </li>

                    </ul>
                : <Link href='/about'>go to about page</Link>
                    
            }
            {children}
        </div>

    )
}