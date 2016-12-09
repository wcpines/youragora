export default function getNext(mainArticle, articles, stashes){

  let index = articles.findIndex( (articleHash) => articleHash.article.id === mainArticle.id )

  if (index === articles.length - 1){ // If you're hitting 'next' after reading the last article, go back to first
    index = -1
  }

  let nextArticle = articles[index + 1]

  var must = stashes.some((stash)=>stash.article.id === nextArticle.article.id)
  // var must = stashes.map(stash => stash.article.id ).includes(mainArticle.id)

  // var must;
  // if(alreadyStashed){
  //   must = "Stashed"
  // } else {
  //   must = "Stash"
  // }
  



  return {type: 'NEXT_ARTICLE', payload: {articleObj: nextArticle, stashState: must }}
}
