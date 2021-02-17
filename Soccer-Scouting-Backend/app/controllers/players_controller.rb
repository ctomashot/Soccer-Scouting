class PlayersController < ApplicationController
  attr_accessor :name, :age, :position, :team_id, :minutesPlayed, :appearances, :goals, :clean_sheets, :conceded, :assists, :yellow_cards, :red_cards, :penalty_goals

    def index
      players = Player.all
      render json: players
    end
  
  end