// (advanced) Multi-layer discount price calculation
// ! discount
/* 
1. if ticker numbers is less then 100 .. per ticket price = 100 ;;
2. if ticker numbers is more then 100 ..but less then 200  first 100 tickets will be 100/ rest ticket will be 90 per price 
       first 100 = 100
       rest 90
;;
3. if u puchess more than 200 tickets 
        first 100 --- > 100tk
         101- 200 -----> 90tk
         200+ 70 tk 
*/
function ticketPrice(ticketQuantity) {
  const first100Rate = 100;
  const secount100Rate = 90;
  const restTickerRate = 70;
  if (ticketQuantity <= 100) {
    const price = ticketQuantity * first100Rate;
    return price;
  } else if (ticketQuantity <= 200) {
    const first100Price = 100 * first100Rate;
    const restTicketQuantity = ticketQuantity - 100;
    const restTickerPrice = restTicketQuantity * secount100Rate;
    const totalPrice = first100Price + restTickerPrice;
    return totalPrice;
  } else {
    const first100Price = 100 * first100Rate;
    const secount100Price = 100 * secount100Rate;
    const restTicketQuantity = ticketQuantity - 200;
    const restTicketPrice = restTicketQuantity * restTickerRate;
    const totalcost = first100Price + secount100Price + restTicketPrice;
    return totalcost;
  }
}

const price = ticketPrice(210);
console.log("price :", price);
