import React, { forwardRef } from 'react';
import { default as MaterialUIToolbar, ToolbarProps } from '@material-ui/core/Toolbar';

type ToolbarRef = HTMLElementTagNameMap[keyof HTMLElementTagNameMap];

const Toolbar = forwardRef<ToolbarRef, ToolbarProps>(function Toolbar(props, ref) {
  return <MaterialUIToolbar {...props} ref={ref} />;
});

export default Toolbar;
