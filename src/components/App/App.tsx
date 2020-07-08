import * as React from 'react';
import styled from 'styled-components';
import { Input } from '../Input/Input';
import { ItemList } from '../ItemList/ItemList';
import { WithAction } from '../WithAction/WithAction';

export interface AppStateProps {
  isAddingItem: boolean;
  items: string[];
  newItemInputValue: string;
}

export interface AppDispatchProps {
  onAddItem(item: string): void;
  onNewItemInputValueChange(value?: string): void;
  onRemoveItem(item: string): void;
  onInitialActionDispatch(): void;
}

export interface AppOwnProps {}

export type AppProps = AppStateProps & AppDispatchProps & AppOwnProps;

const AppContainer = styled.div`
  .card {
    width: 450px;
  }
`;

export const AppComponent: React.FC<AppProps> = ({
  items,
  newItemInputValue,
  onAddItem,
  onInitialActionDispatch,
  onNewItemInputValueChange,
  onRemoveItem,
}) => {
  React.useEffect(() => {
    onInitialActionDispatch();
  }, []);

  const onItemAdded = React.useCallback(
    (item?: string) => {
      if (item) {
        onAddItem(item);
      }
    },
    [onAddItem],
  );

  return (
    <AppContainer className="h-100 d-flex p-3 align-items-center justify-content-center">
      <div className="card shadow">
        <div className="card-body">
          <h5 className="card-title">Todo List</h5>
          <WithAction color="primary" onTrigger={() => onItemAdded(newItemInputValue)} text="Add">
            <Input value={newItemInputValue} onChange={onNewItemInputValueChange} />
          </WithAction>

          <h6>Your todo list:</h6>
          <ItemList items={items} onRemove={onRemoveItem} />
        </div>
      </div>
    </AppContainer>
  );
};
