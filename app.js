
for (let i=0; i<192; i++) {
    const newCoord = document.createElement("button");
    newCoord.id = `${i%16}, ${Math.floor(i/16)}`
    document.querySelector("#grid").appendChild(newCoord);
}

const car = {
    x: 3,
    y: 5,
    xVelocity: 0,
    yVelocity: 0
};

document.getElementById(`${car.x}, ${car.y}`).style.backgroundColor = "rgb(240, 83, 83)";


function updatePosition(car) {
    document.getElementById("display-velocity").innerText = `${car.xVelocity} horizontal, ${-car.yVelocity} Vertical`

    document.getElementById(`${car.x}, ${car.y}`).style.backgroundColor = "rgb(98, 183, 240)";
    car.x = car.x + car.xVelocity;
    car.y = car.y + car.yVelocity;
    document.getElementById(`${car.x}, ${car.y}`).style.backgroundColor = "rgb(240, 83, 83)";
    document.getElementById(`${car.x}, ${car.y}`).style.zIndex = "2";

    const trail = document.createElementNS('http://www.w3.org/2000/svg','line');
    trail.setAttribute("x1", (car.x - car.xVelocity)*50+25);
    trail.setAttribute("y1", (car.y - car.yVelocity)*50+25);
    trail.setAttribute("x2", car.x*50+25);
    trail.setAttribute("y2", car.y*50+25);
    trail.setAttribute("style", "stroke: rgb(98, 183, 240); stroke-width: 4px;");
    document.querySelector("svg").appendChild(trail);
}

function vectorUp(car) {
    car.yVelocity -= 1;  
}

function vectorDown(car) {
    car.yVelocity += 1;
}

function vectorRight(car) {
    car.xVelocity += 1;
}

function vectorLeft(car) {
    car.xVelocity -= 1;
}

const controls = document.querySelectorAll(".control-buttons");
for (let control of controls) {
    control.addEventListener("click", (e) => {
        console.log(e.target.id);
        if (e.target.id == "add-up") {
            vectorUp(car);
        }
        if (e.target.id == "add-down") {
            vectorDown(car);
        }
        if (e.target.id == "add-right") {
            vectorRight(car);
        }
        if (e.target.id == "add-left") {
            vectorLeft(car);
        }
        if (e.target.id == "add-up-left") {
            vectorUp(car);
            vectorLeft(car);
        }
        if (e.target.id == "add-up-right") {
            vectorUp(car);
            vectorRight(car);
        }
        if (e.target.id == "add-down-left") {
            vectorDown(car);
            vectorLeft(car);
        }
        if (e.target.id == "add-down-right") {
            vectorDown(car);
            vectorRight(car);
        }
        try {
            updatePosition(car);
        } catch {
            alert("You have crashed");
        }
        
    })
}
