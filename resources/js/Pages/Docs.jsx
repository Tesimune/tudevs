import All from '@/Layouts/All';
import { Link, Head } from '@inertiajs/inertia-react';

export default function Docs(props) {
    return (
        <All 
            header={
                <div className='flex justify-between'>
                    <h2 className="flex items-center font-semibold text-xl text-gray-800 leading-tight">Document's</h2>
                </div>
            }
        >
            <Head title="Docs" />
            <div className='grid gap-7 md:p-9'>
                <p className='text-5xl'></p>
                <section className='grid md:grid-cols-9'>
                    <div className='hidden md:block col-span-2'></div>
                    <div className='grid md:col-span-5 gap-7 p-3'>
                        <span className='grid justify-center text-lg'>
                            Document's Pending
                        </span>
                    </div>
                    <div className='hidden md:block col-span-2'></div>
                </section>
            </div>
        </All>
    );
}
