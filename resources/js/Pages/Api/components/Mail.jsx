import React from 'react'
import { render } from "react-dom";
import Highlight, { defaultProps } from "prism-react-renderer";

  // const code = 
  const Javascript = 
    `
      console.log('this is an email template')
    
    `
  ;

  const Python = 
    `
      print('this is an email template')
    
    `
  ;

  const Laravel = 
    `
    MAIL_MAILER=smtp
    MAIL_HOST=tudev.com
    MAIL_PORT=465
    MAIL_USERNAME=example@email.com
    MAIL_PASSWORD=password
    MAIL_ENCRYPTION=tls
    MAIL_FROM_ADDRESS="example@email.com"
    MAIL_FROM_NAME="APP_NAME"
    
    `
  ;




export default function Mail() {
  return (
    <div className='grid gap-7 hidden'>
        <span className='grid justify-start font-bold text-lg'>
            Mailer
        </span>
        <div className='grid bg-gray-900 rounded-lg'>
            <div className='flex justify-between text-white font-semibold text-sm p-3'>
                <button>Javascript</button>
                <button>Copy</button>
            </div>
            <div className='grid overflow-auto rounded-b-lg'>
                <Highlight {...defaultProps} code={Javascript} language="js">
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                    <pre className={className} style={style}>
                    {tokens.map((line, i) => (
                        <div {...getLineProps({ line, key: i })}>
                        {line.map((token, key) => (
                            <span {...getTokenProps({ token, key })} />
                        ))}
                        </div>
                    ))}
                    </pre>
                )}
                </Highlight>
            </div>
        </div>

        <div className='grid bg-gray-900 rounded-lg'>
            <div className='flex justify-between text-white font-semibold text-sm p-3'>
                <button>Python</button>
                <button>Copy</button>
            </div>
            <div className='grid overflow-auto rounded-b-lg'>
                <Highlight {...defaultProps} code={Python} language="py">
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                    <pre className={className} style={style}>
                    {tokens.map((line, i) => (
                        <div {...getLineProps({ line, key: i })}>
                        {line.map((token, key) => (
                            <span {...getTokenProps({ token, key })} />
                        ))}
                        </div>
                    ))}
                    </pre>
                )}
                </Highlight>
            </div>
        </div>

        <div className='grid bg-gray-900 rounded-lg'>
            <div className='flex justify-between text-white font-semibold text-sm p-3'>
                <button>Laravel</button>
                <button>Copy</button>
            </div>
            <div className='grid overflow-auto rounded-b-lg'>
                <Highlight {...defaultProps} code={Laravel} language="Laravel">
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                    <pre className={className} style={style}>
                    {tokens.map((line, i) => (
                        <div {...getLineProps({ line, key: i })}>
                        {line.map((token, key) => (
                            <span {...getTokenProps({ token, key })} />
                        ))}
                        </div>
                    ))}
                    </pre>
                )}
                </Highlight>
            </div>
        </div>


    </div>
  )
}
