import { getPostDetails } from '@/Services/postApi';
import React from 'react';

// const getPostDetails = async (id) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
//     const data = await res.json();
//     return data;
// }
const PostsDetailsPage = async ({params}) => {
   const post = await getPostDetails(params.id);
   //console.log(post)
    return (
        <div>
             <h3>Post Details Page {params.id}</h3> 
             <div className='w-72 mx-auto mt-12 space-y-3'>
                <h1>Name : {post.title}</h1>
                <p>Description: {post.body}</p>
             </div>
        </div>
    );
};

export default PostsDetailsPage;