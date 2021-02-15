class RemoveNameFromScouts < ActiveRecord::Migration[6.0]
  def change
    remove_column :scouts, :name, :string
  end
end
