import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { RootState } from '../redux/store';
import { deleteEvent } from '../redux/eventsSlice';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const EventList: React.FC = () => {
  const events = useSelector((state: RootState) => state.events.events);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleEdit = (id: number) => {
    router.push(`/events/edit?id=${id}`);
  };

  const handleDelete = (id: number) => {
    dispatch(deleteEvent(id));
  };

  const columns: GridColDef[] = [
    { field: 'name', headerName: 'Event Name', width: 150 },
    { field: 'type', headerName: 'Event Type', width: 150 },
    { field: 'startDate', headerName: 'Start Date', width: 150 },
    { field: 'endDate', headerName: 'End Date', width: 150 },
    { field: 'description', headerName: 'Description', width: 200 },
    { field: 'handledBy', headerName: 'Handled By', width: 150 },
    { field: 'organisation', headerName: 'Organisation', width: 150 },
    { field: 'subEvents', headerName: 'Sub-Events', width: 150 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 200,
      renderCell: (params: any) => (
        <div className='space-x-4'>
          <EditIcon className='text-blue-600 cursor-pointer' onClick={() => handleEdit(params.row.id)}>E</EditIcon>
          <DeleteIcon className='text-red-700 cursor-pointer' onClick={() => handleDelete(params.row.id)}>D</DeleteIcon>
        </div>
      ),
    },
  ];

  return (
    <div >
      <Button onClick={() => router.push('/events/add')} className='mb-4 border-[1px] px-3 hover:text-white border-solid border-blue-500 hover:bg-blue-500 text-blue-500'>Add Event</Button>
      <DataGrid rows={events} columns={columns}/>
    </div>
  );
};

export default EventList;
