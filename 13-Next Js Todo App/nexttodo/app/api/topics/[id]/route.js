import connectMongoDB from "@/libs/mongodb"
import Topic from "@/models/topic"
import { NextResponse } from "next/server"

export async function PUT(request , {params}) {
    console.log("PUT req send")
    
    
    const id = request.nextUrl.searchParams.get("id");
    const { status } = await request.json();
    const {newTitle:title , newDescription: description} =await request.json()

    await connectMongoDB()
    await Topic.findByIdAndUpdate(
        id , 
        {
        title,
        description
    },
    { status },
    )
    return NextResponse.json({message: "Topic updated"}, {status: 200})
}


export async function GET(request , {params}){
    const {id} = params
    await connectMongoDB()
    const topic = await Topic.findOne({_id:id});
    return NextResponse.json({topic}, {status:200})
}