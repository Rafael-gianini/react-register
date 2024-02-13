import { ToolOfDetail } from '../../shared/components/toolOfDetail/ToolOfDetail';
import { LayoutBase } from '../../shared/layouts/LayoutBase';


export const DashboardBase = () => {

  return (
    
    <LayoutBase 
      
      toolOfList={(
        <ToolOfDetail
          showButtonSaveAndClose         
        />        
        
      )}> 
      Testando
    </LayoutBase>
   
    
    
  );


};