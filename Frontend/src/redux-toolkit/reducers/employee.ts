import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Vacance } from "../../api/api";
import { IVacance } from "../../types";

interface IinitialState {
    isLoading: boolean,
    vacance: Array<IVacance>,
    maxCount: number,
    errors: string
}

const initialState: IinitialState = {
    isLoading: false,
    vacance: [{
        description: "Ищем форнтенд разработчика с опытом работы от 3 лет",
        price: 120,
        skills: ["Js", "Ts"],
        vacance: "Frontend-Developer",
        _id: "klsdklfkl77hhb43h4jh4hjh5njn"
    }],
    maxCount: 20,
    errors: ""
}

const employee = createSlice({
    name: "employee",
    initialState,
    reducers: {
        setTotalCount: (state, action: PayloadAction<number>) => {
            state.maxCount = action.payload
        },
        switchLoad: (state) => {
            state.isLoading = !state.isLoading
        },
        setVacance: (state, action: PayloadAction<Array<IVacance>>) => {
            state.vacance = action.payload
        },
        setErrors: (state, action: PayloadAction<string>) => {
            state.errors = action.payload
        },
    },
    extraReducers:{
        []
    }
})

export const fetchingData = createAsyncThunk("fetchingData",async () => {})

export const { setErrors, setTotalCount, setVacance, switchLoad } = employee.actions
export default employee.reducer