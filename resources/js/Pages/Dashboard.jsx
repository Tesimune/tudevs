import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link, Head, usePage } from '@inertiajs/inertia-react';
import Admin from './Dashboard/Admin/Admin';
import Dev from './Dashboard/Developer/Dev';
import User from './Dashboard/User/User';

export default function Dashboard(props) {
    const auth = usePage().props.auth.user;

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

        <div>
        
            {auth?.user?.type == 'admin' ? ( 
                <Admin />
            ):(
                <>
                    {auth?.user?.type == 'dev' ? (
                        <Dev />
                    ):(
                        <User />
                    )}
                </>
            )}

        </div>    
        </AuthenticatedLayout>
    );
}
