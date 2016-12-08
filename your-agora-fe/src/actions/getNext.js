export default function getNext(mainArticle, articles, stashes){

  let index = articles.indexOf(mainArticle)

  if (index === articles.length - 1){ // If you're hitting 'next' after reading the last article, go back to first
    index = -1
  }

  let nextArticle = articles[index + 1]

  var alreadyStashed = stashes.map(stash => stash.id ).includes(mainArticle.article.id)

  var must;
  if(alreadyStashed){
    must = "Stashed"
  } else {
    must = "Stash"
  }



  return {type: 'NEXT_ARTICLE', payload: {nextArticle: nextArticle, stashes: must }}
}
