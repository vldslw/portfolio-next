import clientPromise from "../../../lib/mongodb";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const mongoClient = await clientPromise;
    const db = mongoClient.db("portfolio");
    const collection = db.collection("cover");
    const results = await collection.find({}).toArray();
    return NextResponse.json(results, { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
