Rails.application.routes.draw do

  post "/bookmarked_players/update", to: "bookmarked_players#update"
  #post "/bookmarked_players", to: "bookmarked_players#create"

  resources :teams
  resources :players
  resources :bookmarked_players
  resources :scouts
  
  namespace :api do
    namespace :v1 do
      
      post "/auth", to: "auth#create"
      get '/current_scout', to: 'auth#show'
    end
  end
end
