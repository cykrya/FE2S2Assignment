import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


function addTodo(title, artist, album, image) {
  let div = document.getElementById("lists");
  let cdiv = document.createElement("div");
  cdiv.innerHTML = `
  <div class="list-img">
    <img id="song-image" href="${image}">
  </div>
  <div class="list-detail">
    <p id="song-title">${title}</p>
    <p id="song-artist">${artist}</p>
    <p id="song-album">${album}</p>
    <div>
    <button type="button" class="btn-track-info" >Track info</button>
    </div>
  </div>
  `;
  cdiv.classList.add("list");
  div.appendChild(cdiv);
  document.querySelectorAll(".btn-track-info").forEach((element) => {
    element.addEventListener("click", fetchWithAsyncAwait);
  });
}
const url = `https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json`;

const fetchWithAsyncAwait = async () => {
  const response = await fetch(url, {
    method: "GET"
  })
    .then((res) => res.json())
    .catch((err) => {
      alert("ada error");
    });

  console.log(response);
};


document.querySelectorAll(".btn-track-info").forEach((element) => {
  element.addEventListener("click", fetchWithAsyncAwait);
});

reportWebVitals();
