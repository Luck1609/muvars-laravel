import React, { forwardRef } from 'react';
import Tooltip from '@mui/material/Tooltip';


export default function CustomTooltip({ Component, data, title, content }) {
  return (
    <Tooltip title={title}>
      <Component data={data} content={content} />
    </Tooltip>
  )
}

export const TooltipComponent = forwardRef(function MyComponent({content, ...props}, ref) {
  return ( 
    <div {...props} ref={ref}>
      {content({data: props.data})}
    </div>
    )
});