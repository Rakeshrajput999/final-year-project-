import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <h2>Home</h2>,
  },
  {
    path: "/bubblegum",
    sidebar: () => <div>bubblegum!</div>,
    main: () => <h2>Bubblegum</h2>,
  },
  {
    path: "/shoelaces",
    sidebar: () => <div>shoelaces!</div>,
    main: () => <h2>Shoelaces</h2>,
  },
];
const Department = () => {
    return (
        <div className={`tw-pl-1`}>
             <ol>
                 <li></li>
             </ol>
        </div>
    )
}

export default Department
