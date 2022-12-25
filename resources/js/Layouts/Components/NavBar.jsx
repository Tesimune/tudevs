import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, usePage } from '@inertiajs/inertia-react';
import { IoIosArrowDown } from 'react-icons/io'
import {GrClose} from 'react-icons/gr';
import {MdMenu} from 'react-icons/md';


export default function NavBar(props) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    const auth = usePage().props.auth.user;


  return (
    <div>
        <nav className="bg-white border-b border-gray-100 fixed w-full z-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between">
                    <div className="flex">
                        <div className="shrink-0 flex items-center">
                            <Link href="/">
                                <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                            </Link>
                        </div>
                    </div>

                    <div className='flex items-center'>

                        <div className="hidden sm:flex sm:items-center sm:ml-6">
                            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                <NavLink href={route('home')} active={route().current('home')}>
                                    Home
                                </NavLink>

                                <NavLink href={route('blog.index')} active={route().current('blog.index')}>
                                    Blog
                                </NavLink>
                                
                                <NavLink href={route('about')} active={route().current('about')}>
                                    About
                                </NavLink>

                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <button
                                            type="button"
                                            className="inline-flex items-center px-1 pt-1 text-gray-500 text-sm font-bold leading-5 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
                                        >
                                            <span className=''>Projects</span>

                                            <IoIosArrowDown />
                                        </button>
                                    </Dropdown.Trigger>
                                    <Dropdown.Content>
                                        <Dropdown.Link href={route('projects')}>
                                            Tudev Projects
                                        </Dropdown.Link>
                                        <Dropdown.Link href={route('open')}>
                                            Open Source
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>

                                <NavLink href={route('api')} active={route().current('api')}>
                                    API's
                                </NavLink>

                                <NavLink href={route('pricing')} active={route().current('pricing')}>
                                    Pricing
                                </NavLink>
                            </div>
                        </div>
                        

                        <div className='flex items-center'>
                            <div className="ml-3 relative">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                            >
                                                <div className='bg-slate-300 p-5 rounded-full'></div>

                                                <IoIosArrowDown />
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>

                                        {auth ? (
                                            <>
                                                <Dropdown.Link href={route('dashboard')} className="text-sm text-gray-700 dark:text-gray-500 underline">
                                                    Dashboard
                                                </Dropdown.Link>
                                                <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                                <Dropdown.Link href={route('logout')} method="post" as="button">
                                                    Log Out
                                                </Dropdown.Link>
                                            </>
                                        ) : (
                                            <>
                                                <Dropdown.Link href={route('login')} className="text-sm text-gray-700 dark:text-gray-500 underline">
                                                    Log in
                                                </Dropdown.Link>

                                                <Dropdown.Link
                                                    href={route('register')}
                                                    className="ml-4 text-sm text-gray-700 dark:text-gray-500 underline"
                                                >
                                                    Register
                                                </Dropdown.Link>
                                            </>
                                        )}
                                        
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>

                            <div className="flex items-center sm:hidden">
                                <button
                                    onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                                >
                                    {showingNavigationDropdown ? <GrClose className='w-7 h-7'/> : <MdMenu className='w-7 h-7'/>}
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'}>
                <div className="bg-white h-full space-y-3 p-3 w-4/5 fixed right-0">
                    <ResponsiveNavLink href={route('home')} active={route().current('home')}>
                        Home
                    </ResponsiveNavLink>

                    <ResponsiveNavLink href={route('blog.index')} active={route().current('blog.index')}>
                        Blog
                    </ResponsiveNavLink>
                    
                    <ResponsiveNavLink href={route('about')} active={route().current('about')}>
                        About
                    </ResponsiveNavLink>

                    <ResponsiveNavLink href={route('projects')} active={route().current('projects')}>
                        Tudev Projects
                    </ResponsiveNavLink>

                    <ResponsiveNavLink href={route('open')} active={route().current('open')}>
                        Open Source
                    </ResponsiveNavLink>

                    <ResponsiveNavLink href={route('api')} active={route().current('api')}>
                        API's
                    </ResponsiveNavLink>

                    <ResponsiveNavLink href={route('pricing')} active={route().current('pricing')}>
                        Pricing
                    </ResponsiveNavLink>
                </div>

            </div>
        </nav>
    </div>
  )
}
