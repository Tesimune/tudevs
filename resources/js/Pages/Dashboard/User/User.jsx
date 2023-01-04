import React from 'react'

export default function User() {
  return (
    <div className="py-5">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
              <p className="p-6 text-gray-900">Applications</p>
              <div className='p-3'>
                  <span className='flex justify-center'>No Applications Yet from user</span>
              </div>
          </div>
      </div>
    </div>
  )
}
