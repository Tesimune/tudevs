import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react';

export default function Dashboard(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                        <div className='flex justify-between'>
                            <h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>
                            <div className='flex gap-2 items-center font-semibold text-md text-gray-800 leading-tight'>
                                <input type='checkbox' className='flex justify-center items-center' />
                                <span className='flex justify-center items-center'>I'm a Developer</span>
                            </div>
                        </div>
                    }
        >
            <Head title="Dashboard" />

            <div className="py-5">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <p className="p-6 text-gray-900">Applications</p>
                        <div className='p-3'>
                            <span className='flex justify-center'>No Applications Yet</span>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
