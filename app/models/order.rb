class Order < ApplicationRecord
  belongs_to :user

  validates :streetnumber, presence: true
  validates :streetname, presence: true
  validates :city, presence: true
  validates :state, presence: true
  validates :country, presence: true
  validates :total_price, presence: true
end
