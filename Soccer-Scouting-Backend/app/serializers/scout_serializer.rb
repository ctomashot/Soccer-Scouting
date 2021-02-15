class ScoutSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_many :bookmarked_players
end
