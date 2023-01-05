import React from 'react'
import { render } from "react-dom";
import Highlight, { defaultProps } from "prism-react-renderer";


  const code = 
    `
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Net.Mail;
    using System.Net;

    namespace ConsoleApplication2
    {
        class Program
        {
            static void Main(string[] args)
            {
                var client = new SmtpClient("tudevs.com", 465)
                {
                    Credentials = new NetworkCredential("smtp@tudevs.com", "tudevs@LSuunfyp229N2VVI9y"),
                    EnableSsl = true
                };
                client.Send("from@example.com", "to@example.com", "Hello world", "testbody");
                Console.WriteLine("Sent");
                Console.ReadLine();
            }
        }
    }
    
    `
  ;

export default function CsharpMail() {
  return (

    <div className='grid bg-gray-900 rounded-lg'>
        <div className='flex justify-between text-white font-semibold text-sm p-3'>
            <button>C#</button>
            <button>Copy</button>
        </div>
        <div className='grid overflow-auto rounded-b-lg'>
            <Highlight {...defaultProps} code={code} language="c">
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
