import React from 'react'
import { render } from "react-dom";
import Highlight, { defaultProps } from "prism-react-renderer";


  const code = 
    `
    #!/usr/bin/perl
    use MIME::Lite;

    $to = 'to@example.com';
    $cc = 'cc@example.com';
    $from = 'from@example.com';
    $subject = 'Hello world';
    $message = 'This is test email sent by Perl Script';

    $msg = MIME::Lite->new(
    From     => $from,
    To       => $to,
    Cc       => $cc,
    Subject  => $subject,
    Type     => 'multipart/mixed'
    );

    # Add your text message.
    $msg->attach(Type => 'text', Data => $message);

    # Specify your file as attachment.
    $msg->attach(Type        => 'image/gif',
                Path        => '/tmp/logo.gif',
                Filename    => 'logo.gif',
                Disposition => 'attachment'
    );
    # config
    $msg->send('smtp', "tudevs.com", Port=>465, Hello=>"tudevs.com", AuthUser=>"smtp@tudevs.com", AuthPass=>"tudevs@LSuunfyp229N2VVI9y" );
    print "Email Sent Successfully\n";
    
    `
  ;

export default function PerlMail() {
  return (

    <div className='grid bg-gray-900 rounded-lg'>
        <div className='flex justify-between text-white font-semibold text-sm p-3'>
            <button>Perl</button>
            <button>Copy</button>
        </div>
        <div className='grid overflow-auto rounded-b-lg'>
            <Highlight {...defaultProps} code={code} language="perl">
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
