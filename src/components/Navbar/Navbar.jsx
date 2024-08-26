'use client'
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";


const Navbar = () => {
   const pathName = usePathname();
   const router = useRouter();
    const navLink = [
        {
            title: 'Home',
            path: '/'
        },{
            title: 'About',
            path: '/About'
        }
        ,{
            title: 'Blogs',
            path: '/Blogs'
        }
        ,{
            title: 'Posts',
            path: '/Posts'
        }
    ]

    const handleLogin = () => {
       // console.log('Login')
        router.push('/About')
    }
   // console.log(pathName)

   //conditionl layout
   if(pathName.includes('dashboard')){
    return <div className="bg-green-200 ">Dashboard nav</div>;
   }else if(pathName.includes('About'))
    return null;
    return (
        <nav className="flex  justify-between">
            <h3>Next <span className="text-orange-500">Hero</span></h3>
            <ul className="flex gap-4">
                {
                    navLink.map( link => <li key={link.path} className={pathName === link.path && 'text-bold text-orange-500' }><Link href={link.path}>{link.title}</Link></li>)
                }
            </ul>
            <button onClick={handleLogin} className="bg-orange-500 text-white font-bold px-5 py-1 rounded-md">Login</button>
        </nav>
    );
};

export default Navbar;