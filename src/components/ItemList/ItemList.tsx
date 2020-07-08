import * as React from 'react';

export interface ItemListProps {
  items: string[];
  onRemove?: (item: string) => void;
}

export const ItemList: React.FC<ItemListProps> = ({ items, onRemove }) => {
  const onItemRemoved = React.useCallback(
    (item: string) => {
      if (onRemove) {
        onRemove(item);
      }
    },
    [onRemove],
  );

  return (
    <ul className="list-group">
      {items.map((item, index) => (
        <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
          <span>{item}</span>
          <button type="button" className="btn btn-danger btn-sm" onClick={() => onItemRemoved(item)}>
            <i className="material-icons align-middle">close</i>
          </button>
        </li>
      ))}
    </ul>
  );
};
