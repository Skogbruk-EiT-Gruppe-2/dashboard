import { createSlice } from '@reduxjs/toolkit'

export type FiltersState = {
    fromDate?: Date
}

const initialState = {
    fromDate: undefined,
} satisfies FiltersState as FiltersState

export const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setFromDate: (state, action) => {
            state.fromDate = action.payload
        },
    },
})

export const { setFromDate } = filtersSlice.actions

export const filtersReducer = filtersSlice.reducer
