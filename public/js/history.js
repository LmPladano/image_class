let pastSearch = document.getElementById('pastSearch')
fetch('postgres://quuwbqfh:uUrA0qQHwkofMq2rRpejFgtZYzwtrkRs@rajje.db.elephantsql.com:5432/quuwbqfh').then(response => {
    return response.json()
  })
  .then(json => {
    let entries = json.map((entry) => {

        return `<li>
        <img src="${entry.image}" width="250" height="100">
          <h5 class="card-title">${entry.label}</h5>
          </li>`
    })

    pastSearch.innerHTML = entries
    console.log(json)
})