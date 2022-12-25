import React from 'react'
import { Link, Head, useForm } from '@inertiajs/inertia-react';
import Authenticated from '@/Layouts/AuthenticatedLayout'

function Edit({blog}) {

    const {data, setData, errors, put} = useForm({
        title: blog.title,
        content: blog.content,
        publish: false,
    })

    const submit = (e) => {
        e.preventDefault();
        put(route("blog.update", blog.id));
    }

  return (
    <Authenticated>
        <div>
            <form onSubmit={submit} className='grid gap-3 pt-14 px-1 md:px-72'>
                <input className='border-b-2 w-full outline-none' placeholder='Header' value={data.title}
                    onChange={(e) => setData("title", e.target.value) }/>
                { errors.title && <p className='text-red-500'>{ errors.title }</p>}
                <textarea className='h-96 w-full outline-none' value={data.content}
                    onChange={(e) => setData("content", e.target.value) } placeholder='Blog Content' />
                { errors.content && <p className='text-red-500'>{ errors.content }</p>}
                <div className='flex justify-end'>
                    <button className='bg-slate-800 text-white p-3 rounded-lg'>Update</button>
                </div>
            </form>
        </div>
    </Authenticated>
  )
}

export default Edit