import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaTimes } from 'react-icons/fa'
import { AuthContext } from '../../../../contexts/AuthProvider';

const BookingModal = ({ treatment, setTreatment, selectedDate, refetch }) => {
    const { name, slots, _id } = treatment;
    const {user} = useContext(AuthContext)
    const handleBookingSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const treatmentName = name;
        const slot = form.slot.value
        const patientName = form.patientName.value;
        const phoneNumber = form.phoneNumber.value;
        const email = form.email.value;
        const booking ={
            bookingDate : format(selectedDate,'PP'),
            treatmentName,
            slot,
            patientName,
            phoneNumber,
            email,
        }
        fetch('http://localhost:4000/bookings',{
            method:"POST",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                setTreatment(null)
                toast.success("Booking Successfull")
                refetch()    
            }
            else{
                toast.error(data.message)
            }
        })
    }
    return (
        <div>
            <input type="checkbox" id={`my-modal-${_id}`} className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <form onSubmit={handleBookingSubmit} className="modal-box grid gap-5">
                    <div className='flex mb-6'>
                        <label htmlFor={`my-modal-${_id}`} className="btn btn-sm btn-circle absolute right-3 top-3 text-xl"><FaTimes></FaTimes></label>
                        <h3 className="text-xl font-semibold">{name}</h3>
                    </div>
                    <input type='text' className="input bg-zinc-200 w-full" value={format(selectedDate, "PP")} readOnly></input>
                    {
                        slots.length > 0 ?
                            <select name='slot' className="select w-full bg-zinc-200">
                                <option disabled selected>{slots[0]}</option>
                                {
                                    slots.map((slot, idx) => <option key={idx}>{slot}</option>)
                                }
                            </select>
                            :
                            <select className="select w-full bg-zinc-200">
                                <option disabled selected>No Time Available</option>
                            </select>
                    }
                    <input name='patientName' type="text" placeholder="Full Name" className="input input-bordered w-full" defaultValue={user?.displayName}/>
                    <input name='phoneNumber' type="text" placeholder="Phone Number" className="input input-bordered w-full"/>
                    <input name='email' type="email" placeholder="Email" className="input input-bordered w-full" defaultValue={user?.email} readOnly />
                    <div className="mt-4">
                        <input type='submit' className="btn w-full bg-accent"></input>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookingModal;