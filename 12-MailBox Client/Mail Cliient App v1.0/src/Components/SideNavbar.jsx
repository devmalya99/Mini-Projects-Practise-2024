import React from 'react';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { useNavigate } from 'react-router-dom';
const Sidebar = () => {
    const navigate = useNavigate();

    const handleSelect = (path)=>{
           navigate(`/${path}`)
    }
    return (
        <SideNav 
        onSelect={handleSelect}
        className="bg-gray-500">
            <SideNav.Toggle />
            
            <SideNav.Nav defaultSelected="Compose">
                
               
                
                <NavItem eventKey="compose">
                    <NavIcon>
                    <i className="fa-solid fa-pen-to-square" style={{ fontSize: '1.75em' }}></i>
                    </NavIcon>
                    <NavText>
                        Compose
                    </NavText>
                </NavItem>
                <NavItem eventKey="inbox">
                    <NavIcon>
                    <i className="fa fa-fw fa-envelope" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                        Inbox
                    </NavText>
                </NavItem>

                <NavItem eventKey="sentbox">
                    <NavIcon>
                    <i className="fa-regular fa-share-from-square" style={{ fontSize: '1.75em' }}></i>
                    </NavIcon>
                    <NavText>
                        Sentbox
                    </NavText>
                </NavItem>

                <NavItem eventKey="logout">
                    <NavIcon>
                        <i className="fas fa-sign-out-alt" style={{ fontSize: '1.75em' }}></i>
                    </NavIcon>
                    <NavText>
                        Logout
                    </NavText>
                </NavItem>
                {/* Add more NavItem components here as needed */}
            </SideNav.Nav>
        </SideNav>
    );
};

export default Sidebar;