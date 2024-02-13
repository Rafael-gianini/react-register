
import { Navigate, Route, Routes } from "react-router-dom";
import { DashboardBase } from "../pages/dashboard/Dashboard";
import { ListPeople } from "../pages/people/ListPeople";

export const AppRoutes = () => {

  return (
    <Routes>
      <Route path='/pagina-inicial' element={<DashboardBase/>}></Route>
      <Route path='/people' element={<ListPeople/>}></Route>

      <Route path='*' element={<Navigate to='/pagina-inicial'/>}></Route>

    </Routes>
  );
};