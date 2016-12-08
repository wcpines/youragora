Rails.application.routes.draw do

  resources :users
  resources :sessions
  resources :articles
  resources :reactions
  resources :stashes

  post '/fetch_first_article' , to: 'articles#fetch_first_article'

end
