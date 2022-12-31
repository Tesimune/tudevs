import { useRef, useState } from 'react';
import DangerButton from '@/Components/DangerButton';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Modal from '@/Components/Modal';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/inertia-react';
import { RiDeleteBin2Line } from 'react-icons/ri'

export default function Delete({ className }) {
    const [editAppModeal, setEditAppModeal] = useState(false);
    const passwordInput = useRef();

    const {data, setData, errors, post} = useForm({
        password: "",
        content: "",
        status: true,
    })

    const Edit = () => {
        setEditAppModeal(true);
    };
 
    const editApp = (e) => {
        e.preventDefault();
        setEditAppModeal(false);
        
        
    };

    const closeModal = () => {
        setEditAppModeal(false);

        reset();
    };

    return (
        <section className={`space-y-6 ${className}`}>

            <button onClick={Edit} className="text-red-400">
                <RiDeleteBin2Line />
            </button>

            <Modal show={editAppModeal} onClose={closeModal}>
                <form onSubmit={editApp} className="p-6">
                    <h2 className="text-lg font-medium text-red-500">
                        Delete API
                    </h2>

                    <p className="mt-1 text-sm text-gray-600">
                        Are you sure you want to delete this api, please enter password to confirm
                    </p>

                    <div className="mt-6">
                        <InputLabel for="password" value="password" className="sr-only" />
                        <input type="password" className='border-2 w-full outline-none p-2 rounded-md' placeholder='password' value={data.password}
                            onChange={(e) => setData("password", e.target.value) }/>
                        { errors.password && <p className='text-red-500'>{ errors.password }</p>}
                    </div>

                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={closeModal}>Cancel</SecondaryButton>

                        <button className="inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150 ml-3">
                            Delete
                        </button>
                    </div>
                </form>
            </Modal>
        </section>
    );
}
