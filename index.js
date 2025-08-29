// heart icon 

let counter = 0;
const counterElement = document.getElementById('counter');
const heartElement = document.querySelectorAll('.heart');

    for(const heart of heartElement){
        heart.addEventListener("click", function() {
            counter++;
            counterElement.textContent = counter;
        })
    }
//  heart icon end 
// coin icon count 
let counters = 100;
const counterElementValue = document.getElementById('counters');
const callBtn = document.querySelectorAll('.call-btn');

    for(let calls of callBtn ){
        calls.addEventListener('click', function(){
            counters -= 20;
            if(counters > 19){
                alert('the service name and number');
            }
          

            else if(counters < 20){
                alert('আপনার পর্যাপ্ত কয়েন নাই! কমপক্ষে ২০ টি কয়েন লাগবে');
            }

            counterElementValue.textContent = counters;

        })
    }
// history icon 
  
    const callButtons = document.querySelectorAll(".call");
   
    const historyList = document.getElementById("historyList");
    callButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const cardTitle = btn.closest(".card").querySelector("h3").textContent;
        const cardTitle2 = btn.closest(".card").querySelector("h4").textContent;
        const time = new Date().toLocaleString();

        const entry = document.createElement("div");
        entry.className = "entry";
        
        entry.textContent = `${cardTitle} - ${cardTitle2} - ${time}`;
        
        historyList.prepend(entry);
      });
    });
