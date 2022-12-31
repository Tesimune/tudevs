import React from 'react'
import { Link, Head } from '@inertiajs/inertia-react';
import Authenticated from '@/Layouts/AuthenticatedLayout'
import Create from './Create'
import Edit from './Edit'
import Delete from './Delete';

export default function index({apis}) {
  return (
    <Authenticated>
        <Head title="Api" />
        <div className='grid gap-7 md:p-9'>
            <div className='flex justify-between'>
                <p className='flex items-center font-semibold text-2xl'>API Keys</p>
                <Create />
            </div>
            <div className="overflow-x-auto min-h-screen">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead
                        className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            Application
                        </th>
                        {/* <th scope="col" className="py-3 px-6">
                            Created
                        </th> */}
                        <th scope="col" className="py-3 px-6">
                            Public_Key
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Secret_Key
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Status
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Action
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                        {apis.map(api => (
                            <tr className="bg-white border-t">
                                <th scope="row"
                                    className="py-4 px-6 font-medium text-gray-900 max-w-[250px]">
                                    {api.appname}
                                </th>
                                {/* <td className="py-4 px-6">
                                    {new Date(api.created_at).toDateString()}
                                </td> */}
                                <td className="py-4 px-6">
                                    {api.public_auth.slice(0, 15)}...
                                </td>
                                <td className="py-4 px-6">
                                    {api.private_auth.slice(0, 15)}...
                                </td>
                                <td className="py-4 px-6">
                                    active
                                </td>
                                <td className="py-4 px-6 flex gap-3 text-base">
                                    <Edit />
                                    <Delete />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </Authenticated>
  )
}
