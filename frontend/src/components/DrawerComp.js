import React, { useState } from 'react'
import { Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';

const PAGES = ["Products", "Services", "About Us", "Contact Us", "Login", "Logout"]

function DrawerComp() {
    const [openDrawer, setOpenDrawer] = useState(false)
    return (
        <React.Fragment>
            <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
                <List sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    flexDirection: 'column'
                }}>
                    {
                        PAGES.map((pages, index) => (

                            <ListItemButton key={index}>
                                <ListItemIcon>
                                    <ListItemText>{pages}</ListItemText>
                                </ListItemIcon>
                            </ListItemButton>

                        ))


                    }

                </List>
            </Drawer>
            <IconButton sx={{ color: 'white', marginLeft: 'auto' }} onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon />
            </IconButton>
        </React.Fragment>
    )
}

export default DrawerComp