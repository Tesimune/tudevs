import React from 'react'
import { Link, Head } from '@inertiajs/inertia-react';
import Authenticated from '@/Layouts/AuthenticatedLayout'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { AiFillGithub } from 'react-icons/ai'

export default function Index() {
  return (
    <Authenticated
      header={
          <div className='flex justify-between'>
              <h2 className="flex items-center font-semibold text-xl text-gray-800 leading-tight">Project's</h2>
          </div>
      }
      >
      <Head title="Project's" />
      <div className='grid gap-7 md:p-9 p-2'>
          <section className='grid md:grid-cols-3'>
            <div className='bg-slate-900 grid gap-3 shadow-2xl rounded-lg'>
              <div className='h-56 shadow-2xl'>
                <img src='/images/as.png' alt='as' />
              </div>
              <div className='flex justify-end gap-2 py-5 px-3 text-white'>
                <a href=''>
                  <AiFillGithub className='h-7 w-7' />
                </a>
                <a href=''>
                  <HiOutlineExternalLink className='h-7 w-7' />
                </a>
              </div>
            </div>
          </section>
      </div>
    </Authenticated>
  )
}
