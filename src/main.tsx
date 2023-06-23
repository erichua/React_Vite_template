/*
 * @Author: Eric Hua (T&T) Eric.Hua@tntsupermarket.com
 * @Date: 2023-06-14 14:19:01
 * @LastEditors: Eric Hua (T&T) Eric.Hua@tntsupermarket.com
 * @LastEditTime: 2023-06-22 16:03:27
 * @FilePath: \React_Vite_template\src\main.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './report-web-vitals';
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);


reportWebVitals();
