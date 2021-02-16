class BookmarkedPlayersController < ApplicationController
    def index
      bookmarked_players = BookmarkedPlayer.all
      render json: bookmarked_players
    end

  end