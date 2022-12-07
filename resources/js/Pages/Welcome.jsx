import Contact from '@/Components/Contents/Contact';
import Landing from '@/Components/Contents/Landing';
import All from '@/Layouts/All';
import { Link, Head } from '@inertiajs/inertia-react';

export default function Welcome(props) {
    return (
        <All>
            <Head title="Welcome" />
            <div className="">
                <Landing />
                <Contact />
            </div>
        </All>
    );
}
