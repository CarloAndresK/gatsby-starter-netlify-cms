import React from "react";
import { Link } from "gatsby";
import logo from "../img/logo.svg";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger() {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  }

  render() {
    return (
      <>
      <nav
        className="navbar level header desktop-nav"
        role="navigation"
        aria-label="main-navigation"
      >
          <p className="level-item has-text-centered">
            <Link className="link is-info" to="/video">
              Video
            </Link>
          </p>
          <p className="level-item has-text-centered">
            <Link className="link is-info" to="/document">
              Document
            </Link>
          </p>
          <p className="level-item has-text-centered">
            <Link to="/" className="link is-info" title="Logo">
              <img src={logo} alt="Kaldi" style={{ width: "88px" }} />
            </Link>
          </p>
          <p className="level-item has-text-centered">
            <Link className="link is-info" to="/text">
              Text
            </Link>
          </p>
          <p className="level-item has-text-centered">
            <Link className="link is-info" to="/about">
              About
            </Link>
          </p>
        </nav>

        <nav
        className="navbar level header mobile-nav"
        role="navigation"
        aria-label="main-navigation"
      >
          <div className="container">
            <div className="navbar-brand">
              <Link to="/" className="link is-info" title="Logo">
                <img src={logo} alt="Kaldi" style={{ width: "88px" }} />
              </Link>
              {/* Hamburger menu */}
              <div
                className={`navbar-burger burger ${this.state.navBarActiveClass}`}
                data-target="navMenu"
                role="menuitem"
                tabIndex={0}
                onKeyPress={() => this.toggleHamburger()}
                onClick={() => this.toggleHamburger()}
              >
                <span />
                <span />
                <span />
              </div>
            </div>
            <div
              id="navMenu"
              className={`navbar-menu ${this.state.navBarActiveClass}`}
            >
          
                <p className="level-item has-text-centered">
                  <Link className="link is-info" to="/video">
                    Video
                  </Link>
                </p>
                <p className="level-item has-text-centered">
                  <Link className="link is-info" to="/document">
                    Document
                  </Link>
                </p>
                <p className="level-item has-text-centered">
                  <Link className="link is-info" to="/text">
                    Text
                  </Link>
                </p>
                <p className="level-item has-text-centered">
                  <Link className="link is-info" to="/about">
                    About
                  </Link>
                </p>
              </div>
            </div>
        </nav>
      </>
    );
  }
};

export default Navbar;
