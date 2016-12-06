Rails.application.routes.draw do

  resources :users
  resources :sessions
  resources :articles
  resources :reactions
  resources :stashes

end
