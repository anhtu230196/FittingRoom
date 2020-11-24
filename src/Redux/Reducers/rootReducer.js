import { combineReducers } from "redux";
import CategoriesReducer from "./categoriesReducer";
import ProductReducer from "./productReducer";
import choosenCategory from "./choosenCategoryReducer";
import ModelReducer from "./modelReducer";

const RootReducer = combineReducers({
  products: ProductReducer,
  categories: CategoriesReducer,
  choosenCategory,
  ModelReducer,
});

export default RootReducer;
