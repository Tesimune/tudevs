import All from '@/Layouts/All';
import { Link, Head } from '@inertiajs/inertia-react';

export default function Api(props) {
    return (
        <All>
            <Head title="Api" />
            <div className='grid gap-7 md:p-9'>
                <p className='text-5xl'>API's</p>
                <section className='grid md:grid-cols-9'>
                    <div className='hidden md:block col-span-2'></div>
                    <div className='grid md:col-span-5 gap-7 p-3'>
                        <span className='grid justify-center text-lg'>
                           No Active API's Yet
                        </span>
                    </div>
                    <div className='hidden md:block col-span-2'></div>
                </section>
            </div>
        </All>
    );
}
