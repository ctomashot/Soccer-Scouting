class AddScoutIdToBookmarkedPlayers < ActiveRecord::Migration[6.0]
  def change
    add_column :bookmarked_players, :scoutId, :integer
  end
end
