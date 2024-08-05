export enum SelectedPage {
  Home = "Home",
  Favorite = "Favorite",
  Cart = "Cart",
  Profile = "Profile",
  Seeting = "Setting",
}

export interface PopularFoodItemsType {
  id: number | string;
  name: string;
  image: string;
  price: number;
  discount: number;
  rating: number;
}

export interface HomePageViewInfor {
  id: number;
  image: string;
  description: string;
  title: string;
}
