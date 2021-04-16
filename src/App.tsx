import React,{createContext, useContext,FC} from 'react';
import logo from './logo.svg';
import Testmobx from './View';
import 'fontsource-roboto';
import './App.css';
import icomDomainStore from './Store/icomDomaineStore';
import {interfaceIconStore} from './CustomType/todo';
import { observer } from "mobx-react-lite";

const StoreContext = createContext<interfaceIconStore>({} as interfaceIconStore);

const IcomObs:FC = observer(()=>{
  const timer = useContext(StoreContext);
  return(
    <div className="App">
    <header className="App-header">
      <input type="text" onChange={event => timer.setIncome(event.target.value)} placeholder="Income" className="income-input"/>
      <button type="button" className="calculate-btn">Calculate</button>
      <p>Income: ${timer.incomeBeforeTax}.00</p>
      <img src={logo} className="App-logo" alt="logo" />
    </header>
  </div>
  );
})

function App() {
  return (
    <StoreContext.Provider value={new icomDomainStore()}>
      {/* <div className="App">
        <Testmobx/>
      <header className="App-header">
           <input type="text" placeholder="Income" className="income-input"/>
           <button type="button" className="calculate-btn">Calculate</button>
           <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div> */}
    <IcomObs/>
</StoreContext.Provider>
    
  );
}

export default App;
