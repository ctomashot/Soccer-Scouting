class Api::V1::AuthController < ApplicationController

    def create
        scout = Scout.find_by(username: params[:username])

        if scout && scout.authenticate(params[:password_digest])
            render json: scout
        else
            render json: { error: 'Username or Password does not exist.'}
        end

    end

end