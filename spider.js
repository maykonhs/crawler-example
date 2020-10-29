let request =  require('request')
let cheerio =  require('cheerio')
let fs = require('fs')

request('http://www.imdb.com/chart/moviemeter', function(err, res, body) {
  if (err) {
    console.log(`erro: ${err}`);    
  }

  let $ = cheerio.load(body)

  $('.lister-list tr').each(function() {
    let title = $(this).find('.titleColumn a').text().trim()
    let rating = $(this).find('.imdbRating strong').text().trim()
    fs.appendFile('imdb.txt', title + ' ' + rating + '\n')    
  })
})