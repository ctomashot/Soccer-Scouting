Rails.application.routes.draw do
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
