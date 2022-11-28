import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useContext } from 'react';
import { AuthContext } from '../../../../contexts/AuthProvider';

const MyAppointment = () => {
    const { user } = useContext(AuthContext)
    const url = `http://localhost:4000/myAppointments?email=${user?.email}`;
    const { data: appointments = [], isLoading } = useQuery({
        queryKey: ['myAppointments', user?.email],
        queryFn: () => fetch(url, { headers: { authorization: `bearer ${localStorage.getItem('token')}` } }).then(res => res.json())

    })
    const today = format(new Date(), 'PP');
    if (isLoading) {
        return (
            <div className='mt-16 flex items-center justify-center'>
                <button className="btn loading">loading</button>
            </div>
        )
    }
    return (
        <div>
            <div className='md:flex justify-between items-center mb-8 mt-14 px-4'>
                <h2 className='text-3xl mb-4 md:mb-0'>My Appointments</h2>
                <p className='border-2 border-accent rounded-lg px-4 py-3 text-xl inline-block'>{today}</p>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Service</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.length > 0 ? 
                                    appointments.map((appointment, idx) =>
                                        <tr className="hover" key={appointment._id}>
                                            <th>{idx + 1}</th>
                                            <td>{appointment.patientName}</td>
                                            <td>{appointment.treatmentName}</td>
                                            <td>{appointment.slot}</td>
                                        </tr>
                                    )

                                :
                                    <></>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;