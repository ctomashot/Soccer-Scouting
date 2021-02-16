class Api::V1::AuthController < ApplicationController

    def create
        
        scout = Scout.find_by(username: params[:username])

        if scout && scout.authenticate(params[:password])

            payload = { scout_id: scout.id }
            hmac_secret = 'my_secret'

            token = JWT.encode(payload, hmac_secret, 'HS256')
            
            render json: { scout: scout, token: token}, include: [:bookmarked_players]
        else
            render json: { error: 'Username or Password does not exist.'}
        end

    end

    def show
        hmac_secret = 'my_secret'

        token = request.headers[:Authorization].split(' ')[1]
        decoded_token = JWT.decode(token, hmac_secret, true, { algorithm: 'HS256' })
        scout_id = decoded_token[0]['scout_id']

        scout = Scout.find(scout_id)
        
        if scout
            
            render json: { scout: scout }, include: [:bookmarked_players]
        else
            render json: { error: 'Invalid token.'}
        end
    end

end