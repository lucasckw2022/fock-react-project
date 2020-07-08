export interface TodoState {
  isAddingItem: boolean;
  items: string[];
  newItemInputValue: string;
}

export type ITodoState = Readonly<TodoState>;

export const intiialTodoState: TodoState = {
  isAddingItem: false,
  items: [],
  newItemInputValue: '',
};
