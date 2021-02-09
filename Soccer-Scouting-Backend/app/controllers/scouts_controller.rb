class ScoutsController < ApplicationController
    def index
      scouts = Scout.order("created_at DESC")
      render json: scouts
    end
  
  end