import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Tabs from './tabs';
import Weather from './weather';


const tabs = [
  {title: "Tab 1", content: "This is tab 1"},
  {title: "Tab 2", content: "This is tab 2"},
  {title: "Tab 3", content: "This is tab 3"}
];

const Root = () => (
  <div>
    <Clock />
    <Tabs tabs={tabs}/>
    <Weather />
  </div>
  
)

document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector("main");
  ReactDOM.render(<Root />, main);
});