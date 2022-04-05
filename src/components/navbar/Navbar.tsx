import React from 'react';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import KitchenIcon from '@mui/icons-material/Kitchen';
import RoomServiceIcon from '@mui/icons-material/RoomService';

enum Pages {
	Recettes = "RECETTES",
	Menu = "MENU"
}

function Navbar() {
	const navigateToPage = (page : string) => () => {

	}

	return (
		<Box>
			<List>
				<ListItem>
					<ListItemButton onClick={navigateToPage(Pages.Menu)}>
						<ListItemIcon><RoomServiceIcon /></ListItemIcon>
						<ListItemText primary="Mon menu" />
					</ListItemButton>
				</ListItem>
				<ListItem>
					<ListItemButton onClick={navigateToPage(Pages.Recettes)}>
						<ListItemIcon><KitchenIcon /></ListItemIcon>
						<ListItemText primary="Mes recettes" />
					</ListItemButton>
				</ListItem>
			</List>
		</Box>
	);
}

export default Navbar;