import React from 'react'

export default function Landing() {
  return (
    <div className='grid gap-9'>
        <section className='grid px-3 py-10 md:px-9 gap-10 text-center md:text-left'>
            <div className='grid md:grid-cols-2 gap-3'>
                <div className='md:py-9'>
                    <div className='grid gap-3'>
                        <span className='text-3xl md:text-5xl font-bold'>
                            <b>The future is here with tudev and with you it gets better.</b>
                        </span>
                        <span className='text-lg'>
                            There’s a reason for you to be here. 
                            Whether your a developer or looking for delivering dynamic web experiences with performance and security that scales.
                        </span>
                    </div>
                </div>
                <div className='grid justify-center'>
                    <img src='/images/1.jpg' alt='image' />
                </div>
            </div>
            <div className='flex justify-center gap-3'>
                <button className='p-3 border border-slate-700 rounded-lg hover:bg-slate-500 hover:text-white'>
                    Get Started Now
                </button>
                {/* <button className='p-3 border border-slate-700 rounded-lg hover:bg-slate-500 hover:text-white'>
                    I'm a Developer
                </button> */}
            </div>
        </section>

        <section className='grid px-3 py-10 md:px-9 gap-16 text-center'>
        
            <div>
                <p className='text-2xl font-bold'>It's in our DNA to be the Best.</p>
            </div>
            <div className='grid md:grid-cols-3'>

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

        <section className='grid px-3 py-10 md:px-9 gap-16 text-center'>
        
            <div>
                <p className='text-2xl font-bold'>Start building amazing web experiences.</p>
            </div>
        
            <div></div>
        </section>
    </div>
  )
}
