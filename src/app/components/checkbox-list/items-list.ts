export interface Item {
  name: string;
  selected: boolean;
  disabled: boolean;
}

export default interface ItemList extends Item{
  items: Item[];
}
