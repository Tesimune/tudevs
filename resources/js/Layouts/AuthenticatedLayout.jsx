import React from 'react'
import NavBar from './Components/NavBar';

export default function Authenticated({ auth, header, children }) {

    return (
        <div>

            <NavBar />
            <div className="min-h-screen bg-gray-50 pt-20">

                {header && (
                    <header className="shadow">
                        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
                    </header>
                )}

                <main className='p-2 md:p-5'>{children}</main>
            </div>

        </div>
    );
}
