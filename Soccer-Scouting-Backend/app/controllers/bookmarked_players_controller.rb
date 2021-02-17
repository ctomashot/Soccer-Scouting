class BookmarkedPlayersController < ApplicationController
    def index
      bookmarked_players = BookmarkedPlayer.all
      render json: bookmarked_players
    end

    def create
      bookmarked_player = BookmarkedPlayer.create(bookmarked_player_param)
      render json: bookmarked_player
    end
  
    def update
      bookmarked_player = BookmarkedPlayer.find(params[:id])
      bookmarked_player.update(note: params[:note])
      render json: bookmarked_player
    end
  
    def destroy
      bookmarked_player = BookmarkedPlayer.find(params[:id])
      bookmarked_player.destroy
      head :no_content, status: :ok
    end

    private
    def bookmarked_player_param
      params.require(:bookmarked_player).permit(:scout_id, :player_id, :note)
    end

  end