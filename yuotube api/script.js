// script.js
// Add your YouTube API key here
const API_KEY = 'AIzaSyDo8lygxWLY2ZK0g2__BZSVClrvhBq8Kao';

document.addEventListener('DOMContentLoaded', function () {
  // Default video ID (replace with your desired default video)
  const defaultVideoId = 'pgc3J2hBBEU';

  // Display the default video
  displayVideo(defaultVideoId, 'defaultVideo');
});

function searchYouTube() {
  const searchInput = document.getElementById('searchInput').value;

  // Make sure the search input is not empty
  if (searchInput.trim() === '') {
    alert('Please enter a video ID or search query');
    return;
  }

  // Check if the input is a video ID
  const isVideoId = /^[a-zA-Z0-9_-]{11}$/.test(searchInput);
  if (isVideoId) {
    // Display the video by ID
    displayVideo(searchInput, 'results');
  } else {
    // Fetch videos using YouTube Data API
    fetch(https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchInput}&key=${API_KEY})
      .then(response => response.json())
      .then(data => displayResults(data.items))
      .catch(error => console.error('Error fetching data:', error));
  }
}

function displayResults(videos) {
  const resultsContainer = document.getElementById('results');
  resultsContainer.innerHTML = '';

  videos.forEach(video => {
    const videoTitle = video.snippet.title;
    const videoId = video.id.videoId;

    const videoElement = document.createElement('div');
    videoElement.innerHTML = `
      <h3>${videoTitle}</h3>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
    `;

    resultsContainer.appendChild(videoElement);
  });
}

function displayVideo(videoId, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';

  const videoElement = document.createElement('div');
  videoElement.innerHTML = `
    <h3>Video</h3>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
  `;

  container.appendChild(videoElement);
