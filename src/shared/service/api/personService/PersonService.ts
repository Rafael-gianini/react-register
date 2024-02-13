import axios from 'axios';
import { Environment } from '../../../enviroment';
import { DetailPerson, ListPersonProps, TotalCountPerson } from '../../../../models-interface/listPersonProps';

const baseURL = Environment.URL_BASE;

// const getAll = async (): Promise<any> => {};
// const getById = async (): Promise<any> => {};
// const create = async (): Promise<any> => {};
// const updateById = async (): Promise<any> => {};
// const deleteById = async (): Promise<any> => {};

export class PersonService  {

  getAll = async (): Promise<ListPersonProps[]> => {
    try {
      const data = await axios.get(`${baseURL}/api/v1/people`,);
      return data.data;
    
    } catch (error) {
      console.log(error);
      throw new Error('Erro ao listar os registros');
    }
  };

  
  getById = async (id: number): Promise<TotalCountPerson> => {
    try {
      const { data } = await axios.get(`${baseURL}/api/v1/people${id}`);
      return data.data.pessoas;
    
    } catch (error) {
      console.log(error);
      throw new Error('Erro ao consultar o registro');
    }
  };

  create = async (dados: Omit<DetailPerson, 'id'>): Promise<number | Error> => {
    try {
      const { data } = await axios.post<DetailPerson>(`${baseURL}/api/v1/people`, dados);
      return data.id;
    
    } catch (error) {
      console.log(error);
      return new Error('Erro ao criar o registro');
    }
  };

  updateById = async (id: number, dados: DetailPerson): Promise<void | Error> => {
    try {
      await axios.put(`${baseURL}api/v1/people/${id}`, dados);
          
    } catch (error) {
      console.log(error);
      return new Error('Erro ao atualizar os registros');
    }
  };

  deleteById = async (id: number): Promise<void | Error> => {
    try {
      await axios.delete(`${baseURL}api/v1/people/${id}`);
          
    } catch (error) {
      console.log(error);
      return new Error('Erro ao deletar os registros');
    }
  };
}