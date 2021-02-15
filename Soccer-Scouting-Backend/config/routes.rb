Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :teams
      resources :players
      resources :bookmarked_players
      resources :scouts
      post "/auth", to: "auth#create"
      get '/current_scout', to: 'auth#show'
    end
  end
end
