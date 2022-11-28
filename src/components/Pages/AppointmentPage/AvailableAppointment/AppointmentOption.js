import React from 'react';

const AppointmentOption = ({ appointmentOption, setTreatment}) => {
    const { name, slots, _id } = appointmentOption
    return (
        <div className="card shadow-xl text-center pb-10">
            <div className="card-body">
                <p className='text-secondary text-xl font-semibold'>{name}</p>
                <p>{slots.length > 0 ? slots[0] : "Try Another Date"}</p>
                <p>{slots.length > 0 ? slots.length > 1 ? `${slots.length} spaces available` : `${slots.length} space available`  : "No space available"}</p>
            </div>
            <div>
                <label className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white font-semibold" htmlFor={`my-modal-${_id}`} onClick={()=>setTreatment(appointmentOption)} disabled={slots.length === 0}>Book Appointment</label>
            </div>
        </div>
    );
};

export default AppointmentOption;