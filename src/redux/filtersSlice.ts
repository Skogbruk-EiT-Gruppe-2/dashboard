import { createSlice } from '@reduxjs/toolkit'

export type FiltersState = {
    from_date?: Date
}

const initialState = {
    from_date: undefined,
} satisfies FiltersState as FiltersState

export const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setFromDate: (state, action) => {
            state.from_date = action.payload
        },
    },
})

export const { setFromDate } = filtersSlice.actions

export const filtersReducer = filtersSlice.reducer
