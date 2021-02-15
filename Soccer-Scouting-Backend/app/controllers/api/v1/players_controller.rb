class PlayersController < ApplicationController
    def index
      players = Player.order("created_at DESC")
      render json: players
    end
  
  end