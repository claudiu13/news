const options = {
    method: 'GET',
    headers: {
		'X-RapidAPI-Key': '2a990bb4d5mshdd5a80fecaea4e2p1eb7eajsn557076f50f17',
		'X-RapidAPI-Host': 'crypto-pulse.p.rapidapi.com'
    }
};

fetch('https://crypto-pulse.p.rapidapi.com/news', options)
	.then(response => response.json())
    .then(data => {
        const list = data;

        list.map((item) => {
            console.log(item);
           const name = item.title;
           const source = item.source;
           const published = item.date;
           const link = item.link;
           const descr = item.description;
           const news = `<div class="newsItem"><li><a href="${link}">${name}</a> <p>${descr}</p> <h6>${source}</h6> <h6>${published}</h6></li></div>`;
           document.querySelector('.title').innerHTML += news
        })
    })
	.catch(err => console.error(err));