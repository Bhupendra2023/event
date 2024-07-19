'use client'
import React from 'react';
import EventList from '@/components/EventList';

const Events: React.FC = () => {
  return (
    <div className='pt-[2rem] '>
      <div className='bg-white shadow-xl p-5 rounded-md'>
        <h1 className='text-center text-2xl font-semibold mb-2'>Events</h1>
        <EventList />
      </div>
    </div>
  );
};

export default Events;
