import React from 'react'
import { render } from "react-dom";
import Highlight, { defaultProps } from "prism-react-renderer";

  const exampleCode = 
    `
      import React from 'react'

      export default function CodeDisplay() {
        return (
          <div>CodeDisplay</div>
        )
      }
    
    `
  ;




export default function CodeDisplay() {
  return (
    <div className='grid bg-gray-900 rounded-lg'>
      <div className='flex justify-between text-white font-semibold text-sm p-3'>
        <button>Python</button>
        <button>Copy</button>
      </div>
      <div className='grid overflow-auto rounded-b-lg'>
        <Highlight {...defaultProps} code={exampleCode} language="jsx">
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
