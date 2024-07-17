import { NextResponse } from "next/server";

export const getData = async () => {
	const res = await fetch("http://localhost:4000/articles");
	const data = await res.json();
	return data;
};

debugger;

export async function GET(req: Request) {
	return NextResponse.json({ message: "coucou" });
}

export async function POST(req: Request) {
	debugger;
	// const element = await req.json();
	// console.log("element");
	// console.log(element);
// console.log(req);
	return NextResponse.json({ description: "Mario" });
}
