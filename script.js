async function fetchpathfollowers(startTitle) {
    const apiUrl = `https://chrishawnmiles.pythonanywhere.com/paths_with_followers/${starttitle}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        // Display the response in the UI
        document.getElementById("output0").textContent = `Path: ${data.followers.join(", ")}`;
    } catch (error) {
        console.error("Error fetching data:", error);
        document.getElementById("output0").textContent = "Error fetching data.";
    }
}


async function fetchCurrenTtitle(titleName) {
    const apiUrl = `https://chrishawnmiles.pythonanywhere.com/current_title/${titlename}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        // Display the response in the UI
        // document.getElementById("output1").textContent = `People this as a current title: ${data.current_title.join(", ")}`;
        document.getElementById("output1").innerHTML = `Paths: <br> ${data.paths.map(path => path.join(", ")).join("<br>")}`;
    } catch (error) {
        console.error("Error fetching data:", error);
        document.getElementById("output1").textContent = "Error fetching data.";
    }
}

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
        document.getElementById("output2").textContent = `Their roles: ${data.titles.join(", ")}`;
    } catch (error) {
        console.error("Error fetching data:", error);
        document.getElementById("output2").textContent = "Error fetching data.";
    }
}


// Event listener for a button click
document.getElementById("fetch-btn0").addEventListener("click", () => {
    const startTitle = document.getElementById("current-title-id").value;
    fetchTitles(personId);
});

// Event listener for a button click
document.getElementById("fetch-btn1").addEventListener("click", () => {
    const titleName = document.getElementById("title-id").value;
    fetchCurrenTtitle(titleName);
});

// Event listener for a button click
document.getElementById("fetch-btn2").addEventListener("click", () => {
    const personId = document.getElementById("path-follower-id").value;
    fetchpathfollowers(startTitle);
});

