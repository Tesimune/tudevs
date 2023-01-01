import React from 'react'
import { FcIdea } from 'react-icons/fc'
import { GrDeploy } from 'react-icons/gr'

export default function Contact() {
  return (
    <div className='grid gap-9'>
        <section className='grid px-3 py-10 md:px-9 gap-10 text-center md:text-left'>
            <div className='grid md:grid-cols-2 gap-3'>
                <div className='md:py-9'>
                    <div className='grid gap-3'>
                        <span className='text-indigo-900 text-xl'>Bringing Ideas to Reality</span>
                        <span className='text-3xl md:text-5xl font-bold'>
                            <b>Have Any Project Plan In Your Mind?</b>
                        </span>
                        <span className='text-lg'>
                            There’s a reason for you to be here. 
                            Whether your’re a developer or looking for delivering dynamic web experiences with performance and security that scales.
                        </span>
                        <div className='grid gap-5'>
                            <div className='flex gap-5'>
                                <FcIdea className='flex text-white h-9 w-9 items-center'/>
                                <div className='grid font-bold items-center text-left'>
                                    <span className='text-indigo-900 flex text-xs'>Ideas</span>
                                    <span className='text-indigo-900 flex text-md'>All Ideas were ones Dreams</span>
                                </div>
                            </div>
                            <div className='flex gap-5'>
                                <GrDeploy className='flex text-white h-9 w-9 items-center'/>
                                <div className='grid font-bold items-center text-left'>
                                    <span className='text-indigo-900 flex text-xs'>Deploy</span>
                                    <span className='text-indigo-900 flex text-md'>Deploy your Project and Join the tudevs Project review</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='p-3 md:p-9 pt-9 shadow-xl'>
                    <form className='grid items-center gap-3'>
                        <label className='font-bold text-3xl py-4'>Start a Project</label>
                        <input type='email' className='' placeholder='Email' required />
                        <input type='text' className='' placeholder='Name' required />
                        <input type='text' className='' placeholder='Project' required />
                        <textarea className='' placeholder='Description' required />
                        <div className='flex justify-end'>
                            <button className='p-3 border border-slate-700 rounded-lg hover:bg-slate-900 hover:text-white'>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            
        </section>
    </div>
  )
}
