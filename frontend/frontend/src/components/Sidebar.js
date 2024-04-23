import React from 'react'
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';



function Sidebar() {
    const theme = useTheme()
console.log(theme);

  return (
    <Box p={1} sx={{backgroundColor:theme.palette.background.paper,boxShadow:"0px 0px 2px rgba(0,0,0,0.25)",height:"100vh",width:100}}>
      <Stack   direction="column" justifyContent="space-evenly"  alignItems="center" sx={{width:"100%"}}>
            <Box sx={{backgroundColor:theme.palette.primary.main,height:64,width:64,borderRadius:1.5}}>
                 {/* need to place the logo in here */}
            </Box>
            <h1>Name</h1>{/*need to dynamically render the name */}

            <button style={{ backgroundColor: 'blue', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>
                Channels
            </button>

      </Stack>   
    </Box>
  )
}

export default Sidebar