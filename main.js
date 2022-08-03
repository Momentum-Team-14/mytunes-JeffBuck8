const container = document.querySelector(".container")
// const 
// 
    

// const document.createElement("audio")
// console.log(songs)

// let searchBar = document.createElement("div")
// searchBar.classList.add("searchBar")
// container.appendChild(searchBar)

// let typeBox = document.createElement("input")
// typeBox.classList.add("typebox")
// searchBar.appendChild(typeBox)

// let searchButton = document.createElement("button")
// searchButton.innerText = "Search"
// searchButton.classList.add('button')
// searchBar.appendChild(searchButton)


let resultsDiv = document.querySelector('#results')
console.log('results div', resultsDiv)


let searchBaseUrl = 'https://itunes.apple.com/search?term='

// search form
    searchBar = document.querySelector('#search-form')
    searchBar.addEventListener('submit', (event) => { event.preventDefault()
    let searchUrl = `${searchBaseUrl}`
    searchUrl += searchBar.querySelector("input").value
    
           
            console.log('search url', searchUrl)
            getSearchResults(searchUrl)
        })
function getSearchResults(url){ console.log(url)   
    fetch(url, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })
    // response is whatever the fetch returns
    .then(function (response) {
        return response.json()
    })
    // data is whatever the above code returns, in this case response.json()
    .then(function (data) {
        let searchResults = data.results
        showSongName(searchResults)
        
    })
}
    let resultsArea = document.createElement('div')
    resultsArea.classList.add("resultsBar")
    
    container.appendChild(resultsArea)
    
    function showSongName(songArray) {
        resultsArea.innerHTML = ''
        for (let song of songArray){
            let songReturnDiv = document.createElement("div")
            songReturnDiv.classList.add("songReturn")
            resultsArea.appendChild(songReturnDiv)
            
            
            let picImg = document.createElement("img")
            picImg.classList.add("picImg")
            picImg.src = `${song.artworkUrl100}`
            songReturnDiv.appendChild(picImg)
            
            
            let bandName = document.createElement("div")
            bandName.classList.add("bandName")
            bandName.innerText = `${song.artistName}`
            songReturnDiv.appendChild(bandName)
            
            let songTitle = document.createElement("div")
            songTitle.classList.add("songTitle")
            songTitle.innerText = `${song.trackName}`
            songReturnDiv.appendChild(songTitle)

            // let playAudio = document.querySelector("#playAudio");
            // songReturnDiv.addEventListener("click");
            // playAudio.src = `${results.previewUrl}`
            
            
        }}
        
        
    