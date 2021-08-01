import React, { useState } from 'react';
import '../Topbar/topbar.css';
import axios from '../../../../../Movie App React/movies-app/node_modules/axios';

const TopBar = (props) => {
  const [list, setList] = useState([]);
  const [load, setLoad] = useState(0);
  const [bar, setBar] = useState(0);

  const navClickBlur = () => {
    setLoad(0);
  };
  const navClickHandler = () => {
    setLoad((prevBar) => !prevBar);
    if (list.length === 0) {
      setBar(1);
      axios
        .get(`https://api.edyoda.com/v1/blog/postcategories/`)
        .then((res) => {
          setList(res.data);
          setBar(0);
        });
    }
  };

  return (
    <div id="navBar">
      <ul>
        <div id="left_nav">
          <li id="Logo">
            <div>EDYODA</div>
            <p>Stories</p>
          </li>
          <li id="Categories" onClick={navClickHandler}>
            Explore Categories{' '}
            <span>
              <img
                src={
                  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAGCAYAAAD37n+BAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHhJREFUeNpiYGBguAPE/f///2fAh0FqgPguiBEDxC+BeDUQM2NRyAyVewlWCxW0B+L7QHwAiHmRFPNCxUBy9mAxJElVIL4MxBeBWB6KL0LFVOHq0KwXAuJDQHwPikFsIWQ1jFCFcMDIyMgGpFZAuRFA+V/I8gABBgD8EGd4shdx5wAAAABJRU5ErkJggg=='
                }
                alt={'downArrow'}
              />
            </span>
          </li>
        </div>
        <div id="right_nav">
          <li id="about">
            EdYoda is free learning and knowledge {<br />} sharing platform for
            techies
          </li>
          <li id="goTo">
            <button>Go To Main Website</button>
          </li>
        </div>
      </ul>

      <div className={`Cwrapper ${load ? 'display' : ''}`}>
        <div className="Invisible" onClick={navClickBlur}></div>
        <div id="Categories_Wrapper">
          {bar ? (
            <div className="spinner">
              <div className="rect1"></div>
              <div className="rect2"></div>
              <div className="rect3"></div>
            </div>
          ) : (
            ''
          )}
          {list.map((item, index) => (
            <p
              key={index}
              onClick={(e) => props.navCatClickHandler(e.target.id)}
              id={index}
            >
              {item.title}
            </p>
          ))}
        </div>

        {list.length === 0 ? (
          ''
        ) : (
          <div id="shape">
            <i class="fas fa-caret-up"></i>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopBar;
