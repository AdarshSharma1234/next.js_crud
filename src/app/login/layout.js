'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
    const pathName = usePathname()
    return (
        <div>
            {
                pathName !== "/login/loginCollege" ?//Conditional Layout in next.js
                    <ul>
                        <li>
                            <Link href="/login">login Main</Link> 
                        </li>

                        <li>
                            <Link href='/login/loginStudent'>loginStudent</Link>
                        </li>

                        <li>
                            <Link href='/login/loginCollege'>loginCollege</Link>
                        </li>

                    </ul>
                : <Link href='/login'>go to login page</Link>
                    
            }
            {children}
        </div>

    )
}