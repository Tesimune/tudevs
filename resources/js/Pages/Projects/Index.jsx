import React from 'react'
import { Link, Head } from '@inertiajs/inertia-react';
import Authenticated from '@/Layouts/AuthenticatedLayout'

export default function Index() {
  return (
    <Authenticated>
      <Head title="Project's" />
      <div className='grid gap-7 md:p-9 p-2'>
          <p className='text-5xl pb-3'>Project's</p>
          <section className='grid md:grid-cols-3'>
            <div className='bg-slate-300 shadow-2xl'>
              <div className='bg-pink-300 h-56 shadow-2xl'></div>
              <div className='grid gap-3 font-bold p-3'>
                <div className='flex justify-between'>
                  <span className='text-xl'>Project title</span>
                  <span className='text-md'>open source</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-xl'>By Tesimune</span>
                  <span className='flex justify-end text-md'>12-19-2022</span>
                </div>
              </div>
            </div>
          </section>
      </div>
    </Authenticated>
  )
}
