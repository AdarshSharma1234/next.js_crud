'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const About = () => {
    const router=useRouter()
    return (
        <div>
            <h1>About-page</h1>
            <button onClick={()=>router.push("/")}>Go to about-page</button>
            <br/>
            <Link href='/about/aboutCollege'>Go to aboutCollege-page</Link>
            <br/>
            <Link href='/about/aboutStudent'>Go to aboutStudent-page</Link>
        </div>
    )
}
export default About