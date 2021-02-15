# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_02_12_182525) do

  create_table "bookmarked_players", force: :cascade do |t|
    t.integer "playerId"
    t.string "note"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "scoutId"
  end

  create_table "players", force: :cascade do |t|
    t.string "name"
    t.integer "age"
    t.string "position"
    t.integer "team_id"
    t.integer "minutesPlayed"
    t.integer "appearances"
    t.integer "goals"
    t.integer "clean_sheets"
    t.integer "conceded"
    t.integer "assists"
    t.integer "yellow_cards"
    t.integer "red_cards"
    t.integer "penalty_goals"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "scouts", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "teams", force: :cascade do |t|
    t.integer "teamId"
    t.integer "seasonGoals"
    t.integer "points"
    t.decimal "ppg_overall"
    t.integer "seasonGoalDifference"
    t.integer "seasonWins_home"
    t.integer "seasonWins_away"
    t.integer "seasonDraws_home"
    t.integer "seasonDraws_away"
    t.integer "seasonLosses_home"
    t.integer "seasonLosses_away"
    t.integer "matchesPlayed"
    t.string "name"
    t.integer "position"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
