import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import States from '../data/States';

export default function searchStates() {

  const getNames = States.map(params => {
    const stateNames = params.name
    const groupNames = params.group
    return { name: stateNames, group: groupNames }
  })

  return (
      <Autocomplete
        id="grouped-demo"
        options={getNames}
        groupBy={(option) => option.group}
        getOptionLabel={(option) => option.name}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField  {...params} label="States" />}
      />
  );
}


