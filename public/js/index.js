const API_ACCESSSTOKEN = 'LLWBtBO1lLeQv71VQs_yWinCPrknvU1ujWvoLyg_'
const dropdowns = document.querySelectorAll('.form-select')

for (let i = 0; i < dropdowns.length; i++) {
    dropdowns[i].addEventListener('change', (event) => {
        console.log(event.target.value)
        usePredictHQ(event.target.value, i)
    }); 
};

function usePredictHQ(eventsData, index) {

    let query = `https://api.predicthq.com/v1/events/?place.scope=5389489&category=${eventsData}`// append categories from predicthq /
    let headers = {
      "Content-Type": "application/json",
      "Authorization": "Bearer LLWBtBO1lLeQv71VQs_yWinCPrknvU1ujWvoLyg_",    
    };
  
    fetch(query, {
      method: "GET",
      headers,
    })
      .then(res => {
        return res.json()
      })
      .then(data => {
        console.log(data)
        categories = data
        populatePredictHQ(data, index)
      });      
  };

// <img class="thumbnail" src="${data.results[1].title}">

  function populatePredictHQ(data, index) {
  //   document.querySelector('#search-0').innerHTML = `
  //   <div class="columns medium-7" id="search-image-div">
  //   <h3>Event Results</h3>
  // <p class="size-weight" value="serving-size">${data.results[1].title}</p>
  // </div>
  //   `

    for (let i = 0; i < data.results.length; i++) {
      const resultsEl = document.querySelector(`#search-${index}`)
      resultsEl.innerHTML = "<h3>Event Results</h3>"
      const headerEl = document.createElement('p')
      headerEl.classList.add('size-weight')
      headerEl.textContent = data.results[i].title
      resultsEl.appendChild(headerEl)      
    }
  }