# Creating users:
Bemi713 = User.create(username: "Bemi713", email: "Bemi713@123.com", password: "123456")
Big_KO = User.create(username: 'Big_KO', email: 'BigKO@123.com', password: '123456')

# Creating categories:
basketball_shoes = Category.create(name: "basketball shoes")
shoe_accessories = Category.create(name: "shoe accessories")
shoe_storage = Category.create(name: "storage")


# Creating items
jordan_1 = Item.create(name: "Jordan 1", desc: "Micheal Jordans 1st signiture shoe in the team away colors. Black, red and white", price: 250.00, seller: Bemi713, img:'https://img.stadiumgoods.com/jordan-air-jordan-1-retro-high-og-banned-bred_11707794_34436093_1000.jpg')

jordan_2 = Item.create(name: "Jordan 2", desc: "Micheal Jordans 2nd signiture shoe with a colaboration with A Ma Maniere. Color Burgandy and sail", price: 350.00, seller: Bemi713, img:'https://www.nicekicks.com/files/2022/05/A-Ma-Maniere-Air-Jordan-2-Airness-DO7216-100-Lead.jpg')

jordan_3 = Item.create(name: "Jordan 3", desc: "Micheal Jordans 3rd signiture shoe in the team home colors. White, black and red", price: 450.00, seller: Big_KO, img:'https://cdn.flightclub.com/750/TEMPLATE/011304/1.jpg')

jordan_12 = Item.create(name: "Jordan 12", desc: "Micheal Jordans 12th signiture shoe in the home colors. White, black and red", price: 650.00, seller: Bemi713, img:'https://sneakerbardetroit.com/wp-content/uploads/2018/01/air-jordan-12-cherry-1.png')

flat_laces = Item.create(name: "Vintage laces", desc: "Thin flat vintage cream laces", price: 10.00, seller: Big_KO, img: 'https://cdn.shopify.com/s/files/1/0874/4652/products/flat-thin-basics-flat-thin-laces-vintage-cream-1_2000x.jpg?v=1614347529')

reflective_laces = Item.create(name: "3M reflective rope flat laces", desc: "Laces with reflective material woven into them", price: 15.50, seller: Bemi713, img:'https://cdn.shopify.com/s/files/1/0874/4652/products/flat-thin-3m-reflective-flat-laces-purple-1_2000x.jpeg?v=1530001253')

storage_container = Item.create(name: "Black Drop Front Box", desc: "Stackable plastic shoe box with window.", price: 70.00, seller: Bemi713, img: 'https://cdn-fsly.yottaa.net/55df7e1a2bb0ac7d800040c2/o~f_webp/v~4b.132.0.0/https://www.containerstore.com/catalogimages/421149/@mallymall_%20XL%20DFs%202.jpg?width=1200&height=1200&align=center'  )

storage_container = Item.create(name: "Clear Drop Front Box", desc: "Stackable plastic shoe box with clear container.", price: 50.00, seller: Bemi713, img:'https://cdn-fsly.yottaa.net/55df7e1a2bb0ac7d800040c2/o~f_webp/v~4b.132.0.0/https://www.containerstore.com/catalogimages/421151/@mallymall_%20XL%20DFs.jpg?width=1200&height=1200&align=center')

shoe_cleaner = Item.create(name: "Mid Sole Sneaker Cleaner", desc: "Keep the midsole clean", price: 10.00, seller: Big_KO, img: 'https://cdn.shopify.com/s/files/1/0874/4652/products/sneakerguard-midsole-paint-marker-boost-white-1_2000x.jpg?v=1614347453')

shoe_cleaner = Item.create(name: "Sneaker Cleaner", desc: "Keep your kicks clean", price: 25.00, seller: Big_KO, img: 'https://m.media-amazon.com/images/I/81pxFliJv6L._AC_UY575_.jpg')



# Creating category_items
CategoryItem.create(item: jordan_1, category: basketball_shoes)
CategoryItem.create(item: jordan_2, category: basketball_shoes)
CategoryItem.create(item: jordan_3, category: basketball_shoes)
CategoryItem.create(item: jordan_12, category: basketball_shoes)
CategoryItem.create(item: flat_laces, category: shoe_accessories)
CategoryItem.create(item: reflective_laces, category: shoe_accessories)
CategoryItem.create(item: storage_container, category: shoe_storage)
CategoryItem.create(item: storage_container, category: shoe_accessories)
CategoryItem.create(item: storage_container, category: shoe_accessories)
CategoryItem.create(item: storage_container, category: shoe_storage)
CategoryItem.create(item: shoe_cleaner, category: shoe_accessories)
CategoryItem.create(item: shoe_cleaner, category: shoe_accessories)


# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
