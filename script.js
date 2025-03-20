//your JS code here. If required.
// Get table body reference
let outputTable = document.getElementById("output");

// Initially show "Loading..." row
let loadingRow = document.createElement("tr");
loadingRow.innerHTML = `<td colspan="2" class="text-center">Loading...</td>`;
outputTable.appendChild(loadingRow);

// Create 3 promises manually with a random delay (1 to 3 seconds)
let p1 = new Promise((resolve) => {
    let random = (Math.random() * 2 + 1).toFixed(3); // Between 1 and 3 sec
    setTimeout(() => {
        resolve({ name: "Promise 1", timeTaken: random });
    }, random * 1000);
});

let p2 = new Promise((resolve) => {
    let random = (Math.random() * 2 + 1).toFixed(3);
    setTimeout(() => {
        resolve({ name: "Promise 2", timeTaken: random });
    }, random * 1000);
});

let p3 = new Promise((resolve) => {
    let random = (Math.random() * 2 + 1).toFixed(3);
    setTimeout(() => {
        resolve({ name: "Promise 3", timeTaken: random });
    }, random * 1000);
});

// Record the start time
let startTime = performance.now();

// Wait for all promises to resolve
Promise.all([p1, p2, p3]).then((results) => {
    let endTime = performance.now();
    let totalTime = ((endTime - startTime) / 1000).toFixed(3); // Total execution time

    // Clear the "Loading..." message
    outputTable.innerHTML = "";

    // Add resolved promises to the table
    results.forEach(result => {
        let row = document.createElement("tr");
        row.innerHTML = `<td>${result.name}</td><td>${result.timeTaken}</td>`;
        outputTable.appendChild(row);
    });

    // Add the total row
    let totalRow = document.createElement("tr");
    totalRow.innerHTML = `<td><strong>Total</strong></td><td><strong>${totalTime}</strong></td>`;
    outputTable.appendChild(totalRow);
});
