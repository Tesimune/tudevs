import All from '@/Layouts/All';
import { Link, Head, useForm } from '@inertiajs/inertia-react';
import { FiEdit3 } from 'react-icons/fi'
import { MdOutlineDelete } from 'react-icons/md'


export default function Index({blogs}) {

    
    const {delete: remove} = useForm();

    const deleteBlog = (id) => {
        const response = confirm("you are about to delete the blog");
        if(response) {
            remove(route("blog.delete", id));
        }
    }

    return (
        <All>
            <Head title="Blog" />
            <div className='grid gap-7 md:p-9'>
                <div className='flex justify-between'>
                    <p className='flex items-center font-semibold text-5xl'>Blog</p>
                    <Link href={route('blog.create')} className='flex items-center text-indigo-500 font-semibold text-xl'>+Create</Link>
                </div>
                <section className='grid md:grid-cols-9'>
                    <div className='hidden md:block col-span-2'></div>
                    <div className="grid md:col-span-5 gap-7 p-3 md:p-">
                        {blogs.map(blog => (
                            <div key={blog.id} className='grid gap-3 py-7 relative z-90'>
                                <span className='text-indigo-500 text-3xl'>{blog.title}</span>
                                <p className='grid gap-2 text-lg'>
                                    {blog.content.slice(0, 300)}...
                                </p>
                                <div className='flex justify-between'>
                                    <div className='flex gap-3'>
                                        <Link className='flex items-center text-indigo-500' href={route('blog.edit', blog.id)}>
                                            <FiEdit3 />
                                        </Link>
                                        <button className='flex items-center text-red-500' onClick={() => deleteBlog(blog.id)}>
                                            <MdOutlineDelete />
                                        </button>
                                    </div>
                                    <Link className='flex items-center text-indigo-500' href={route('blog.show', blog.id)}>
                                        Read more
                                    </Link>
                                </div>
                            </div>
                        ))}
                        
                    </div>
                    <div className='hidden md:block col-span-2'></div>
                </section>
            </div>
        </All>
    );
}
