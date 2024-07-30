export enum SelectedPage {
  Home = "home",
  Favorite = "favorite",
  Cart = "cart",
  Profile = "profile",
}

export interface PopularFoodItemsType {
  id: number;
  name: string;
  image: string;
  price: number;
  discount: number;
  rating: number;
}
