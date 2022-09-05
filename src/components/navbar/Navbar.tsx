import React, { useContext } from 'react';

import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import KitchenIcon from '@mui/icons-material/Kitchen';
import PowerSettingsNew from '@mui/icons-material/PowerSettingsNew';

import { ROUTE_RECETTES } from 'const/routes.const';
import { LS_TOKEN_KEY } from 'const/localStorage.const';

import './Navbar.css';
import { GlobalContext } from 'utils/GlobalContextProvider';

function Navbar() {
	const navigate = useNavigate();
	const context = useContext(GlobalContext);
	
	const navigateToPage = (page : string) => () => {
		navigate(page);
	};

	const logout = () => {
		localStorage.removeItem(LS_TOKEN_KEY);
		context?.dispatch.setToken("");
	};

	return (
		<Box id="app-navbar">
			<List>
				<NavbarListItem
					itemName="Mes recettes"
					onClickCallback={navigateToPage(ROUTE_RECETTES)}
					icon={<KitchenIcon />} />
				<NavbarListItem
					itemName="Deconnexion"
					onClickCallback={logout}
					icon={<PowerSettingsNew />} />
			</List>
		</Box>
	);
}

interface NavbarListItemProps {
	itemName: string,
	onClickCallback: () => void,
	icon: JSX.Element
}

function NavbarListItem({itemName, onClickCallback, icon} : NavbarListItemProps) {
	return (
		<ListItem disablePadding>
			<ListItemButton onClick={onClickCallback}>
				<ListItemIcon>{icon}</ListItemIcon>
				<ListItemText primary={itemName} />
			</ListItemButton>
		</ListItem>
	);
}

export default Navbar;