class BookmarkedPlayersController < ApplicationController
    def index
      bookmarked_players = BookmarkedPlayer.order("created_at DESC")
      render json: bookmarked_players
    end
  
    def create
      bookmarked_players = BookmarkedPlayer.create(Player_param)
      render json: bookmarked_players
    end
  
    def update
      bookmarked_players = BookmarkedPlayer.find(params[:id])
      bookmarked_players.update_attributes(Player_param)
      render json: bookmarked_players
    end
  
    def destroy
      bookmarked_players = BookmarkedPlayer.find(params[:id])
      bookmarked_players.destroy
      head :no_content, status: :ok
    end
    
    #private
    #  def Player_param
    #    params.require(:bookmarked_players).permit(:task, :completed)
    #  end
  end