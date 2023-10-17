import { user } from "@/util/db"
import { NextResponse } from "next/server"

// export async function GET(request){
//     return new Response('user,next.js!')

// }

// export function GET(request){
//     return NextResponse.json({title:"iPhone 9",description:"An apple mobile which is nothing like apple",price:549,discountPercentage:12.96,rating:4.69,stock:94,brand:"Apple",category:"smartphones",thumbnail:"https://i.dummyjson.com/data/products/1/thumbnail.jpg",},{status:201})
// }

export function GET() {
    const data = user
    console.log("+++", data)
    if (data) {
        return NextResponse.json(data)
    } else {
        return { status: 404, message: "not found data" }
    }

}