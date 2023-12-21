import sequelize from '../db';
import { DataTypes } from 'sequelize';

export const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING, defaultValue: "USER" }
});

export const Basket = sequelize.define('basket', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

export const BasketProduct = sequelize.define('basket_product', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

export const Product = sequelize.define('product', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    imageUrl: { type: DataTypes.STRING, unique: true, allowNull: false },
    title: { type: DataTypes.STRING, unique: true, allowNull: false },
    price: { type: DataTypes.INTEGER, defaultValue: 0 },
    rating: { type: DataTypes.INTEGER, defaultValue: 0 },
    recipe: { type: DataTypes.STRING, unique: true, allowNull: false },
    types: { type: DataTypes.ARRAY(DataTypes.INTEGER), allowNull: false},
    sizes: { type: DataTypes.ARRAY(DataTypes.INTEGER), allowNull: false},
});

export const Type = sequelize.define('type', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

export const Category = sequelize.define('category', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

export const Size = sequelize.define('size', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    count: { type: DataTypes.INTEGER, defaultValue: 26 },
});

export const Rating = sequelize.define('rating', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    rate: { type: DataTypes.INTEGER, allowNull: false },
});

export const TypeCategorySize = sequelize.define('type_category_size', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

User.hasOne(Basket);
Basket.belongsTo(User);

User.hasMany(Rating);
Rating.belongsTo(User);

Basket.hasMany(BasketProduct);
BasketProduct.belongsTo(Basket);

Type.hasMany(Product);
Product.belongsTo(Type);

Category.hasMany(Product);
Product.belongsTo(Category);

Size.hasMany(Product);
Product.belongsTo(Size);

Product.hasMany(BasketProduct);
BasketProduct.belongsTo(Product);

Type.belongsToMany(Category, { through: TypeCategorySize });
Category.belongsToMany(Type, { through: TypeCategorySize });
Size.belongsToMany(Category, { through: TypeCategorySize });
Category.belongsToMany(Size, { through: TypeCategorySize });
Size.belongsToMany(Type, { through: TypeCategorySize });
Type.belongsToMany(Size, { through: TypeCategorySize });