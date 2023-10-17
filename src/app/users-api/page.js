import Link from "next/link";

async function geturlapi(){
    let data= await fetch('http://localhost:3000/api/users')
    data=await data.json()
    console.log(data)
    return data;
}


export default async function Page() {
    let users= await geturlapi();
    console.log('====>>>>',users)
    return (
        <div>
        <p>users-api</p>
        {
            users.map((item)=>(
                <div key={item.id}>
                <Link href={`users-api/${item.id}`}>{item.name}</Link>
                </div>
            ))
        }
        </div>
    )
}