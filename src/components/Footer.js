import React from 'react'
import { Link } from 'gatsby'

import twitter from '../img/social/twitter.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: '100vw' }} className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        ホーム
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/blog">
                        最近の記事
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/writer">
                        メンバー紹介
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        このサイトについて
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a title="twitter" href="https://twitter.com/DailyNewbie">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
