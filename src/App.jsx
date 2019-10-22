import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import Feed from './components/Feed';
import { TweetsContext } from './ctx/tweetsCtx';

import './App.css';
import Add from './components/Add';
import Search from './components/Search';

const App = () => {
  const [tweets, setTweets] = useState([
    {
      id: '29dhh2ida-9d',
      user: {
        name: 'Tom Newman',
        username: 'tom_nm2',
        picture:
          'https://www.pixelite.co.nz/content/images/2019/09/mateo-avila-chinchilla-x_8oJhYU31k-unsplash.jpg'
      },
      content: 'Trying out the new product from riot games. Excited!',
      image:
        'https://www.riotgames.com/darkroom/1120/05c55b321db28a205bd473733f059da2:b9259253a6e91d8a4163c21231d1d346/02-logo.png',
      timestamp: 1571581591383
    },
    {
      id: '29dhh3da-9d',
      user: {
        name: 'Nia Brown',
        username: 'niabrown1',
        picture:
          'https://i.pinimg.com/736x/73/b1/ac/73b1acc4c8da50848288dffe8a48af4a.jpg'
      },
      content: "I just want a burger y'all 🤠🤠",
      timestamp: 1571582700145
    },
    {
      id: '29dhh2ida-2d',
      user: {
        name: '🎉Alex',
        username: 'alex_sweetie',
        picture:
          'https://i.pinimg.com/originals/43/ef/18/43ef182ac321c4f757ecfde338eea736.jpg'
      },
      content: "It's my birthday, finally 🎉🎉🎉!",
      image:
        'https://partycity6.scene7.com/is/image/PartyCity/_pdp_sq_?$_1000x1000_$&$product=PartyCity/835767',
      timestamp: 1571582800145
    }
  ]);

  const addTweet = tweet => {
    setTweets((prev) => {
      prev.push(tweet);
      return prev;
    })
  };

  return (
    <Router>
      <div className="app-wrapper">
        <nav className="side-nav">
          <ul>
            <li>
              <Link to={'/'}>
                <span className="main-emoji" role="img" aria-label="house">
                  💙
                </span>
              </Link>
              <Link to={'/'}>
                <span role="img" aria-label="house">
                  🏠
                </span>
              </Link>
              <Link to={'/tweet/new'}>
                <span role="img" aria-label="house">
                  ➕
                </span>
              </Link>
              <Link to={'/search'}>
                <span role="img" aria-label="house">
                  🔍
                </span>
              </Link>
            </li>
          </ul>
        </nav>
        <main className="router-content">
          <Switch>
            <TweetsContext.Provider value={{tweets, addTweet}}>
              <Route path="/" exact={true} component={Feed} />
              <Route path="/tweet/new" component={Add} />
              <Route path="/refresh" render={() => <Redirect to={'/'} />} />
              <Route path="/search" component={Search} />
            </TweetsContext.Provider>
          </Switch>
        </main>
        <div className="space-right"></div>
      </div>
    </Router>
  );
};

export default App;
