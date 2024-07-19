'use client'
import React from 'react';
import EventForm from '@/components/EventForm';

const AddEvent: React.FC = () => {
  return (
    <div className='pt-[2rem] '>
      <div className='bg-white shadow-xl p-5 rounded-md'>
        <h1 className='text-center text-2xl font-semibold mb-2'>Add Event</h1>
        <EventForm />
      </div>
    </div>
  );
};

export default AddEvent;
