async function fetchTitles(personId) {
    const apiUrl = `https://chrishawnmiles.pythonanywhere.com/titles/${personId}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        // Display the response in the UI
        document.getElementById("output0").textContent = `Titles: ${data.titles.join(", ")}`;
    } catch (error) {
        console.error("Error fetching data:", error);
        document.getElementById("output0").textContent = "Error fetching data.";
    }
}


async function fetchPaths(startTitle) {
    const apiUrl = `https://chrishawnmiles.pythonanywhere.com/paths/${startTitle}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        // Display the response in the UI
        document.getElementById("output1").textContent = `Paths: ${data.paths.join(", ")}`;
    } catch (error) {
        console.error("Error fetching data:", error);
        document.getElementById("output1").textContent = "Error fetching data.";
    }
}

// Event listener for a button click
document.getElementById("fetch-btn0").addEventListener("click", () => {
    const personId = document.getElementById("person-id").value;
    fetchTitles(personId);
});

// Event listener for a button click
document.getElementById("fetch-btn1").addEventListener("click", () => {
    const startTitle = document.getElementById("path-id").value;
    fetchPaths(startTitle);
});
