import { Box, Button, Divider, Paper, Skeleton, Theme, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { ToolOfDetailProps } from '../../../models-interface/toolOfDetailProps';


export const ToolOfDetail: React.FC<ToolOfDetailProps> = ({ 
  textButtonNew = 'Novo',
  showButtonNew = true,
  showButtonBack = true,
  showButtonSave = true,
  showButtonDelete = true,
  showButtonSaveAndClose = false,

  showButtonNewLoading = false,
  showButtonBackLoading = false,
  showButtonDeleteLoading = false,
  showButtonSaveAndCloseLoading = false,
  showButtonSaveLoading = false,

  clickBack,
  clickDelete,
  clickNew,
  clickSave,
  clickSaveAndClose
}) => {

  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const theme = useTheme();
  return (
   
    <Box 
      sx={{}}
      gap={1}     
      paddingX={2}
      display='flex'
      alignItems='center' 
      component={Paper}
      height={theme.spacing(6)}
    >
      {showButtonSave && !showButtonSaveLoading && (
        <Button 
          variant='contained'
          color='primary'
          disableElevation
          endIcon={<SaveIcon/>}
          onClick={clickSave}>
          <Typography
            variant='button'
            whiteSpace='nowrap'
            textOverflow='ellipsis'
            overflow='hidden'>
           Salvar
          </Typography>
        </Button>
      )}
      {showButtonSaveLoading && (
        <Skeleton
          width={110}
          height={60}>
        </Skeleton>
      )}    

      {showButtonSaveAndClose && !showButtonSaveAndCloseLoading && !smDown && !mdDown &&(
        <Button  
          variant='outlined'
          color='primary'
          disableElevation
          endIcon={<SaveIcon/>}
          onClick={clickSaveAndClose}>
          <Typography
            variant='button'
            whiteSpace='nowrap'
            textOverflow='ellipsis'
            overflow='hidden'>
           Salvar e Fechar
          </Typography>
          
        </Button>
      )}
      {showButtonSaveAndCloseLoading && !smDown && !mdDown && (
        <Skeleton
          width={180}
          height={60}>
        </Skeleton>
      )}
      
      {showButtonDelete && !showButtonDeleteLoading &&(
        <Button 
          variant='outlined'
          color='primary'
          disableElevation
          endIcon={<DeleteIcon/>}
          onClick={clickDelete}>
          <Typography
            variant='button'
            whiteSpace='nowrap'
            textOverflow='ellipsis'
            overflow='hidden'>
            Apagar
          </Typography>
         
        </Button>
      )}
      {showButtonDeleteLoading && (
        <Skeleton
          width={110}
          height={60}>
        </Skeleton>
      )}
      
      {showButtonNew && !showButtonNewLoading && !smDown &&(
        <Button 
          variant='outlined'
          color='primary'
          disableElevation
          endIcon={<AddIcon/>}
          onClick={clickNew}>
          <Typography
            variant='button'
            whiteSpace='nowrap'
            textOverflow='ellipsis'
            overflow='hidden'>
            {textButtonNew}
          </Typography>
          
        </Button>
      )}
      {showButtonNewLoading && !smDown && (
        <Skeleton
          width={110}
          height={60}>
        </Skeleton>
      )}
      {showButtonBack && 
      (showButtonNew || showButtonDelete || showButtonSave || showButtonSaveAndClose) && (
        <Divider 
          variant='middle'
          orientation='vertical'>  
        </Divider>
      )}
      

      {showButtonBack && !showButtonBackLoading && (
        <Button 
          variant='outlined'
          color='primary'
          disableElevation
          endIcon={<ArrowBackIcon/>}
          onClick={clickBack}>
          <Typography
            variant='button'
            whiteSpace='nowrap'
            textOverflow='ellipsis'
            overflow='hidden'>
            Voltar
          </Typography>
          
        </Button>       
      )}
      {showButtonBackLoading && (
        <Skeleton
          width={10}
          height={60}>
        </Skeleton>
      )}
      
      
    </Box>
    
    

  );
};

