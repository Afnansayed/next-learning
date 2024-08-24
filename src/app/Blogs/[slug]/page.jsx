import React from 'react';

const page = ({params}) => {
    console.log(params.slug)
    const {name,description} = blogs.find(blog => blog.slug === params.slug)
    console.log(name)
    return (
        <div className='w-48 mx-auto mt-12 space-y-3'>
            <h1>{name}</h1>
            <p>{description}</p>
        </div>
    );
};
const blogs = [
    {
      "slug": "tech-trends-2024",
      "name": "Tech Trends 2024",
      "description": "Explore the latest technology trends expected to shape the world in 2024, including AI advancements, quantum computing, and more."
    },
    {
      "slug": "healthy-living-tips",
      "name": "Healthy Living Tips",
      "description": "Discover practical tips and advice on maintaining a healthy lifestyle through balanced nutrition, exercise, and mindfulness."
    },
    {
      "slug": "web-development-guide",
      "name": "Web Development Guide",
      "description": "A comprehensive guide to modern web development, covering the latest frameworks, tools, and best practices for building responsive websites."
    },
    {
      "slug": "travel-on-a-budget",
      "name": "Travel on a Budget",
      "description": "Learn how to explore the world without breaking the bank with our tips on budget-friendly travel, accommodation, and activities."
    },
    {
      "slug": "financial-freedom-101",
      "name": "Financial Freedom 101",
      "description": "Understand the principles of financial freedom, including budgeting, investing, and smart spending habits for long-term success."
    },
    {
      "slug": "mastering-react",
      "name": "Mastering React",
      "description": "Delve into advanced React.js concepts and techniques to build dynamic, high-performing web applications."
    },
    {
      "slug": "home-decor-ideas",
      "name": "Home Decor Ideas",
      "description": "Get inspired with creative and stylish home decor ideas that can transform your living space into a cozy haven."
    },
    {
      "slug": "fitness-for-beginners",
      "name": "Fitness for Beginners",
      "description": "Kickstart your fitness journey with easy-to-follow workout routines, nutrition tips, and motivation strategies for beginners."
    },
    {
      "slug": "digital-marketing-strategies",
      "name": "Digital Marketing Strategies",
      "description": "Learn effective digital marketing strategies to grow your online presence, increase traffic, and boost sales."
    },
    {
      "slug": "sustainable-living",
      "name": "Sustainable Living",
      "description": "Explore ways to live a more sustainable and eco-friendly lifestyle through green practices, conservation, and mindful consumption."
    }
  ]
export default page;