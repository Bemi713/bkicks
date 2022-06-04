class AddFieldsToOrder < ActiveRecord::Migration[6.1]
  def change
    add_column :orders, :streetnumber, :string
    add_column :orders, :streetname, :string
    add_column :orders, :city, :string
    add_column :orders, :country, :string
    add_column :orders, :total_price, :float
  end
end
