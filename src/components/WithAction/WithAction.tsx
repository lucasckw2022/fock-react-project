import classnames from 'classnames';
import * as React from 'react';
import { BootstrapColors } from '../../models/Bootstrap.model';

export interface WithActionProps {
  color?: BootstrapColors;
  isDisabled?: boolean;
  onTrigger: () => void;
  outline?: boolean;
  text: string;
}

export const WithAction: React.FC<WithActionProps> = ({ children, isDisabled = false, onTrigger, text }) => (
  <div className="input-group mb-3">
    {children}
    <div className="input-group-append">
      <button className={classnames('btn')} disabled={isDisabled} onClick={onTrigger} type="button">
        {text}
      </button>
    </div>
  </div>
);
