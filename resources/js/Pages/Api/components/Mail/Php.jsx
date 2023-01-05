import React from 'react'
import { render } from "react-dom";
import Highlight, { defaultProps } from "prism-react-renderer";


  const code = 
    `
    // PHPMailer

    $phpmailer = new PHPMailer();
    $phpmailer->isSMTP();
    $phpmailer->Host = 'tudevs.com';
    $phpmailer->SMTPAuth = true;
    $phpmailer->Port = 465;
    $phpmailer->Username = 'smtp@tudevs.com';
    $phpmailer->Password = 'tudevs@LSuunfyp229N2VVI9y';

    // LaravelMailer

    MAIL_MAILER=smtp
    MAIL_HOST=tudevs.com
    MAIL_PORT=465
    MAIL_USERNAME=smtp@tudevs.com
    MAIL_PASSWORD=tudevs@LSuunfyp229N2VVI9y
    MAIL_ENCRYPTION=tls
    MAIL_FROM_ADDRESS="example@email.com"
    MAIL_FROM_NAME="APP_NAME"

    // CodeIgniter already comes with an email library. You can found detailed usage instructions at the CodeIgniter documentation
    //  Put this config to the 'application/config/email.php' file

    $config = Array(
      'protocol' => 'smtp',
      'smtp_host' => 'tudevs.com',
      'smtp_port' => 465,
      'smtp_user' => 'smtp@tudevs.com',
      'smtp_pass' => 'tudevs@LSuunfyp229N2VVI9y',
      'crlf' => "rn',
      'newline' => "rn"
    );

    
    // CakePHP 3.7+ comes with an email library that already supports SMTP:

    TransportFactory::setConfig('tudev', [
      'host' => 'tudevs.com',
      'port' => 465,
      'username' => 'smtp@tudevs.com',
      'password' => 'tudevs@LSuunfyp229N2VVI9y',
      'className' => 'Smtp'
    ]);
    
    `
  ;

export default function PhpMail() {
  return (

    <div className='grid bg-gray-900 rounded-lg'>
        <div className='flex justify-between text-white font-semibold text-sm p-3'>
            <button>Php</button>
            <button>Copy</button>
        </div>
        <div className='grid overflow-auto rounded-b-lg'>
            <Highlight {...defaultProps} code={code} language="php">
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
