import { createSlice } from '@reduxjs/toolkit';

// formulario
const initialState = {
    formData: {
        module: 'React Mod7',
        username: '',
        email: '',
        password: 'mod7USIP-ERICK'
    },
    //autenticación
    isLoggedIn: false, 
};

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        //actualizar los datos del formulario
        updateForm(state, action) {
            const { field, value } = action.payload;
            state.formData[field] = value;
        },
        //reiniciar el formulario
        resetForm(state) {
            state.formData = {
                module: '',
                username: '',
                email: '',
                password: ''
            };
            state.formData.formData = {
                module: '',
                username: '',
                email: '',
                password: ''
            };
        },
        login: (state) => {
            state.isLoggedIn = true;
        },
        logout: (state) => {
            state.isLoggedIn = false;            
        },
    }
});

// exportar
export const { updateForm, resetForm, login, logout } = formSlice.actions;
export default formSlice.reducer;