let pastSearch = document.getElementById('pastSearch')
fetch('	https://imgclasss.herokuapp.com/test').then(response => {
    return response.json()
  })
  .then(json => {
    let entries = json.map((entry) => {

        return ` <div class="column"><li>
        <img src="${entry.image}" width="250" height="200">
          <h5 class="card-title">${entry.label}</h5>
          </li></div>`
    })

    pastSearch.innerHTML = entries
    console.log(json)
})