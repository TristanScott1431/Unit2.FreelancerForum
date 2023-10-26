

let freelancers = [
    {
        name: "Alice",
        occupation: "writer",
        startingPrice: "$30"
    },
    {
        name: "bob",
        occupation: "teacher",
        startingPrice: "$50"
    },
    {
        name: "carol",
        occupation: "programmer",
        startingPrice: "$70"
    },
    {
        name: "anthony",
        occupation: "carpenter",
        startingPrice: "$90",
    },
    {
        name: "Todd",
        occupation: "welder",
        startingPrice: "$120"
    }
]

let newRandomFreelancers = [
    {
        name: "justin",
        occupation: "writer",
        startingPrice: "$30"
    },
    {
        name: "dave",
        occupation: "teacher",
        startingPrice: "$50"
    },
    {
        name: "seth",
        occupation: "programmer",
        startingPrice: "$70"
    },
    {
        name: "matt",
        occupation: "carpenter",
        startingPrice: "$90",
    },
    {
        name: "jason",
        occupation: "welder",
        startingPrice: "$120"
    }
]


function listOfFreelancers() {
    let freeLancers = document.getElementById("freeLancers")

    for (let i = 0; i < freelancers.length; i++) {
        let currentFreelancer = freelancers[i]

        let freelancerDiv = document.createElement("div")
        freelancerDiv.className = "freelancers"

        freelancerDiv.innerHTML = `<h1>${currentFreelancer.name}</h1>
                              <h3>Occupation: ${currentFreelancer.occupation}</h3>
                              <h3>StartingPrice: ${currentFreelancer.startingPrice}</h3>`

        freeLancers.appendChild(freelancerDiv)
    }
}

listOfFreelancers()

function freelancerRandomizer() {
    let randomIndex = Math.floor(Math.random() * newRandomFreelancers.length)
    let selectedFreelancer = newRandomFreelancers[randomIndex]

    let box = document.querySelector("#randomFreelancerBox")
    box.innerHTML = `<h1>${selectedFreelancer.name}</h1>
                    <h3>Occupation: ${selectedFreelancer.occupation}</h3>
                    <h3>Starting Price: ${selectedFreelancer.startingPrice}</h3>`
    
    displayAveragePrice();               
}


setTimeout(() => {
    freelancerRandomizer()
}, 5000)

setInterval(() => {
    freelancerRandomizer()
}, 2500)

function calculateAveragePrice(freelancersArray) {
    let total = 0;
    for (let i = 0; i < freelancersArray.length; i++) {
        let price = parseInt(freelancersArray[i].startingPrice.replace("$", ""));
        total += price;
    }

    if (freelancersArray.length > 0) {
        let average = total / freelancersArray.length;
        return `$${average.toFixed(2)}`;
    } else {
        return "$0.00";
    }
}

function displayAveragePrice() {
    let averagePriceDiv = document.getElementById("averagePrice");
    averagePriceDiv.innerHTML = `<h3>Average Starting Price: ${calculateAveragePrice(newRandomFreelancers)}</h3>`;
}

displayAveragePrice();


