import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';

const getPosts = async () => {
    console.log(process.env.NEXT_PUBLIC_API_URL)
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`);
  const data = await res.json();
//   if(data){
//     redirect(`/Posts/${data[0].id}`)
//   }
  return data;
     
}
const PostsPage = async () => {
    const posts = await getPosts();
   // console.log(posts)
    return (
        <div>
              <div className='grid grid-cols-3 gap-5'>
                {
                posts.slice(0,15).map((post) =><div key={post.id} className='bg-slate-50 shadow-md p-4'>
                    <h1>Name : {post.title}</h1>
                    <p>Description: {post.body}</p>
                    <button className='px-4 bg-orange-500 text-white font-bold py-1'><Link href={`/Posts/${post.id}`}>See Details</Link></button>
                </div>
                )
                }
              </div>
        </div>
    );
};

export default PostsPage;