
import { user } from "@/util/db"
import { NextResponse } from "next/server"

export function GET(request, content) {

    const userdata = user.filter((item) => item.id == content.params.id)
    console.log("===>>", "jkgjewrkgj", userdata)
    return NextResponse.json(userdata,{status:200})
}

