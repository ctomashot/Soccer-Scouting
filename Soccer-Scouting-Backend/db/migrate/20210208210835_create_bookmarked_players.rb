class CreateBookmarkedPlayers < ActiveRecord::Migration[6.0]
  def change
    create_table :bookmarked_players do |t|
      t.integer :playerId
      t.string :note

      t.timestamps
    end
  end
end
