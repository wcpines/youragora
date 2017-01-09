export default function readStashed(article){
  return {type: 'READ_STASHED_ARTICLE', payload: {article: article, stashState: true }}
}
