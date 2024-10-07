let stations = [];


function addStation(name, maxCapacity) {
    const station = {
        name: name,
        maxCapacity: maxCapacity,
        currentTrains: 0
    };
    stations.push(station);
    updateStationList();
}
function updateStationList() {
    const stationList = document.getElementById("stationList");
    stationList.innerHTML = ''; 
    stations.forEach(station => {
        const li = document.createElement("li");
        li.textContent = `${station.name} - Current Trains: ${station.currentTrains} / ${station.maxCapacity}`;
        stationList.appendChild(li);
    });
}

function addTrain(stationName) {
    const station = stations.find(s => s.name === stationName);
    if (station) {
        if (station.currentTrains < station.maxCapacity) {
            station.currentTrains++;
            updateStationList();
        } else {
            alert(`${station.name} has reached its capacity!`);
        }
    } else {
        alert("Station not found.");
    }
}


function removeTrain(stationName) {
    const station = stations.find(s => s.name === stationName);
    if (station) {
        if (station.currentTrains > 0) {
            station.currentTrains--;
            updateStationList();
        } else {
            alert(`${station.name} has no trains to remove.`);
        }
    } else {
        alert("Station not found.");
    }
}


document.getElementById("addStationButton").addEventListener("click", function() {
    const stationName = document.getElementById("stationName").value;
    const maxCapacity = document.getElementById("maxCapacity").value;

    addStation(stationName, maxCapacity);
 
    document.getElementById("stationName").value = '';
    document.getElementById("maxCapacity").value = '';
});

document.getElementById("addTrainButton").addEventListener("click", function() {
    const stationForTrain = document.getElementById("stationForTrain").value;
    addTrain(stationForTrain);
    
    
    document.getElementById("stationForTrain").value = '';
});

document.getElementById("removeTrainButton").addEventListener("click", function() {
    const stationForTrain = document.getElementById("stationForTrain").value;
    removeTrain(stationForTrain);
    
    
    document.getElementById("stationForTrain").value = '';
});
