import { useRef, useState } from 'react';
import DangerButton from '@/Components/DangerButton';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Modal from '@/Components/Modal';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/inertia-react';

export default function Create({ className }) {
    const [createAppModeal, setCreateAppModeal] = useState(false);
    const appnameInput = useRef();

    const {data, setData, errors, post} = useForm({
        appname: "",
        content: "",
        status: true,
    })

    const Create = () => {
        setCreateAppModeal(true);
    };
 
    const createApp = (e) => {
        e.preventDefault();
        post(route("api.store"));
        console.log('api generated')        
        
    };

    const closeModal = () => {
        setCreateAppModeal(false);

        reset();
    };

    return (
        <section className={`space-y-6 ${className}`}>

            <button onClick={Create} className='inline-flex items-center px-4 py-3 bg-indigo-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-indigo-500 active:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150'>Create New</button>

            <Modal show={createAppModeal} onClose={closeModal}>
                <form onSubmit={createApp} className="p-6">
                    <h2 className="text-lg font-medium text-gray-900">
                        Generate New API
                    </h2>

                    <p className="mt-1 text-sm text-gray-600">
                        Enter Application Name Here
                    </p>

                    <div className="mt-6">
                        <InputLabel for="appname" value="appname" className="sr-only" />
                        <input className='border-2 w-full outline-none p-2 rounded-md' placeholder='Application Name' value={data.appname}
                            onChange={(e) => setData("appname", e.target.value) }/>
                        { errors.appname && <p className='text-red-500'>{ errors.appname }</p>}
                    </div>

                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={closeModal}>Cancel</SecondaryButton>

                        <button className="inline-flex items-center px-4 py-2 bg-indigo-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-indigo-500 active:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 ml-3">
                            Create Account
                        </button>
                    </div>
                </form>
            </Modal>
        </section>
    );
}
