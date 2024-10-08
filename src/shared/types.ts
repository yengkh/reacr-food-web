export enum SelectedPage {
  Home = "Home",
  Favorite = "Favorite",
  Cart = "Cart",
  Profile = "Profile",
  Seeting = "Setting",
}

export interface PopularFoodItemsType {
  id: number;
  name: string;
  image: string;
  price: number;
  discount: number;
  rating: number;
  type: string;
}

export interface HomePageViewInfor {
  id: number;
  image: string;
  description: string;
  title: string;
}

export interface FoodMenuType {
  id: number;
  image: string;
  name: string;
}

export interface FoodItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface AddToFavoriteType {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  quantity: number;
}
