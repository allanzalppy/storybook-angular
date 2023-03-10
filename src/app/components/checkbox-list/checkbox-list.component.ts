import { Component, Input, Output, EventEmitter } from '@angular/core';
import ItemList from './items-list';

@Component({
  selector: 'storybook-checkbox-list',
  templateUrl: './checkbox-list.component.html',
  styleUrls: ['./checkbox-list.component.scss']
})
export class CheckBoxList {
  @Input()
  itemList: ItemList = {
    name: "",
    selected: false,
    disabled: false,
    items: []
  };
  @Input()
  allChecked: boolean = false;

  isFewSelected(): boolean {
    return this.itemList.items.filter(t => t.selected).length > 0 && !this.allChecked;
  }

  setAll(selected: boolean) {
    this.allChecked = selected;
    if (this.itemList.items == null) {
      return;
    }
    this.itemList.items.forEach((T, I)=> this.itemList.items[I].selected = selected);
    console.log(this.itemList.items);
  }

  updateAllComplete(i:number,value:boolean) {
    this.itemList.items[i].selected=value;
    this.allChecked = this.itemList.items != null && this.itemList.items.every(t => t.selected);
  }

}
