import * as React from 'react';
import { BootstrapColors, BootstrapSizes } from '../../models/Bootstrap.model';

export interface LoadingSpinnerProps {
  color?: BootstrapColors;
  size?: BootstrapSizes;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ color = 'secondary', size = 'md' }) => (
  <div className={`spinner-border text-${color} spinner-border-${size}`} role="status">
    <span className="sr-only">Loading...</span>
  </div>
);
