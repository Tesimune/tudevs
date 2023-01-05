import React from 'react'
import { render } from "react-dom";
import Highlight, { defaultProps } from "prism-react-renderer";


  const code = 
    `
    curl --ssl-reqd \
    --url 'tudevs.com:465' \
    --user 'smtp@tudevs.com:tudevs@LSuunfyp229N2VVI9y' \
    --mail-from from@example.com \
    --mail-rcpt to@example.com \
    --upload-file - <<EOF
    From: Magic Elves <from@example.com>
    To: Tudev Inbox <to@example.com>
    Subject: You are awesome!
    Content-Type: multipart/alternative; boundary="boundary-string"

    --boundary-string
    Content-Type: text/plain; charset="utf-8"
    Content-Transfer-Encoding: quoted-printable
    Content-Disposition: inline

    Congrats for sending test email with Tudev!

    Inspect it using the tabs above and learn how this email can be improved.
    Now send your email using our SMTP server and integration of your choice!

    Good luck! Hope it works.

    --boundary-string
    Content-Type: text/html; charset="utf-8"
    Content-Transfer-Encoding: quoted-printable
    Content-Disposition: inline

    <!doctype html>
    <html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    </head>
    <body style="font-family: sans-serif;">
        <div style="display: block; margin: auto; max-width: 600px;" class="main">
        <h1 style="font-size: 18px; font-weight: bold; margin-top: 20px">Congrats for sending test email with Tudev!</h1>
        <p>Inspect it using the tabs you see above and learn how this email can be improved.</p>
        <img alt="Inspect with Tabs" src="https://assets-examples.Tudev.com/logo.png" style="width: 100%;">
        <p>Now send your email using our fake SMTP server and integration of your choice!</p>
        <p>Good luck! Hope it works.</p>
        </div>
        <!-- Example of invalid for email html/css, will be detected by Tudev: -->
        <style>
        .main { background-color: white; }
        a:hover { border-left-width: 1em; min-height: 2em; }
        </style>
    </body>
    </html>

    --boundary-string--
    EOF
    
    `
  ;

export default function URLMail() {
  return (

    <div className='grid bg-gray-900 rounded-lg'>
        <div className='flex justify-between text-white font-semibold text-sm p-3'>
            <button>cURL</button>
            <button>Copy</button>
        </div>
        <div className='grid overflow-auto rounded-b-lg'>
            <Highlight {...defaultProps} code={code} language="html">
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
