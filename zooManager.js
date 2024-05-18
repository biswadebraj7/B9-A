
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

    console.log(calculateMoney(10));
    console.log(calculateMoney(1055));
    console.log(calculateMoney(-130 ));