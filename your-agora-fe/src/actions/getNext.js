export default function getNext(mainArticle, articles, stashes){

  let index = articles.findIndex( (article) => article.id === mainArticle.id )
  // If you're hitting 'next' after reading the last article, go back to first
  if (index === articles.length - 1){
    index = -1
  }

  let nextArticle = articles[index + 1]
  var must = stashes.some((stash)=>stash.article.id === nextArticle.id)





  return {type: 'NEXT_ARTICLE', payload: {article: nextArticle, stashState: must }}
}
