import { action, computed, observable,makeAutoObservable } from "mobx";

class IncomeDomainStore {
    incomeBeforeTax = 0;
    constructor(){
        makeAutoObservable(this,{testString: false})
    }
    setIncome (incomeAmount: string) {
        try{
            this.incomeBeforeTax = this.testString(incomeAmount)
        }catch(e){
            if(e.message == 'error input'){
                this.incomeBeforeTax = 0
            }else{
               alert('error hafa mints')
            }
        }
    }
    testString(str: string){
      if(isNaN(parseInt(str))){
         throw new Error("error input");
      }else{
          return parseInt(str)
      }
    }

}
export default IncomeDomainStore