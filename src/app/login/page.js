'use client'
import Link from "next/link"
import { useRouter } from "next/navigation"

const Login = () => {
    const router = useRouter()
    const navigation = (login) => {
        router.push('/login/' + login)

    }
    return (
        <div>
            <h1>
                Login-page
            </h1>
            <Link href="/">Go to Home Page</Link>
            <button onClick={() => navigation('loginCollege')}>go to loginStudent-page</button>
            <button onClick={() => navigation('loginStudent')}>go to LoginCollege-page</button>
        </div>
    )
}

export default Login