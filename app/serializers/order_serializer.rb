class OrderSerializer < ActiveModel::Serializer
  attributes :id, :streetnumber, :streetname, :city, :state, :country, :total_price, :zip_code
  has_one :user
end