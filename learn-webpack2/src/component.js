const API_KEY = 'AIzaSyDNRomxt46tmR6O42nQ3GPuZxXdo8mlAfc';
let titledata = [];
export const fetchData = async () => {
    await getData();
    showData();
}
const getData = async () => {
    const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&type=video&part=snippet&maxResults=20`);
    const APIdata = await response.json();
    console.log(APIdata);
    titledata = APIdata.items;
    console.log(titledata);
}
const showData = async () => {
    titledata.forEach((Element) => {
        let title = document.createElement("h1");
        title.innerHTML = Element.snippet.channelTitle;
        document.body.appendChild(title);
    })
}