
import './App.css';
import Tables from './functionComponents/tables';
import Forms from './functionComponents/forms';
import Lists from './functionComponents/list';
import CostumImage from './functionComponents/imgg';

import CustomForm from './classComponents/formClass';
import CustomList from './classComponents/listClass';
import CustomTables from './classComponents/tableclass';
import Customimg from './classComponents/imggClass';
import List from './functionComponents/list';

function App() {
  return (
    <div className="App">
      <div className='function'>
        <h1>Function Components</h1>
        <CostumImage />
        <Tables />
        <Forms />
        <Lists />
        <List/>
      </div>

      <div className='classComp'>
        <h1>Class Components</h1>
        <Customimg></Customimg>
        <CustomTables></CustomTables>
        < CustomForm></CustomForm>
        <CustomList></CustomList>
      </div>
    </div>
  );
}

export default App;
