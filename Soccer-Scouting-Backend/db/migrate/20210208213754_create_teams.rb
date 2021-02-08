class CreateTeams < ActiveRecord::Migration[6.0]
  def change
    create_table :teams do |t|
      t.integer :teamId
      t.integer :seasonGoals
      t.integer :points
      t.decimal :ppg_overall
      t.integer :seasonGoalDifference
      t.integer :seasonWins_home
      t.integer :seasonWins_away
      t.integer :seasonDraws_home
      t.integer :seasonDraws_away
      t.integer :seasonLosses_home
      t.integer :seasonLosses_away
      t.integer :matchesPlayed
      t.string :name
      t.integer :position

      t.timestamps
    end
  end
end
