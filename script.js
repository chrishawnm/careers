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
        document.getElementById("output").textContent = `Titles: ${data.titles.join(", ")}`;
    } catch (error) {
        console.error("Error fetching data:", error);
        document.getElementById("output").textContent = "Error fetching data.";
    }
}

// Event listener for a button click
document.getElementById("fetch-btn").addEventListener("click", () => {
    const personId = document.getElementById("person-id").value;
    fetchTitles(personId);
});
