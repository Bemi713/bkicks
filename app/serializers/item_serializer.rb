class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :img, :desc, :price, :sold
end
