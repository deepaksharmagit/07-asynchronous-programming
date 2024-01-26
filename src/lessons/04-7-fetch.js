async function fetchDataAsync() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/3"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

async function fetchDataAndProcess() {
  try {
    const data = await fetchDataAsync();
    console.log(data.title);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchDataAndProcess();
