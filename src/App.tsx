import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="m-20">
      <h1 className="mb-10 text-xl font-bold">これはタイトルです。</h1>
      <p className="mb-10 text-gray-500">
        これは本文です。<br />
        今日の天気は晴れです。<br />
        昨日の天気は雨でした。<br />
        一昨日の天気は雷でした。<br />
        明日の天気は曇りの予報です。
      </p>
      <button className="px-6 py-2 bg-green-300">OK</button>
    </div>
  );
}

export default App;
