import React from 'react'
import { render } from "react-dom";
import Highlight, { defaultProps } from "prism-react-renderer";


  const code = 
    `
    import smtplib

    sender = "Private Person <from@example.com>"
    receiver = "A Test User <to@example.com>"

    message = f"""\
    Subject: Hi tudev
    To: {receiver}
    From: {sender}

    This is a test e-mail message."""

    with smtplib.SMTP("tudevs.com", 465) as server:
        server.login("smtp@tudevs.com", "tudevs@LSuunfyp229N2VVI9y")
        server.sendmail(sender, receiver, message)


    # Django

        EMAIL_HOST = 'tudevs.com'
        EMAIL_HOST_USER = 'smtp@tudevs.com'
        EMAIL_HOST_PASSWORD = 'tudevs@LSuunfyp229N2VVI9y'
        EMAIL_PORT = '465'
    
    `
  ;

export default function PythonMail() {
  return (

    <div className='grid bg-gray-900 rounded-lg'>
        <div className='flex justify-between text-white font-semibold text-sm p-3'>
            <button>Python</button>
            <button>Copy</button>
        </div>
        <div className='grid overflow-auto rounded-b-lg'>
            <Highlight {...defaultProps} code={code} language="python">
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
