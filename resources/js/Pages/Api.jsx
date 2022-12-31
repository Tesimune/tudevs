import All from '@/Layouts/All';
import { Link, Head } from '@inertiajs/inertia-react';
import Mail from './Api/components/Mail';
import CodeDisplay from './Api/components/CodeDisplay';


export default function Api({ code, language }) {

    return (
        <All>
            <Head title="Api" />
            <div className='grid gap-7 md:p-9'>
                <div className='flex justify-between'>
                    <p className='flex items-center font-semibold text-2xl md:text-5xl'>API's</p>
                    <Link href={route('api.index')} className='inline-flex items-center px-4 py-3 bg-indigo-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-indigo-500 active:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150'>
                        API Account's
                    </Link>
                </div>
                <section className='grid md:grid-cols-9'>
                    <div className='hidden md:block col-span-2'></div>
                    <div className='grid md:col-span-5 gap-16 p-3'>
                        <CodeDisplay />
                        <Mail />
                    </div>
                    <div className='hidden md:block col-span-2'></div>
                </section>
            </div>
        </All>
    );
}
