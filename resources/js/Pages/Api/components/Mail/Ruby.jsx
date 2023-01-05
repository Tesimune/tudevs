import React from 'react'
import { render } from "react-dom";
import Highlight, { defaultProps } from "prism-react-renderer";


  const code = 
    `
    // Nodemailer is an easy to use module to send e-mails with Node.JS
    // https://nodemailer.com/about/

    var transport = nodemailer.createTransport({
        host: "tudevs.com",
        port: 465,
        auth: {
          user: "smtp@tudevs.com",
          pass: "tudevs@LSuunfyp229N2VVI9y"
        }
      });
    
    `
  ;

export default function RubyMail() {
  return (

    <div className='grid bg-gray-900 rounded-lg'>
        <div className='flex justify-between text-white font-semibold text-sm p-3'>
            <button>Ruby</button>
            <button>Copy</button>
        </div>
        <div className='grid overflow-auto rounded-b-lg'>
            <Highlight {...defaultProps} code={code} language="ruby">
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

  )
}
