import React from 'react';
import HooksState from '@components/ui/hooks-state';
import HooksRef from '@components/ui/hooks-ref';

function ListReactHooks() {
  return (
    <div>
       <ul><li><HooksState name='dssd'/></li><li><HooksRef/></li></ul>
    </div>
  );
}

export default ListReactHooks;
