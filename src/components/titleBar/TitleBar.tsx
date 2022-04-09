import React from "react";

import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";

function TitleBar() {

	return (
		<Box sx={{
			backgroundColor: '#7CCF08',
			height: '45px',
			textAlign: 'center'
		}}>
			<Typography sx={{
				color: '#FFFFFF',
				height: 'fit-content',
				fontSize: '20px',
				fontWeight: 'bold'
			}}>Kermit</Typography>
		</Box>
	);
}

export default TitleBar;