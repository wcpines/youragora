export default function getNext(mainArticle, articles){
  let index = articles.indexOf(mainArticle)


  if (index === articles.length - 1){ // If you're hitting 'next' after reading the last article, go back to first
    index = -1
  }

  let nextArticle = articles[index + 1]

  return {type: 'NEXT_ARTICLE', payload: nextArticle}
}
