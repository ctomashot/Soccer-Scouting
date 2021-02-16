class CreateBookmarkedPlayers < ActiveRecord::Migration[6.0]
  def change
    create_table :bookmarked_players do |t|
      t.integer :scout_id
      t.integer :player_id
      t.string :note

      t.timestamps
    end
  end
end
