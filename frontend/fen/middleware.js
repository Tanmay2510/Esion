import { NextResponse } from "next/server";
export default function middleware(req,res){
    let cook = 
    req.cookies.get('sessionId') ?
    req.cookies.get('sessionId').value
    : null
    let id = 
    req.cookies.get('userId') ?
    req.cookies.get('userId').value
    : null
    let url = req.url;
    if(!cook && url.includes(`/users/`)){
        return NextResponse.redirect("http://localhost:3000/");
    }
    else if((cook && url === "http://localhost:3000/") || (cook && url ==="http://localhost:3000/User")){
        return NextResponse.redirect(`http://localhost:3000/users/${id}`)
    }
}