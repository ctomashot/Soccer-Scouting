Rails.application.routes.draw do
  resources :teams
  resources :players
  resources :bookmarked_players
  resources :scouts
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
