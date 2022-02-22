var killers = [
    {
        name: "Caution",
        sound: 1
    },
    {
        name: "Dying Breed",
        sound: 3
    },
    {
        name: "Human",
        sound: 8
    },
    {
        name: "Spaceman",
        sound: 7
    },
    {
        name: "Sam's Town",
        sound: 5
    },
    {
        name: "Brightside",
        sound: 4
    }
];


let list = '';
killers.forEach(ok);
document.getElementById('object-list').innerHTML = list;
function ok(item){
        if(item['sound'] > 5){
            list += '<div style="color: blue;">';
        }
        else {
            list += '<div>';
        }
        list += '<h2 style="color:black">Name: '+item['name']+'</h2>'+'<h3>Sound: '+item['sound']+'</div>';

}

let counterNumber = 10;

function counter() {
    updateDisplay(++counterNumber);
}

function updateDisplay(value) {
    document.getElementById("counterNumber").innerHTML = value;
    if (counterNumber == 15) {
        let ele = document.createElement("div");
        ele.innerHTML = "Why Do I Keep Counting...";
        document.body.appendChild(ele);
    }
}

