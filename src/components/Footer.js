import React from 'react'
import { Link } from 'gatsby'

import twitter from '../img/social/twitter.svg'
import logo from '../img/logo.svg'

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
                      <Link className="navbar-item" to="/tags">
                        タグ一覧
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/writer">
                        アカウント紹介
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        このサイトについて
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/links">
                        リンク集
                      </Link>
                    </li>
                  </ul>
                </section>
                <div style={{ marginBottom: `1rem` }}></div>
              </div>
              <div className="column is-4 social">
                <p><img src={logo} alt="NSJ" style={{ width: '200px' }} /></p>
                <a title="twitter" href="https://twitter.com/DailyNewbie" target="_blank" rel="noopener noreferrer">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <div style={{ marginBottom: `1rem` }}></div>
              </div>
              <div className="column is-4">
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
