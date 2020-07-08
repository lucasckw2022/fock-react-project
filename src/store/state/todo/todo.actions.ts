export type TodoActions =
  | NewItemInputValueChanged
  | ItemFetchRequested
  | ItemFetched
  | ItemAddRequested
  | ItemAdded
  | ItemRemoveRequested
  | ItemRemoved;

export interface NewItemInputValueChanged {
  type: 'NEW_ITEM_INPUT_VALUE_CHANGED';
  value: string;
}
export function newItemInputValueChanged(value: string): NewItemInputValueChanged {
  return {
    type: 'NEW_ITEM_INPUT_VALUE_CHANGED',
    value,
  };
}

export interface ItemFetchRequested {
  type: 'ITEM_FETCH_REQUESTED';
}
export function itemFetchRequested(): ItemFetchRequested {
  return {
    type: 'ITEM_FETCH_REQUESTED',
  };
}

export interface ItemFetched {
  type: 'ITEM_FETCHED';
  items: string[];
}
export function itemFetched(items: string[]): ItemFetched {
  return {
    type: 'ITEM_FETCHED',
    items,
  };
}

export interface ItemAddRequested {
  type: 'ITEM_ADD_REQUESTED';
  item: string;
}
export function itemAddRequested(item: string): ItemAddRequested {
  return {
    type: 'ITEM_ADD_REQUESTED',
    item,
  };
}

export interface ItemAdded {
  type: 'ITEM_ADDED';
  item: string;
}
export function itemAdded(item: string): ItemAdded {
  return {
    type: 'ITEM_ADDED',
    item,
  };
}

export interface ItemRemoveRequested {
  type: 'ITEM_REMOVE_REQUESTED';
  item: string;
}
export function itemRemoveRequested(item: string): ItemRemoveRequested {
  return {
    type: 'ITEM_REMOVE_REQUESTED',
    item,
  };
}

export interface ItemRemoved {
  type: 'ITEM_REMOVED';
  item: string;
}
export function itemRemoved(item: string): ItemRemoved {
  return {
    type: 'ITEM_REMOVED',
    item,
  };
}
