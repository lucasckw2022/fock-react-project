import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { Dispatch } from 'redux';
import { Actions, AppState } from '../../store/root.reducer';
import { getItems, getNewItemInputValue, isAddingItem } from '../../store/root.selectors';
import {
  itemAddRequested,
  itemFetchRequested,
  itemRemoveRequested,
  newItemInputValueChanged,
} from '../../store/state/todo/todo.actions';
import { AppComponent, AppDispatchProps, AppOwnProps, AppStateProps } from './App';

const mapStateToProps: MapStateToProps<AppStateProps, AppOwnProps, AppState> = (state: AppState) => ({
  isAddingItem: isAddingItem(state),
  items: getItems(state),
  newItemInputValue: getNewItemInputValue(state),
});

const mapDispatchToProps: MapDispatchToProps<AppDispatchProps, AppOwnProps> = (dispatch: Dispatch<Actions>) => ({
  onAddItem(item: string) {
    dispatch(itemAddRequested(item));
  },
  onNewItemInputValueChange(value?: string) {
    dispatch(newItemInputValueChanged(value ? value : ''));
  },
  onRemoveItem(item: string) {
    dispatch(itemRemoveRequested(item));
  },
  onInitialActionDispatch() {
    dispatch(itemFetchRequested());
  },
});

export const App = connect<AppStateProps, AppDispatchProps, AppOwnProps, AppState>(
  mapStateToProps,
  mapDispatchToProps,
)(AppComponent);
