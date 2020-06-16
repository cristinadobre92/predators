import React from 'react';
import { Link } from 'gatsby';

import logo from '../img/logo.svg';
import facebook from '../img/social/facebook.svg';
import instagram from '../img/social/instagram.svg';
import twitter from '../img/social/twitter.svg';
import vimeo from '../img/social/vimeo.svg';

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer ">
        <hr
          style={{
            border: 0,
            height: 2,
            backgroundImage:
              'linear-gradient(to right, rgba(139, 0, 0, 0), rgba(139, 0, 0, 0.75), rgba(139, 0, 0, 0))',
          }}
        />
        <div className="content has-text-centered ">
          <img
            src={logo}
            alt="Predators"
            style={{ width: '14em', height: '10em' }}
          />
        </div>

        <div className="content has-text-centered ">
          <div className="container ">
            <div
              style={{ maxWidth: '600vw', color: 'DarkRed' }}
              className="columns"
            >
              <div className="column is-12 social">
                <a title="facebook" href="https://facebook.com">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="instagram" href="https://instagram.com">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="vimeo" href="https://vimeo.com">
                  <img
                    src={vimeo}
                    alt="Vimeo"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
            </div>

            <div style={{ maxWidth: '600vw' }} className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item ">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        About
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Latest Stories
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>Address line 1</li>
                    <li>Address line 2</li>
                    <li>Phone number</li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
        <span />
        <span />
        <span />
        <span />
        <span />
      </footer>
    );
  }
};

export default Footer;
