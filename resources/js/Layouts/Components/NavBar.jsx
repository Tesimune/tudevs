import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, usePage } from '@inertiajs/inertia-react';
import { IoIosArrowDown } from 'react-icons/io'

export default function NavBar(props) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    const auth = usePage().props.auth.user;


  return (
    <div>
        <nav className="bg-white border-b border-gray-100 fixed w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between">
                    <div className="flex">
                        <div className="shrink-0 flex items-center">
                            <Link href="/">
                                <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                            </Link>
                        </div>
                    </div>

                    <div className="hidden sm:flex sm:items-center sm:ml-6">
                        <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                            <NavLink href={route('home')} active={route().current('home')}>
                                Home
                            </NavLink>

                            <NavLink href={route('blog')} active={route().current('blog')}>
                                Blog
                            </NavLink>
                            
                            <NavLink href={route('about')} active={route().current('about')}>
                                About
                            </NavLink>

                            <NavLink href={route('docs')} active={route().current('docs')}>
                                Docs
                            </NavLink>

                            <NavLink href={route('api')} active={route().current('api')}>
                                API's
                            </NavLink>

                            <NavLink href={route('pricing')} active={route().current('pricing')}>
                                Pricing
                            </NavLink>
                        </div>
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
                    </div>

                    <div className="-mr-2 flex items-center sm:hidden">
                        <button
                            onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                        >
                            <div className='bg-slate-300 p-5 rounded-full'></div>
                            <IoIosArrowDown />
                        </button>
                    </div>
                </div>
            </div>

            <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'}>
                <div className="pt-2 pb-3 space-y-1">
                    <ResponsiveNavLink href={route('dashboard')} active={route().current('dashboard')}>
                        Dashboard
                    </ResponsiveNavLink>
                </div>

                <div className="pt-4 pb-1 border-t border-gray-200">
                    <div className="px-4">
                        <div className="font-medium text-base text-gray-800">
                            {auth?.user?.name}
                        </div>
                        <div className="font-medium text-sm text-gray-500">{auth?.user?.email}</div>
                    </div>

                    <div className="mt-3 space-y-1">
                        <ResponsiveNavLink href={route('profile.edit')}>Profile</ResponsiveNavLink>
                        <ResponsiveNavLink method="post" href={route('logout')} as="button">
                            Log Out
                        </ResponsiveNavLink>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}
