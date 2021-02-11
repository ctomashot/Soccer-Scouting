class RenamePasswordToPasswordDigest < ActiveRecord::Migration[6.0]
  def change
    rename_column :scouts, :password, :password_digest
  end
end
