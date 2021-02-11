# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'rest-client'
require 'net/http'
require 'json'

teamUrl = 'https://api.footystats.org/league-tables?key=87d9821cf02ae5218946683b1e3c9c17ccb9ac1cc21b9bede96d7c8362eb4cb2&season_id=4759'
turi = URI(teamUrl)
tresponse = Net::HTTP.get(turi)
tapi_arr = JSON.parse(tresponse)["data"]["league_table"]

playerUrl = 'https://api.footystats.org/league-players?key=87d9821cf02ae5218946683b1e3c9c17ccb9ac1cc21b9bede96d7c8362eb4cb2&league_id=4759'
response = RestClient.get(playerUrl)
papi_arr = JSON.parse(response)["data"]


Team.delete_all
Scout.delete_all
Player.delete_all
BookmarkedPlayer.delete_all

tapi_arr.each do |team|
    t = Team.create!(
        teamId: team["id"],
        seasonGoals: team["seasonGoals"],
        points: team["points"],
        ppg_overall: team["ppg_overall"],
        seasonGoalDifference: team["seasonGoalDifference"],
        seasonWins_home: team["seasonWins_home"],
        seasonWins_away: team["seasonWins_away"],
        seasonDraws_home: team["seasonDraws_home"],
        seasonDraws_away: team["seasonDraws_away"],
        seasonLosses_home: team["seasonLosses_home"],
        seasonLosses_away: team["seasonLosses_away"],
        matchesPlayed: team["matchesPlayed"],
        name: team["name"],
        position: team["position"]
    )
    papi_arr.each do |player|
        if player["club_team_id"] == t.teamId
        Player.create!(
            name: player["full_name"],
            age: player["age"],
            position: player["position"],
            team_id: t.id,
            minutesPlayed: player["minutes_played_overall"],
            appearances: player["appearances_overall"],
            goals: player["goals_overall"],
            clean_sheets: player["clean_sheets_overall"],
            conceded: player["conceded_overall"],
            assists: player["assists_overall"],
            yellow_cards: player["yellow_cards_overall"],
            red_cards: player["red_cards_overall"],
            penalty_goals: player["penalty_goals"]
        )
        end
    end
end



cole = Scout.create(name: "Cole", username: "ctomashot", password: "1234")

testPlayer = BookmarkedPlayer.create(playerId: 600, note: "test note", scoutId: cole.id)