import { Link, useForm, usePage } from '@inertiajs/inertia-react';
import { FcGoogle } from 'react-icons/fc'
import { BsGithub } from 'react-icons/bs'

export default function Socials({ className }) {
    const user = usePage().props.auth.user;



    return (
        <section className="p-5">
            <header>
                <h2 className="text-lg font-medium text-gray-900">Social Login</h2>

            </header>
            <div className='mt-5 space-y-4'>
                <p className="mt-1 text-sm text-gray-600">
                    Google Login is set.
                </p>
                <a href={route('setgooglelogin')} className="flex justify-center mt-1 w-full items-center px-4 py-2 bg-slate-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150">
                    <FcGoogle className='flex justify-center h-5 w-5' />
                </a>
                
                <p className="mt-1 text-sm text-gray-600">
                    Github Login is set.
                </p>
                <a href={route('setgithublogin')} className="flex justify-center mt-1 w-full items-center px-4 py-2 bg-slate-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150">
                    <BsGithub className='flex justify-center h-5 w-5' />
                </a>       
            </div>
        </section>
    );
}
