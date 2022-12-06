import All from '@/Layouts/All';
import { Link, Head } from '@inertiajs/inertia-react';

export default function Index(props) {
    return (
        <All>
            <Head title="Blog" />
            <section className='grid md:grid-cols-9'>
                <div className='hidden md:block col-span-2'></div>
                <div className="grid md:col-span-5 gap-7 p-3 md:p-">
                    <p className='text-5xl'>Blogs</p>
                    <a href='#/' className='grid gap-2'>
                        <span className='text-indigo-500 text-3xl'>Introducing the new tudev</span>
                        <p className='text-lg'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga eaque dicta quia architecto. Inventore animi, illo doloremque consectetur reprehenderit ex commodi ad vitae sit excepturi aliquid alias deleniti culpa aliquam perspiciatis voluptatum odio perferendis quod dicta dolor, velit voluptatem aperiam? Exercitationem sunt repellendus, mollitia nesciunt enim maxime quas atque omnis.
                        </p>
                    </a>
                </div>
                <div className='hidden md:block col-span-2'></div>
            </section>
        </All>
    );
}
