import { useRef, useState } from 'react';
import DangerButton from '@/Components/DangerButton';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Modal from '@/Components/Modal';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/inertia-react';
import { FiEdit3 } from 'react-icons/fi'

export default function Edit({ className }) {
    const [editAppModeal, setEditAppModeal] = useState(false);
    const appnameInput = useRef();

    const {data, setData, errors, post} = useForm({
        appname: "",
        status: true,
    })

    const Edit = () => {
        setEditAppModeal(true);
    };
 
    const editApp = (e) => {
        e.preventDefault();
        post(route("api.store"));
        setEditAppModeal(false);
        
        
    };

    const closeModal = () => {
        setEditAppModeal(false);

        reset();
    };

    return (
        <section className={`space-y-6 ${className}`}>

            <button onClick={Edit} className='text-sky-400'>
                <FiEdit3 />
            </button>

            <Modal show={editAppModeal} onClose={closeModal}>
                <form onSubmit={editApp} className="p-6">
                    <h2 className="text-lg font-medium text-gray-900">
                        Generate New API
                    </h2>

                    <p className="mt-1 text-sm text-gray-600">
                        Enter Application Name Here
                    </p>

                    <div className="grid gap-3 mt-6">
                        <InputLabel for="appname" value="appname" className="sr-only" />
                        <input className='border-2 w-full outline-none p-2 rounded-md' placeholder='Application Name' value={data.appname}
                            onChange={(e) => setData("appname", e.target.value) }/>
                        { errors.appname && <p className='text-red-500'>{ errors.appname }</p>}
                        <div className='flex gap-3'>
                            <input type="checkbox" className='border-2 outline-none p-2 rounded-md' placeholder='Application Name' value={data.status}
                                onChange={(e) => setData("status", e.target.value) }/>
                            { errors.status && <p className='text-red-500'>{ errors.status }</p>}
                            <InputLabel for="status" value="status" className="" />
                        </div>
                    </div>

                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={closeModal}>Cancel</SecondaryButton>

                        <button className="inline-flex items-center px-4 py-2 bg-indigo-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-indigo-500 active:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 ml-3">
                            Edit Account
                        </button>
                    </div>
                </form>
            </Modal>
        </section>
    );
}
