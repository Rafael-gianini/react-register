import { Box, Drawer, useTheme, Link, List, Icon } from '@mui/material';
import { ProviderProps } from '../../../models-interface/providerProps';
import React from 'react';
import styled from '@emotion/styled';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import LocationCityIcon from '@mui/icons-material/LocationCity';

export const NavBar: React.FC<ProviderProps> = ({children}) => {
  
  const theme = useTheme();

  return (
    <>     
      <Drawer
        variant='permanent'
        anchor='top'>
        <Nav>                             
          <NavItem><Link href='/dashboard'><HomeIcon />Home</Link></NavItem>
          <NavItem><Link href='/people'><PeopleIcon />Pessoas</Link></NavItem>
          <NavItem><Link href='/city'><LocationCityIcon />Cidades</Link></NavItem> 
                           
        </Nav>                             
      </Drawer>                    
      <Box height='100vh' marginTop={theme.spacing(13)}>
        {children}
      </Box>     
    </>
  );
};

const Nav = styled.nav`
  display: flex;
  align-items: center;
  color: #a0aec0;
  padding: 1rem 1rem;
  background-color: #092751;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: large;
  @media (min-width: 768px) {
    padding: 1rem 30rem;
    justify-content: space-between;
  }
`;

const NavItem = styled.li`
  margin: 1rem;
  color: #ECF8FA;
  padding: 0.5rem;
  display: flex;
  
  &:hover {
      color: #13b5ea;
      transition: 0s;
    }
  >a{
      text-decoration: none;
      color: #ECF8FA;
      align-items: center;
      display: flex;
      
    &:hover {
      color: #13b5ea;
      transition: 1s;
    }
  }
    
`;

    

