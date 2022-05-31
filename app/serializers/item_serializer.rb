class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :img, :desc, :price, :sold

  def price 
    "$#{'%.2f'%object.price}"
  end

end
