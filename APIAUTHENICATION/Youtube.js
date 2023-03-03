const outerContainer = document.querySelector('.outer-container');
const channelForm = document.getElementById('channel-form');
const channelInput = document.getElementById('channel-input');
const API_KEY = 'AIzaSyDNRomxt46tmR6O42nQ3GPuZxXdo8mlAfc';
const API_URL = 'https://www.googleapis.com/youtube/v3/search?key';
// const loaderContainer=document.getElementById('containerLoader');
const numbers = {
  million: 1000000,
  thousand: 1000
}
let currentPage;
let itemsPerPage = 3;
let videoData = [];
let noOfPages;
channelForm?.addEventListener('submit', e => {
  e.preventDefault();
  const inputValue = channelInput.value;
  if (inputValue == "")
    alert("Provide Some Input");
  else {
    outerContainer.innerHTML = '<h1>Loading...</h1>'
    fetchData(inputValue);
  }
});
async function fetchData(Value) {
  const query = Value;
  const API_URL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&type=video&part=snippet&maxResults=15&q=${query}`;
  const response = await fetch(API_URL);
  const APIdata = await response.json();
  const videoId = APIdata.items.map((element) => {
    return element.id.videoId;
  }).join(',');
  const newResponse = await fetch(`https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&part=snippet,statistics&id=${videoId}`);
  const newAPIdata = await newResponse.json();
  videoData = newAPIdata.items;
  currentPage = 1;
  updateCards();
}
function updateCards() {
  if (outerContainer)
    outerContainer.innerHTML = "";
  let startIndex = (currentPage - 1) * itemsPerPage;
  let endIndex = startIndex + itemsPerPage;
  for (let index = startIndex; (index < endIndex && index < videoData.length); index++) {
    let item = showCard(videoData[index]);
    outerContainer?.appendChild(item);
  }
  GeneratePagination();

}
function showCard(element) {
  const date = convertDateFormat(element.snippet?.publishedAt);
  let views = ViewsConverter(element.statistics?.viewCount);
  const title = element.snippet?.title;
  const imgurl = element.snippet?.thumbnails.medium.url;
  const channelTitle = element.snippet?.channelTitle;
  const describe = element.snippet?.description;
  let content = document.createElement("div");
  content.classList.add('thumbnail');
  content.innerHTML = `
        <div class="card">
        <h1 id="title">
        <a target="_blank" href="https://youtube.com/watch?v=${element.id}">${title}
        </a></h1> 
                <img src="${imgurl}"></img>
                <h2 id="channelTitle">${channelTitle}</h2>
                <p>${describe}</p>
                <h2 id="publishedDate">${views}</h2> 
                <h2 id="publishedDate">${date}</h2>      
        </div>
    `;
  return content;
}
function convertDateFormat(currentDate) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(currentDate).toLocaleDateString("en-US", options);
}
function ViewsConverter(Views) {
  if (Views >= numbers.million) {
    return Views.slice(0, -6) + '.' + Views.slice(-6, -5) + 'M';
  }
  if (Views >= numbers.thousand) {
    return Views.slice(0, -3) + 'k';
  }

  return Views;
}

function GeneratePagination() {
  let totalPages = Math.ceil(videoData.length / itemsPerPage);
  let prevBtn = `<li id="prevsBtn">
  <a class="page-link"  onclick="prevBtn()" href="#" >Prev</a>
</li>`;
  let nextBtn = `<li  id="nextBttn">
  <a class="page-link" onClick="nextBtn()" href="#" >Next</a>
</li>`;
  let buttons = '';
  let activeClass = '';
  for (let index = 1; index <= totalPages; index++) {
    buttons += `<li class="page-item numberButtons ${activeClass}" id="page${index}">
  <a class="page-link" onClick="pageUpdate(${index})" href="#">${index}</a></li>`
  }
  const pagesContainer = document.getElementById('pagination');
  if (pagesContainer)
    pagesContainer.innerHTML = `${prevBtn} ${buttons} ${nextBtn}`
  ButtonsStyle();
}
function nextBtn() {
  currentPage++;
  updateCards();
}
function prevBtn() {
  currentPage--;
  updateCards();
}
function pageUpdate(pageNumber) {
  currentPage = parseInt(pageNumber);
  updateCards();
}
function ButtonsStyle() {

  const currentElement = document.getElementById(`page${currentPage}`);

  const previousBtn = document.getElementById('prevsBtn');
  const nextButn = document.getElementById('nextBttn');
  if (currentElement) {
    currentElement?.classList.add('active');
  }
  if (currentPage == 1) {
    previousBtn?.classList.add('disabled');
  }
  else {
    previousBtn?.classList.remove('disabled');
  }
  if (currentPage == Math.ceil(videoData.length / itemsPerPage)) {
    nextButn?.classList.add('disabled');
  }
  else {
    nextButn?.classList.remove('disabled');
  }
}
