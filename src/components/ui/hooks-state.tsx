import React, { useState } from 'react';
interface stateInterface {
  name: string;
}

const HooksState = (props: stateInterface) => {
  console.log(props);

  let [number, setNumber] = useState(0); /* 0为初始值 */
  return (
    <div>
      {/* 这里展示的又是最新的值，因为在整个事件处理结束之后再重新渲染组件，此时state已经更新好的 */}
      <span className='text-red-800 font-extrabold'>{number}</span>
      <button className='text-blue font-bold py-2 px-4 rounded-full border-2'
        onClick={() => {
          setNumber(number + 1);
          console.log(
            number,
          ); /* 由于 useState 是异步的，点击时state还没有更新好，所以 console.log 同步输出的是上一次更新后的值，并不是最新的值。  */
        }}
      >{props.name}</button>
    </div>
  );
};

export default HooksState;
