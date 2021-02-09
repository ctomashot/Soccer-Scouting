class Scout < ApplicationRecord
    has_many :bookmarked_players
    has_many :players, through: :bookmarked_players
end
