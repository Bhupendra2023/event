import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Event } from '../types/Event';

interface EventsState {
    events: Event[];
}

const initialState: EventsState = {
    events: [],
};

const eventsSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {
        addEvent(state, action: PayloadAction<Event>) {
            state.events.push({ ...action.payload, id: state.events.length + 1 });
        },
        editEvent(state, action: PayloadAction<Event>) {
            const index = state.events.findIndex(event => event.id === action.payload.id);
            if (index !== -1) {
                state.events[index] = action.payload;
            }
        },
        deleteEvent(state, action: PayloadAction<number>) {
            state.events = state.events.filter(event => event.id !== action.payload);
        },
    },
});

export const { addEvent, editEvent, deleteEvent } = eventsSlice.actions;
export default eventsSlice.reducer;
