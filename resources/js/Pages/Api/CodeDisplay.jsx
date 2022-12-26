import React from 'react'
import { render } from "react-dom";
import Highlight, { defaultProps } from "prism-react-renderer";
import { HiOutlineClipboardList, HiOutlineClipboardCheck } from 'react-icons/hi'

  // const code = 
  const exampleCode = 
    `
      // no api available yet
    
    `
  ;

  const handleClick = () => {
    
    navigator.clipboard.writeText(exampleCode)
  }



export default function CodeDisplay() {
  return (
    <div className='grid gap-7'>
      <span className='grid justify-start font-bold text-lg'>
        No API
      </span>
      <div className='grid bg-gray-900 rounded-lg'>
        <div className='flex justify-between text-white font-semibold text-sm p-3'>
          <button>tudev</button>
          <div>
            <button onClick={handleClick} className=' flex items-center gap-2'>
              <div className='flex items-center gap-2'>
                <span>Copy</span>
                <HiOutlineClipboardList />
              </div>
              <div className='hidden items-center gap-2'>
                <span>Copied</span>
                <HiOutlineClipboardCheck />
              </div>
            </button>
          </div>
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
    </div>
  )
}
