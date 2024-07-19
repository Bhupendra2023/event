'use client'
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import EventForm from '../../../components/EventForm';
import { useSearchParams } from 'next/navigation';

const EditEvent: React.FC = () => {
  const searchParam = useSearchParams();
  const id = searchParam.get('id')
  const event = useSelector((state: RootState) =>
    state.events.events.find(event => event.id === Number(id))
  );

  return (
    <div className='pt-[2rem] '>
      <div className='bg-white shadow-xl p-5 rounded-md'>
        <h1 className='text-center text-2xl font-semibold mb-2'>Edit Event</h1>
        {event ? <EventForm existingEvent={event} /> : <p>Event not found</p>}
      </div>
    </div>
  );
};

export default EditEvent;
