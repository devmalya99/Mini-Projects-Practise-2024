import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic"

import { NextResponse } from "next/server";

export async function POST(request) {
    const {title , description , status} = await request.json()
    await connectMongoDB()
    const newTopic = await Topic.create({ title, description, status });
    console.log(newTopic)

    return NextResponse.json(newTopic, {status: 201})

}

    export async function GET(){
        await connectMongoDB();
        const topics = await Topic.find();

        return NextResponse.json(topics)
    }


    export async function DELETE(request){
        const id = request.nextUrl.searchParams.get('id')
        await connectMongoDB();
        await Topic.findByIdAndDelete(id);

        return NextResponse.json({message:"Topic Deleted"}, {status: 201})

    }

//handle the PUT request for updating the status:

export async function PUT(request) {
    console.log("PUT req send")
    const id = request.nextUrl.searchParams.get("id");
    const { status } = await request.json();
    await connectMongoDB();
    const updatedTopic = await Topic.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );
    return NextResponse.json(updatedTopic, { status: 200 });
  }

