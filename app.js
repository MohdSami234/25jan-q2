const div1 = document.getElementById("container");
let key = "https://api2.binance.com/api/v3/ticker/24hr";
const api = () => {
  fetch(key)
    .then((data) => data.json())
    .then((realdata) => {
         
       console.log(realdata);
      for (let i = 0;i<100;i++) {
        let symbol = realdata[i].symbol;
        let pricechange = realdata[i].priceChange;
        let weightavg = realdata[i].weightedAvgPrice;
        let bidprice = realdata[i].bidPrice;
        let openprice = realdata[i].openPrice;
        let count = realdata[i].count;
         
        let ol = document.createElement("ol");
        let info = ["Symbol - "+symbol, "Pricechange - "+pricechange,"WeightavgPrice - "+weightavg,"Bidprice - "+bidprice, "Openprice - "+openprice,"Count - "+ count];
        for(let i in info){
        let li = document.createElement("li"); 

        li.innerText = info[i];
        ol.appendChild(li);

        ol.classList.add("box")
         

        } 
        
             
        div1.appendChild(ol);
        
      }
    });
};

api();
