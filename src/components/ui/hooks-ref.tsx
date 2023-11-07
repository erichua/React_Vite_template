import React, { useRef } from 'react';

const HooksRef = () => {
  const dom = useRef(null);
  const handleSubmit = () => {
    alert(dom.current&& dom.current.title);
    console.log(dom.current);
  };
  return (
    <div>
      <div ref={dom} title='test'>
        <button onClick={() => handleSubmit()}>提交</button>
      </div>
    </div>
  );
};

export default HooksRef;
