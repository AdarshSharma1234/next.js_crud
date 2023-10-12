'use client'
import { useState } from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  const navigation = (name) => {
    router.push(name)
  }
  const [name, setName] = useState('sharma')
  let Apple = () => {
    setName('Adarsh')
  }

  let FirstComponent = () => {
    return (
      <h4>first component</h4>
    )
  }
  return (
    <main className={styles.main}>
      {/*<User />*/}

      <p>Learning Next.js With {name}</p>
      <button onClick={() => Apple()}>Click Me</button>
      {/*<FirstComponent />*/}
      {FirstComponent()}
      <Link href="/login">Go to login-page</Link>
      <br></br>
      <br></br>
      <Link href="/about">Go to About-page</Link>
      <br></br>
      <br></br>
      <button onClick={() => navigation("/login")}>Go to login-page</button>
      <br></br>
      <br></br>
      <button onClick={() => navigation("/about")}>Go to about-page</button>
      <p>Normal-routing and Nested-routing</p>
    </main>
  )
}
// files based routing in next.js
//i have using component under component
//make a component-what is component-> the component is piace of code then using again by again.
//given example

// let User = (props) => {
//   return (
//     <div>
//       <p>user component {props.name}</p>
//     </div>
//   )
// }

//Event, function, state discuss in next.js
//state=>useState is React Hook that allows you to add state to a functional component.