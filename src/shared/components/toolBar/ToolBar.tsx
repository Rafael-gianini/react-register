
import { Box, Button, Paper, TextField, useTheme } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { ToolBarProps } from '../../../models-interface/toolBarProps';

export const ToolBar: React.FC<ToolBarProps> = ({
  textSearch = '', 
  showInputSearch = false, 
  changeTextSearch,
  textButtonNew = 'Novo',
  showButtonNew = true,
  onClickButtonNew
}) => {

  const theme = useTheme();
  return (
    <Box 
      gap={1}     
      paddingX={2}
      display='flex'
      alignItems='center' 
      component={Paper}
      height={theme.spacing(6)}>
      
      {showInputSearch && (
        <TextField 
          value={textSearch}
          onChange={(e) => changeTextSearch?.(e.target.value)}
          placeholder='Pesquisar...' 
          size='small'
        
        />
      )}
      <Box 
        flex={1} 
        display='flex'>
        {showButtonNew && (
          <Button 
            variant='contained'
            color='primary'
            disableElevation
            onClick={onClickButtonNew}
            endIcon={<AddIcon/>}>
            {textButtonNew}
          </Button>
        )}
      </Box>
    </Box>
  );
};