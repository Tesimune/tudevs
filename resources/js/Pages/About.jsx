import All from '@/Layouts/All';
import { Link, Head } from '@inertiajs/inertia-react';

export default function About(props) {
    return (
        <All>
            <Head title="About" />
            <div className='grid gap-7 md:p-9'>
                <p className='text-5xl'>About</p>
                <section className='grid md:grid-cols-9'>
                    <div className='hidden md:block col-span-2'></div>
                    <div className='grid md:col-span-5 gap-7 p-3'>
                        <span className='text-3xl md:text-5xl font-bold'>
                            <b>The future is here with tudevs and with you it gets better.</b>
                        </span>
                        <span className='text-lg'>
                            There’s a reason for you to be here. 
                            Whether your’re a developer or looking for delivering dynamic web experiences with performance and security that scales.
                        </span>
                    </div>
                    <div className='hidden md:block col-span-2'></div>
                </section>
            </div>
        </All>
    );
}
