import { getPosts } from '@/Services/postApi';
import React from 'react';

// const getPosts = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await res.json();
//   return data;
     
// }
const PostsPage = async () => {
    const posts = await getPosts();
    console.log(posts)
    return (
        <div>
              <div className='grid grid-cols-3 gap-5'>
                {
                posts.slice(0,15).map((post) =><div key={post.id} className='bg-slate-50 shadow-md p-4'>
                    <h1>Name : {post.title}</h1>
                    <p>Description: {post.body}</p>
                </div>
                )
                }
              </div>
        </div>
    );
};

export default PostsPage;