class ScoutsController < ApplicationController
    def index
      scouts = Scout.all
      render json: scouts
    end

    def create
      scout = Scout.create(scout_params)
      if scout.valid?
        payload - {scout_id: scout.id}
        token = encode_token(payload)
        render json: {scout: scout, jwt: token}
      else
        render json: {errors: scout.errors.full_messages}, status: :not_acceptable
      end
    end

    private

    def scout_params
      params.permit(:username, :password)
    end
  
  end