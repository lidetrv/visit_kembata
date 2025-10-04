import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaBars, FaTimes,FaTelegram } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link, useLoaderData, useNavigate } from 'react-router';
import { homeSidebarItems } from '~/constants';
import { NavLink } from 'react-router';
import { cn } from '~/lib/utils';

const NavBar = ({handleClick}:{handleClick?: () => void}) => {
    const user = useLoaderData();
    const navigate = useNavigate();
    const hanldeLogout = () =>{
        navigate('/sign-in')
    }
    // const [menuOpen, setMenuOpen] = useState(false);
  return (
    // <div>
    //     <nav className="flex justify-between items-center px-6 md:px-10 py-5 bg-white shadow-md sticky top-0 z-50">
    //     <h1 className="text-2xl font-bold text-green-700">VisitKemabata</h1>

    //     {/* Desktop Nav */}
    //     <ul className="hidden md:flex space-x-8 text-lg font-medium">
    //       {["Home", "Explore", "Blog", "About"].map((item) => (
    //         <li
    //           key={item}
    //           className="hover:text-green-700 cursor-pointer transition-colors duration-200"
    //         >
    //           {item}
    //         </li>
    //       ))}
    //     </ul>

    //     {/* Mobile Hamburger */}
    //     <button
    //       onClick={() => setMenuOpen(!menuOpen)}
    //       className="md:hidden text-2xl text-green-700 focus:outline-none"
    //     >
    //       {menuOpen ? <FaTimes /> : <FaBars />}
    //     </button>

    //     {/* Mobile Menu */}
    //     {menuOpen && (
    //       <div className="absolute top-[70px] left-0 w-full bg-white shadow-md z-40 py-4">
    //         <ul className="flex flex-col items-center space-y-4 text-lg font-medium">
    //           {["Home", "Explore", "Blog", "About"].map((item) => (
    //             <li
    //               key={item}
    //               onClick={() => setMenuOpen(false)}
    //               className="hover:text-green-700 cursor-pointer transition-colors"
    //             >
    //               {item}
    //             </li>
    //           ))}
    //         </ul>
    //       </div>
    //     )}
    //   </nav>
    // </div>

    <section className="nav-items">
            <Link to='/' className="link-logo">
                <img src="/assets/images/Visit-kembata-logo.jpg" alt="logo" className="size-[40px]"/>
                <h1>VISIT KEMBATA</h1>
            </Link>
            <div className="container">
                <nav>
                    {homeSidebarItems.map(({id, href, icon, label}) => (
                        <NavLink to={href} key={id}>
                            {({isActive}:{isActive: boolean}) => (
                                <div className={cn('group nav-item', {'bg-primary-100 !text-white': isActive })} onClick={handleClick}>
                                    <img 
                                    src={icon}
                                    alt={label}
                                    className={`group-hover:brightness-0 size-5 group-hover:invert ${isActive ? 'brightness-0 invert' : 'text-dark-200' }`}/>
                                    {label}
                                </div>
                            )}
                        </NavLink>
                    ))}
                </nav>
                <footer className="nav-footer">
                    <img src={user?.imageUrl || '/assets/images/david.webp'}
                    alt={user?.name || 'David'} referrerPolicy="no-referrer"/>
                    <article>
                        <h2>{user?.name}</h2>
                        <p>{user?.email}</p>
                    </article>
                    <button className="cursor-pointer" onClick={hanldeLogout}>
                        <img 
                        src="/assets/icons/logout.svg"
                        alt="log out"
                        className="size-6"/>
                    </button>
                </footer>
            </div>
        </section>
  )
}

export default NavBar 