import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import {
  setRole,
  setMinExperience,
  setCompanyName,
  setRemoteOnSite,
  setTechStack,
  setLocation,
  setMinBasePay,
} from "../filter/filterSlice"; // Import actions from your slice

const FilterComponent = ({ onFilterChange }) => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter); // Select the filter state from the Redux store

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Dispatch actions based on the input type
    switch (name) {
      case "role":
        dispatch(setRole(value));
        break;
      case "minExperience":
        dispatch(setMinExperience(value));
        break;
      case "companyName":
        dispatch(setCompanyName(value));
        break;
      case "remoteOnSite":
        if (value > 0) dispatch(setRemoteOnSite(checked));
        break;
      case "techStack":
        dispatch(setTechStack(checked));
        break;
      case "location":
        dispatch(setLocation(value));
        break;
      case "minBasePay":
        dispatch(setMinBasePay(value));
        break;
      default:
        break;
    }

    console.log(filter);
    onFilterChange(name, type === "checkbox" ? checked : value);
  };

  return (
    <div className="mt-4">
      <div className="flex justify-center">
        <div className="flex gap-3">
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="role-label">Role</InputLabel>
              <Select
                name="role"
                labelId="role-label"
                label="Role"
                value={filter.role} // Display selected role
                onChange={handleChange}
              >
                <MenuItem value="">Select</MenuItem>
                <MenuItem value={"tech lead"}>Tech Lead</MenuItem>
                <MenuItem value={"frontend"}>Frontend Developer</MenuItem>
                <MenuItem value={"ios"}>iOS Developer</MenuItem>
                <MenuItem value={"backend"}>Backend Developer</MenuItem>
                <MenuItem value={"android"}>Android Developer</MenuItem>
              </Select>
            </FormControl>
          </Box>
  
          <Box sx={{ minWidth: 120 }}>
            <TextField
              label="Min Experience"
              type="number"
              name="minExperience"
              value={filter.minExperience} // Display selected minExperience
              onChange={handleChange}
            />
          </Box>
  
          <TextField
            label="Company Name"
            variant="outlined"
            name="companyName"
            value={filter.companyName} // Display selected companyName
            onChange={handleChange}
          />
  <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="role-label">Mode</InputLabel>
              <Select
                name="workmode"
                labelId="work-Mode"
                label="mode"
                value={filter.mode}
                onChange={handleChange}
              >
                <MenuItem value="">Select</MenuItem>
                <MenuItem value={"Remote"}>Remote</MenuItem>
                <MenuItem value={"OnSite"}>Onsite</MenuItem>
                <MenuItem value={"Hybrid"}>Hybrid</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ minWidth: 120 }}>
            <TextField
              label="Number of Employee"
              type="number"
              name="Number of Employee"
              value={filter.MinNumofexperience}
            />
          </Box>
  
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="location-label">Location</InputLabel>
              <Select
                name="location"
                label="Location"
                value={filter.location} // Display selected location
                onChange={handleChange}
              >
                <MenuItem value="">Select</MenuItem>
                <MenuItem value={"remote"}>Remote</MenuItem>
                <MenuItem value={"chennai"}>Chennai</MenuItem>
                <MenuItem value={"delhi ncr"}>Delhi NCR</MenuItem>
                <MenuItem value={"mumbai"}>Mumbai</MenuItem>
                <MenuItem value={"bangalore"}>Bangalore</MenuItem>
              </Select>
            </FormControl>
          </Box>
  
          <Box sx={{ minWidth: 120 }}>
            <TextField
              label="Min Base Pay"
              type="number"
              name="minBasePay"
              value={filter.minBasePay} // Display selected minBasePay
              onChange={handleChange}
            />
          </Box>
        </div>
      </div>
    </div>
  );  
};

export default FilterComponent;
