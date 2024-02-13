import { Box, Typography } from '@mui/material';
import { LayoutBasePaginaProps } from '../../models-interface/layoutBasePaginaProps';

export const LayoutBase: React.FC<LayoutBasePaginaProps> = ({children, toolOfList}) => {
  
  return (
    <Box 
      height='100%' 
      display='flex' 
      flexDirection='column'
    >     
      {toolOfList && (
        <Box>
          {toolOfList}        
        </Box>
      )}
      <Box flex={1} overflow='auto'>
        <Typography>
          {children}
        </Typography>
      </Box>
    </Box>

  );

};