import { NextResponse } from "next/server";
export default function middleware(req,res){
    let cook = req.cookies.get('sessionId')
    let url = req.url;
        if (typeof window !== 'undefined') {
        // do localStorage stuff here
         console.log(window.localStorage.getItem('userId'))
      }
      

    // if(!cook && url.includes(`/users/`)){
    //     return NextResponse.redirect("http://localhost:3000/");
    // }
    // else if(cook && url === "http://localhost:3000/"){
    //     return NextResponse.redirect(`http://localhost:3000/users/`)
    // }
}