'use client'
import React from 'react'
import { Provider } from 'react-redux';
import store from '../redux/store'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const AppProvider = ({ children }: any) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Provider store={store}>
                {children}
            </Provider>
        </LocalizationProvider>
    )
}

export default AppProvider
