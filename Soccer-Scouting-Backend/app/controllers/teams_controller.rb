class TeamsController < ApplicationController
    def index
      teams = Team.order("created_at DESC")
      render json: teams
    end

  end