function calculateMoney(ticketSale) {
   

    const tricketSell = 120;
    const daroyanCoast = 500;
    const lunchCoast = 50*8;

    if(ticketSale <0){
        return "Invalid Number";
    }

    const allTricketSell = tricketSell * ticketSale ;
    const allOtherCoast = daroyanCoast + lunchCoast;

    const result = allTricketSell - allOtherCoast;

    return result;

    }

function checkName(name){
        const lastName = ["A", "y", "i","e","o","u","w"];
    
        if(typeof name!== 'string'){
            return "invalid";
        }
    
        for(name1 of name){
            if(lastName.includes(name.slice(-1).toLowerCase())){
                return "Good Name"
            }
            else {
                return "Bad Name"
            }
        }
    }

function deleteInvalids(array){
        const inputArray =[];
    
        if (Array.isArray(array) === false) {
            return "Please Insert An Array Instead";
          }
    
        for (let arry of array) {
            if (typeof arry === "number" && Number.isNaN(arry) === false) {
                inputArray.push(arry);
            }
          }
    
          return inputArray;
    }

function password(obj){
        if (!obj.name || !obj.birthYear || !obj.siteName) {
            return "invalid";
          }
          if (obj.birthYear.toString().length !== 4) {
            return "invalid";
          }
          obj.siteName =
            obj.siteName[0].toUpperCase() + obj.siteName.slice(1).toLowerCase();
    
            return `${obj.siteName}#${obj.name}@${obj.birthYear}`;
        
    }

function monthlySavings(array, livingCost){
        let sum = 0;
      if (Array.isArray(array) === false || typeof livingCost !== "number") {
        return "invalid input";
      }
      for (let arr of array) {
        if (arr >= 3000) {
          const tex = (arr * 20) / 100;
          arr = arr - tex;
        }
        sum = sum + arr;
      }
      const output = sum - livingCost;
      if (output < 0) {
        return "earn more";
      }
      return output;
    }
    