async function fetchUserData() {
  const apiUrl = "https://jsonplaceholder.typicode.com/users"; // API URL
  const dataContainer = document.getElementById("api-data"); // Data container element

  try {
    const response = await fetch(apiUrl); // Fetch data from the API
    const users = await response.json(); // Convert response to JSON

    // Clear the loading message
    dataContainer.innerHTML = "";

    // Create and append user list
    const userList = document.createElement("ul"); // Create a <ul> element
    users.forEach((user) => {
      const listItem = document.createElement("li"); // Create <li> for each user
      listItem.textContent = user.name; // Set text content to user's name
      userList.appendChild(listItem); // Append <li> to <ul>
    });
    dataContainer.appendChild(userList); // Append <ul> to the data container
  } catch (error) {
    // Clear existing content and display an error message
    dataContainer.innerHTML = "Failed to load user data.";
  }
}

// Invoke fetchUserData on DOMContentLoaded
document.addEventListener("DOMContentLoaded", fetchUserData);
