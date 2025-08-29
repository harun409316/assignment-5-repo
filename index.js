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



    let counterCopy = 0;
    const copyElement = document.getElementById('counter-copy');
    const copyBtn = document.querySelectorAll('.copy-btn');
    const numbers = document.querySelectorAll('.number-copy');

        for(const copy of copyBtn){
            
            copy.addEventListener("click", function() {
                counterCopy++;
                
                copyElement.textContent = counterCopy;

                navigator.clipboard.writeText(numbers).then(() => {
                    alert(`number copy: ${numbers}`)
                })
            })
        }
    

    const callButtons = document.querySelectorAll(".call");
    const historyList = document.getElementById("historyList");

    callButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const cardTitle = btn.closest(".card").querySelector("h3").textContent;
        const callNumber = btn.closest(".card").querySelector("h4").textContent;
        const time = new Date().toLocaleString();

        const entry = document.createElement("div");
        entry.className = "entry";

        const title = document.createElement("span");
        title.className = "entry-title";
        title.textContent = `${cardTitle}  `;

        const title2 = document.createElement("span");
        title2.className = "entry-title2";
        title2.textContent = ` ${callNumber}`;

        const t = document.createElement("span");
        t.className = "time";
        t.textContent = ` ${time}`;
        

           entry.style.backgroundColor = '#fafafa';
           entry.style.padding = '10px'
           entry.style.borderRadius = '10px'
           entry.style.marginTop = '10px';
            

        entry.appendChild(title);
        entry.appendChild(title2);
        entry.appendChild(t);
      

        historyList.prepend(entry);

      });
    });

    document.getElementById('clearBtn').addEventListener('click', function(){
        historyList.innerHTML = "";
    })
