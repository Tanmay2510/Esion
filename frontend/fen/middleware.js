import { NextResponse } from "next/server";
export default function middleware(req,res){
    let cook = req.cookies.get('sessionId')
    let url = req.url;
    // if(!cook && url.includes('/Dashboard')){
    //     return NextResponse.redirect("http://localhost:3000/");
    // }
    // else if(cook && url === "http://localhost:3000/"){
    //     return NextResponse.redirect("http://localhost:3000/Dashboard")
    // }
}