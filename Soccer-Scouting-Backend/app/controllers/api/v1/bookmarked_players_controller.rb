class BookmarkedPlayersController < ApplicationController
    def index
      bookmarked_players = BookmarkedPlayer.order("created_at DESC")
      render json: bookmarked_players
    end

  end