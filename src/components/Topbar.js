import React from 'react'

import { NotificationsNone } from "@mui/icons-material";
import  SettingsIcon  from '@mui/icons-material/Settings';

const Topbar= () => {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topRight">
                    <div className="topBarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topBarIconContainer">
                        <SettingsIcon />
                        <span className="topIconBadge">2</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar;