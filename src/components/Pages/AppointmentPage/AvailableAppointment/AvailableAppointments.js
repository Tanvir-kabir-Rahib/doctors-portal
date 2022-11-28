import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import AppointmentOption from './AppointmentOption';
import BookingModal from './BookingModal';

const AvailableAppointments = ({ selectedDate }) => {
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP')
    const { data: appointmentOptions = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: () => fetch(`http://localhost:4000/appointmentOptions?date=${date}`).then(res => res.json())
    })

    if (isLoading) {
        return (
            <div className='mt-16 flex items-center justify-center'>
                <button className="btn loading">loading</button>
            </div>
        )

    }

    return (
        <div className='mt-32'>
            <div className='text-center px-10'>
                <h4 className='text-secondary text-2xl mb-3'>Available Services on {format(selectedDate, 'PP')}</h4>
                <p className='text-slate-400 text-xl'>Please select a service.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 mx-6 md:mx-12 lg:mx-0 '>
                {
                    appointmentOptions.map(appointmentOption => <AppointmentOption key={appointmentOption._id} appointmentOption={appointmentOption} setTreatment={setTreatment}></AppointmentOption>)
                }
            </div>
            {
                treatment &&
                <BookingModal refetch={refetch} treatment={treatment} setTreatment={setTreatment} selectedDate={selectedDate}></BookingModal>
            }
        </div>
    );
};

export default AvailableAppointments;