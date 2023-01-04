import All from '@/Layouts/All';
import { Link, Head } from '@inertiajs/inertia-react';

export default function Pricing(props) {
    return (
        <All 
            header={
                <div className='flex justify-between'>
                    <h2 className="flex items-center font-semibold text-xl text-gray-800 leading-tight">Pricing's</h2>
                </div>
            }
        >
            <Head title="Pricing" />
            <div className='grid gap-7 md:p-9'>
                <section className='grid md:grid-cols-9'>
                    <div className='hidden md:block col-span-2'></div>
                    <div className='grid md:col-span-5 gap-7 p-3'>
                        <span className='grid justify-center text-lg'>
                           No Active Pricing's Yet
                        </span>
                    </div>
                    <div className='hidden md:block col-span-2'></div>
                </section>
            </div>
        </All>
    );
}
