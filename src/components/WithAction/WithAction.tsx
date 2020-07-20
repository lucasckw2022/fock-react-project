import classnames from 'classnames';
import * as React from 'react';
import { BootstrapColors } from '../../models/Bootstrap.model';
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";

export interface WithActionProps {
  color?: BootstrapColors;
  isDisabled?: boolean;
  onTrigger: () => void;
  outline?: boolean;
  text: string;
  isAddingItem: boolean;
}

export const WithAction: React.FC<WithActionProps> = ({ outline, color, children, isDisabled = false, onTrigger, text, isAddingItem }) => {
  const colorProps = color ? `btn-${outline ? `outline-` : ``}${color}` : `btn-${outline ? `outline-` : ``}secondary`;
  return (
    <div className="input-group mb-3">
      {children}
      <div className="input-group-append">
        <button className={classnames(`btn`, colorProps)} disabled={isDisabled} onClick={onTrigger} type="button">
          {isAddingItem ? <LoadingSpinner color="info" size="sm" /> : text}
        </button>
      </div>
    </div>
  );
}