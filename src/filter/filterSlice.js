import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  role: '',
  minExperience: 0,
  companyName: '',
  remoteOnSite: false,
  techStack: [],
  location: '',
  minBasePay: 0,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setRole: (state, action) => {
      state.role = action.payload;
    },
    setMinExperience: (state, action) => {
      state.minExperience = action.payload;
    },
    setCompanyName: (state, action) => {
      state.companyName = action.payload;
    },
    setRemoteOnSite: (state, action) => {
      state.remoteOnSite = action.payload;
    },
    setTechStack: (state, action) => {
      state.techStack = action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setMinBasePay: (state, action) => {
      state.minBasePay = action.payload;
    },
  },
});

export const {
  setRole,
  setMinExperience,
  setCompanyName,
  setRemoteOnSite,
  setTechStack,
  setLocation,
  setMinBasePay,
} = filterSlice.actions;

export default filterSlice.reducer;
