import React,{useState} from 'react'
import Container from '@mui/material/Container';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box'
const EmployeeProfile = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
        <Container maxWidth='cm'>
      <Box sx={{ width: '100%', bgcolor: 'background.paper',  }}mt={2}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
      </Box>

      {value===0 && <div>Item one</div>}
      {value===1 && <div>Item two</div>}
      {value===2 && <div>Item three</div>}
      </Container>
    );
}

export default EmployeeProfile;