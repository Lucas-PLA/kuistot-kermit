import React from 'react';

import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import KitchenIcon from '@mui/icons-material/Kitchen';
import RoomServiceIcon from '@mui/icons-material/RoomService';

import { ROUTE_RECETTES, ROUTE_MENU } from 'utils/routes.const';

import './Navbar.css';

function Navbar() {
	const navigate = useNavigate();
	
	const navigateToPage = (page : string) => () => {
		navigate(page);
	};

	return (
		<Box id="navbar">
			<List>
				<ListItem disablePadding>
					<ListItemButton onClick={navigateToPage(ROUTE_MENU)}>
						<ListItemIcon><RoomServiceIcon /></ListItemIcon>
						<ListItemText primary="Mon menu" />
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton onClick={navigateToPage(ROUTE_RECETTES)}>
						<ListItemIcon><KitchenIcon /></ListItemIcon>
						<ListItemText primary="Mes recettes" />
					</ListItemButton>
				</ListItem>
			</List>
		</Box>
	);
}

export default Navbar;