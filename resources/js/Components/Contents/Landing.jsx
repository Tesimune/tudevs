import React from 'react'
import { AiOutlineStar, AiOutlineFolderOpen } from 'react-icons/ai'
import { MdOutlineCreateNewFolder } from 'react-icons/md'

export default function Landing() {
  return (
    <div className='grid gap-16'>
        <section className='grid py-9 px-3 md:px-9 gap-10 text-center md:text-left'>
            <div className='grid md:grid-cols-2 gap-9'>
                <div className='md:py-9'>
                    <div className='grid gap-3'>
                        <span className='text-3xl md:text-5xl font-bold'>
                            <b>The future is here with tudev and with you it gets better.</b>
                        </span>
                        <span className='text-lg'>
                            There’s a reason for you to be here. 
                            Whether your’re a developer or looking for delivering dynamic web experiences with performance and security that scales.
                        </span>
                    </div>
                </div>
                <div className='grid justify-center'>
                    <img src='/images/1.jpg' alt='image' />
                </div>
            </div>
            <div className='flex justify-center gap-3 md:gap-9'>
                <button className='text-white items-center gap-3 rounded-lg py-3 px-5 bg-black hover:bg-transparent hover:text-yellow-900 hover:ring-2 ring-black'>
                    Get Started Now
                </button>
                <button className='text-lg font-semibold hover:text-indigo-900'>
                    I’m a Developer
                </button>
            </div>
        </section>

        <section className='grid px-3 py-16 md:px-9 gap-16 text-center border-b-2'>
        
            <div>
                <p className='text-2xl font-bold'>It's in our DNA to be the Best.</p>
            </div>
            <div className='grid md:grid-cols-3 gap-16'>

                <div className='grid gap-1 text-center'>
                    <span className='text-5xl font-bold'>50%</span>
                    <span className='text-3xl font-bold'>Faster Page Load Speed</span>
                    <span className='text-3xl font-bold'>vs. competitors</span>
                </div>

                <div className='grid gap-1 text-center'>
                    <span className='text-5xl font-bold'>20X</span>
                    <span className='text-3xl font-bold'>Faster Build Times</span>
                    <span className='text-3xl font-bold'>vs. competitors</span>
                </div>

                <div className='grid gap-1 text-center'>
                    <span className='text-5xl font-bold'>5X</span>
                    <span className='text-3xl font-bold'>SEO Boost</span>
                    <span className='text-3xl font-bold'>vs. competitors</span>
                </div>

            </div>
        
        </section>

        <section className='grid px-3 py-16 md:px-9 gap-16 text-center border-b-2'>
        
            <div>
                <p className='text-2xl font-bold text-center'>Start building amazing experiences.</p>
            </div>
        
            <div className='grid md:grid-cols-3 gap-16'>

                <div className='grid justify-center gap-1'>
                    <span className='flex justify-center'>
                        <MdOutlineCreateNewFolder className='h-16 w-16' />
                    </span>
                    <span className='text-3xl font-bold text-center'>Create A Project</span>
                    <span className='text-xl font-bold text-center'>Create a Project and Share with Us, we'll love to here about it</span>
                </div>

                <div className='grid justify-center gap-1'>
                    <span className='flex justify-center'>
                        <AiOutlineFolderOpen className='h-16 w-16' />
                    </span>
                    <span className='text-3xl font-bold text-center'>Build Public</span>
                    <span className='text-xl font-bold text-center'>Build Open Source Projects and build Public with contributor's</span>
                </div>

                <div className='grid justify-center gap-1'>
                    <span className='flex justify-center'>
                        <AiOutlineStar className='h-16 w-16' />
                    </span>
                    <span className='text-3xl font-bold text-center'>Get Project Reviews</span>
                    <span className='text-xl font-bold text-center'>Get Your Project Reviewed, to build better.</span>
                </div>

            </div>

        </section>
    </div>
  )
}
