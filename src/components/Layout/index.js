import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Layout extends Component {
  render() {
    return (
      <>
        <h1>
              Hello 👋 I'm Lucas Frois
        </h1>
        <p class="description">
            Currently living in Goiânia, Brazil and working at @Trinus Tech as back-end developer.
        </p>
        <section class="links">
          <a href="https://github.com/frvs" target="_blank"> <i class="fab fa-github"></i> Github </a>
          <a href="https://www.linkedin.com/in/frvs" target="_blank"> <i class="fab fa-linkedin"></i> LinkedIn</a>
          <a href="https://t.me/lucas_frois" target="_blank"> <i class="fab fa-telegram-plane"></i> Telegram </a>
          <a href="mailto://frois.dev@gmail.com" target="_blank"> <i class="far fa-envelope"></i> Mail </a>
          <a href="./public/resume.pdf" target="_blank"> <i class="far fa-file-alt"></i> Resume</a>
        </section>
        <div {...this.props} className='layout'>
          {this.props.children}
        </div>
      </>
    )
  }
}