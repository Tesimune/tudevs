import React from 'react'
import URLMail from './Mail/cURL'
import CsharpMail from './Mail/Csharp'
import NodeMail from './Mail/Node'
import PhpMail from './Mail/Php'
import PythonMail from './Mail/Python'
import JavaMail from './Mail/Java'
import RubyMail from './Mail/Ruby'
import PerlMail from './Mail/Perl'


export default function Mail() {
  return (
    <div className='grid gap-7'>
        <span className='grid justify-start font-bold text-lg'>
            Mailer
        </span>

        <URLMail />
        <NodeMail />
        <PhpMail />
        <PythonMail />
        <JavaMail />
        <RubyMail />
        <CsharpMail />
        <PerlMail />

    </div>
  )
}
