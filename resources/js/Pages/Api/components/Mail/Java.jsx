import React from 'react'
import { render } from "react-dom";
import Highlight, { defaultProps } from "prism-react-renderer";


  const code = 
    `
    play.mailer {
        host = "tudevs.com"
        port = 465
        ssl = no
        tls = yes
        user = "smtp@tudevs.com"
        password = "tudevs@LSuunfyp229N2VVI9y"
      }
    
    `
  ;

export default function JavaMail() {
  return (

    <div className='grid bg-gray-900 rounded-lg'>
        <div className='flex justify-between text-white font-semibold text-sm p-3'>
            <button>Java</button>
            <button>Copy</button>
        </div>
        <div className='grid overflow-auto rounded-b-lg'>
            <Highlight {...defaultProps} code={code} language="java">
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
