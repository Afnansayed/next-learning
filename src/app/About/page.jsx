import React from 'react';


const getTime = async () => {
    const res = await fetch('http://localhost:3000/time', {next:  {revalidate: 10}});
    const data = await res.json();
    return data.currentTime;
}
const page = () => {
   // console.log (name)
   const time = getTime();
    return (
        <div>
           <h3>About our company and learn more....</h3>
           <h3>Time : {time} </h3>
        </div>
    );
};

export default page;