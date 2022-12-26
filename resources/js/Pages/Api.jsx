import All from '@/Layouts/All';
import { Link, Head } from '@inertiajs/inertia-react';
import Mail from './Api/Mail';
import CodeDisplay from './Api/CodeDisplay';


export default function Api({ code, language }) {

    return (
        <All>
            <Head title="Api" />
            <div className='grid gap-7 md:p-9'>
                <p className='text-5xl'>API's</p>
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
