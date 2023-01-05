import All from '@/Layouts/All';
import { Link, Head } from '@inertiajs/inertia-react';
import Mail from './Api/Components/Mail';
import CodeDisplay from './Api/Components/CodeDisplay';


export default function Api(props) {

    return (
        <All 
            header={
                <div className='flex justify-between'>
                    <h2 className="flex items-center font-semibold text-xl text-gray-800 leading-tight">API's</h2>
                    <Link href={route('api.index')} className='inline-flex items-center px-4 py-3 bg-indigo-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-indigo-500 active:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150'>
                        API Account's
                    </Link>
                </div>
            }
        >
            <Head title="Api" />
            <div className='grid gap-7 md:p-9'>
                
                <section className='grid md:grid-cols-9'>
                    <div className='hidden md:block col-span-2'></div>
                    <div className='grid md:col-span-5 gap-16 p-3'>
                        {/* <CodeDisplay /> */}
                        <Mail />
                    </div>
                    <div className='hidden md:block col-span-2'></div>
                </section>
            </div>
        </All>
    );
}
