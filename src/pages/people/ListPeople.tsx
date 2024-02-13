import React, { useEffect, useMemo, useState } from "react";
import { LayoutBase } from "../../shared/layouts/LayoutBase";
import { ToolBar } from "../../shared/components/toolBar/ToolBar";
import { PersonService } from "../../shared/service/api/personService/PersonService";
import { ListPersonProps, TotalCountPerson } from "../../models-interface/listPersonProps";
import { LinearProgress, Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow } from "@mui/material";
import { Environment } from "../../shared/enviroment";



export const ListPeople = () => {
  
  //const [searchParams, setSearchParams] = useSearchParams();
  const [data, setdata] = useState<ListPersonProps[]>([]);
  const [totalData, setTotalData] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [text, setText] = useState("");

  const search = (text: string) => {
    setText(text);
    let founded: ListPersonProps[] = [];
    if (data !== undefined && text !== ""){
      founded = data.filter(x => x.cityId.toString().includes(text) 
                             || x.email.includes(text) 
                             || x.fullName.includes(text) 
                             || x.id.toString().includes(text));
      
    }
    else if (data.length === 0)
      alert("Não há cadastrados para realizar a busca");

    if (founded.length > 0){
      setdata(founded); 
      setIsLoading(false);
    }
    else setIsLoading(true);
  };
     
  useEffect(() => {
    const person = new PersonService();

    person.getAll().then((result) => {
      if (result !== undefined) {
        setTotalData(result.length);
        setdata(result);
        setIsLoading(false);  
      }
      else if (result === undefined) {      
        alert("Não foram encontrados resultados");
      }
    });
  }, [isLoading]);

  return (
    <LayoutBase
      toolOfList={
        <ToolBar
          showInputSearch
          textButtonNew="Nova"
          textSearch={text}
          changeTextSearch={text => search(text)}
        />
      }>    

      <TableContainer component={Paper} variant="outlined" sx={{margin: 5, width: "auto"}}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Ações</TableCell>
              <TableCell>Nome Completo</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>         
          </TableHead> 
          <TableBody>
            {data.map(row => (
              <TableRow key={row.id}>
                <TableCell>Ações</TableCell>
                <TableCell>{row.fullName}</TableCell>
                <TableCell>{row.email}</TableCell>
              </TableRow>         
            ))}
          </TableBody> 
          {data === null && !isLoading && (
            <caption>{Environment.LISTAGEM_VAZIA}</caption>
          )}
          <TableFooter>
            {isLoading && (
              <TableRow>
                <TableCell colSpan={3}>
                  <LinearProgress variant="indeterminate"></LinearProgress>
                </TableCell>           
              </TableRow>       
                
            )}   

            {totalData > 0 && totalData > Environment.LIMITE_DE_LINHAS &&(
              <TableRow>
                <TableCell colSpan={3}>
                  <Pagination 
                    //page={pagina}
                    count={totalData / Environment.LIMITE_DE_LINHAS} 
                  />
                </TableCell>           
              </TableRow>       
                
            )}                             
          </TableFooter>          
        </Table> 
      </TableContainer> 
    </LayoutBase>

    

  );
};