class ApplicationController < ActionController::API

   def issue_token(scout)
    JWT.encode({scout_id: scout.id}, ENV['secret_key'], 'HS256')
   end

   def current_scout
    @scout ||= Scout.find_by(id: scout_id)
   end

   def token
    request.headers['Authorization']
   end

   def deoded_token
    begin
        # [{user_id: 1}, {algo: 'hs256'}]
        JWT.decode(token, ENV['secret_key'], true, { :algorithm => 'HS256'})
    rescue JWT::DecodeError
        [{}]
    end
   end
   
   def scout_id
    decoded_token.first['scout_id']
   end

   def logged.in?
    !!current_scout
   end
end
