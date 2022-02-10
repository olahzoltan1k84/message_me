class RenameUsername < ActiveRecord::Migration[7.0]
  def change
    rename_column :users, :Username, :username
  end
end
