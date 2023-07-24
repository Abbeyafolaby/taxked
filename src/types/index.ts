import FullList from "../model/FullList";
import ListItem from "../model/ListItem";

export interface List {
  list: ListItem[];
  load(): void;
  save(): void;
  clearList(): void;
  addItem(itemObj: ListItem): void;
  removeItem(id: string): void;
}

export interface Item {
  id: string;
  item: string;
  checked: boolean;
}

export interface DOMList {
  ul: HTMLUListElement;
  clear(): void;
  render(fullList: FullList): void;
}