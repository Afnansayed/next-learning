import { NextResponse } from "next/server"




// export const  middleware = (request) => {
//        return NextResponse.redirect(new URL('/dashboard',request.url))
// }

// export const config = {
//     matcher : ['/About','/contact']
// }

// try with out matcher 
// export const  middleware = (request) => {
//     if(request.nextUrl.pathname.startsWith('/About'))
//     {
//         return NextResponse.redirect(new URL('/dashboard',request.url)) 
//     }   
// }


// user check basic  
//const user = true;
// export const  middleware = (request) => {
//     if(!user)
//     {
//         return NextResponse.redirect(new URL('/About',request.url)) 
//     }  
//     return NextResponse.next(); 
// }

// export const config = {
//     matcher : ['/Blogs','/dashboard']
// }


// check cookies and redirect to login
const coo = 'next-superhero';
export const  middleware = (request) => {
    const cookies = request.cookies.get('token');
    //console.log(request.cookies.get('token'));

    if(!cookies || cookies.value !== coo)
    {
        return NextResponse.redirect(new URL('/About',request.url)) 
    }  
    return NextResponse.next(); 
}

export const config = {
    matcher : ['/Blogs','/dashboard']
}
