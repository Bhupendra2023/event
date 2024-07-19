import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useForm, Controller, useWatch } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { addEvent, editEvent } from '../redux/eventsSlice';
import { TextField, MenuItem, Button } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useRouter } from 'next/navigation';
import { Event } from '../types/Event';
import { validationSchema } from '@/types/validationSchema';

interface EventFormProps {
  existingEvent?: Event;
}

const EventForm: React.FC<EventFormProps> = ({ existingEvent }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { control, handleSubmit, reset, formState: { errors } } = useForm<Event>({
    defaultValues: existingEvent || {
      id: 0,
      name: '',
      type: '',
      startDate: null,
      endDate: null,
      description: '',
      handledBy: '',
      organisation: '',
      subEvents: 0,
    },
    resolver: yupResolver(validationSchema),
    mode: 'onBlur'
  });

  const startDate = useWatch({ control, name: 'startDate' });

  useEffect(() => {
    if (existingEvent) {
      reset(existingEvent);
    }
  }, [existingEvent, reset]);

  const onSubmit = (data: Event) => {
    if (existingEvent) {
      dispatch(editEvent(data));
    } else {
      dispatch(addEvent(data));
    }
    reset({
      id: 0,
      name: '',
      type: '',
      startDate: null,
      endDate: null,
      description: '',
      handledBy: '',
      organisation: '',
      subEvents: 0,
    });
    router.push('/events');
  };

  console.log(errors, "SDflkdfjl")
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='p-4'>
      <div className='flex  flex-col gap-4'>
        <div className='flex flex-col  md:flex-row w-full gap-4'>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <TextField
                label="Event Name"
                className='w-full '
                {...field}
                error={!!errors.name}
                helperText={errors.name?.message}
              />
            )}
          />
          <Controller
            name="type"
            control={control}
            render={({ field }) => (
              <TextField
                select
                className='w-full'
                label="Event Type"
                {...field}
                error={!!errors.type}
                helperText={errors.type?.message}
              >
                <MenuItem value="sports">Sports</MenuItem>
                <MenuItem value="music">Music</MenuItem>
                <MenuItem value="general">General</MenuItem>
                <MenuItem value="children">Children</MenuItem>
                <MenuItem value="school">School</MenuItem>
              </TextField>
            )}
          />
        </div>
        <div className='flex flex-col  md:flex-row w-full gap-4'>
          <div className='w-full'>
            <Controller
              name="startDate"
              control={control}
              render={({ field }) => (
                <DatePicker
                  label="Event Start Date"
                  value={field.value}
                  className='w-full'
                  onChange={(date) => field.onChange(date)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      error={!!errors.startDate}
                      helperText={errors.startDate?.message}
                    />
                  )}
                />
              )}
            />
            {!!errors.startDate && <span className='text-xs text-[#d32f2f] p-[3px_14px_0px]'> {errors.startDate?.message}</span>}
          </div>
          <div className='w-full'>
            <Controller
              name="endDate"
              control={control}
              render={({ field }) => (
                <DatePicker
                  label="Event End Date"
                  value={field.value}
                  className='w-full'
                  disabled={!startDate}
                  onChange={(date) => field.onChange(date)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      error={!!errors.endDate}
                      helperText={errors.endDate?.message}
                    />
                  )}
                />
              )}
            />
            {!!errors.endDate && <span className='text-xs text-[#d32f2f] p-[3px_14px_0px]'> {errors.endDate?.message}</span>}
          </div>
        </div>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <TextField
              label="Event Description"
              {...field}
              error={!!errors.description}
              helperText={errors.description?.message}
            />
          )}
        />
        <Controller
          name="handledBy"
          control={control}
          render={({ field }) => (
            <TextField
              label="Event Handled By"
              {...field}
              error={!!errors.handledBy}
              helperText={errors.handledBy?.message}
            />
          )}
        />
        <Controller
          name="organisation"
          control={control}
          render={({ field }) => (
            <TextField
              label="Event Organisation"
              {...field}
              error={!!errors.organisation}
              helperText={errors.organisation?.message}
            />
          )}
        />
        <Controller
          name="subEvents"
          control={control}
          render={({ field }) => (
            <TextField
              type="number"
              label="Total Number of Sub-Events"
              {...field}
              error={!!errors.subEvents}
              helperText={errors.subEvents?.message}
            />
          )}
        />
        <div className='flex items-center justify-center'>
          <Button type="submit" className='hover:bg-blue-600 border-blue-600 border-[1px] border-solid text-blue-500  w-[250px] hover:text-white h-[50px]'>{existingEvent ? 'Edit' : 'Save'}  Event</Button>
        </div>
      </div>
    </form >
  );
};

export default EventForm;
