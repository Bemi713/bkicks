class ItemSerializer < ActiveModel::Serializer
 
  def price 
    "#{'%.2f'%object.price}"
  
  end 
  
  attributes :id, :name, :img, :desc, :price, :sold

  has_one :seller, class_name: "User", foreign_key: "seller_id"
  has_one :buyer, class_name: "User", foreign_key: "buyer_id", optional: true

  has_many :category_items
  has_many :categories, through: :category_items

end


