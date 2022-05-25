class Item < ApplicationRecord
belongs_to :seller, class_name: "User", foreign_key: "seller_id"
    belongs_to :buyer, class_name: "User", foreign_key: "buyer_id", optional: true
    has_many :category_items
    has_many :categories, through: :category_items

    # validates :name, presence: true, message: "Must submit with a name!"
    # validates :price, presence: true, numericality: { greater_than: 0, less_than: 3000 }
end
