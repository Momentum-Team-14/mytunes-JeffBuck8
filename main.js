console.log('connected')

let resultsDiv = document.querySelector('#results')
console.log('results div', resultsDiv)
let searchUrl = 'https://itunes.apple.com/search?term=tom+petty&media=music'

fetch(searchUrl, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
})
    // response is whatever the fetch returns
    .then(function (response) {
        return response.json()
    })
    // data is whatever the above code returns, in this case response.json()
    .then(function (data) {
        let songs = data.results
        console.log(songs)
        
    }
    
    function showSongName(songArray)
    for (let song of songs){
        let songCard = document.createElement("div");
        songCard.classList.add("songCard")
        
        
        let picImg = document.createElement('img')
        picImg.classList.add('pic')
        picImg.src = `${song.artworkUrl100}`
        songCard.appendChild(picImg)
    })