class CreatePlayers < ActiveRecord::Migration[6.0]
  def change
    create_table :players do |t|
      t.string :name
      t.integer :age
      t.string :position
      t.integer :teamId
      t.integer :minutesPlayed
      t.integer :appearances
      t.integer :goals
      t.integer :clean_sheets
      t.integer :conceded
      t.integer :assists
      t.integer :yellow_cards
      t.integer :red_cards
      t.integer :penalty_goals

      t.timestamps
    end
  end
end
