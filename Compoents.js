import {
  Navigation,
  Logo,
  QuickLink,
  CreateElement,
  Divider,
  card,
} from './Extension.js'
import {
  HeroPage
}from './HeroPage.js'
export const Header = {
  logo : Logo,
  navigation : Navigation,
  render() {
    const containner = document.createElement('header')

    containner.append(
      this.logo.render(),
      this.navigation.render()
    )
    return containner
  }
}

export const Main = {
  render() {
    const containner = document.createElement('main')
    const title = document.createElement('h1')
    title.textContent = 'Main'
    // GridContainer.contents =[
    //   card.render(),
    //   card.render(),
    //   card.render(),
    // ]
    GridContainer.contents.push(
      card.render(),
      card.render(),
      card.render(),
    )
    containner.append(
      HeroPage.render(),
      Divider.render(),
      GridContainer.render()
    )
    return containner
  }
}
export const Footer = {
  logo : Logo,
  quickLink : QuickLink,
  copyRight : 'Copyright 2026',

  right(){
    const div = document.createElement('div')
    div.append(
      this.quickLink.render(),
      this.quickLink.render(),
      this.quickLink.render()
    )
    return div
  },

  render() {
    const containner = document.createElement('footer')
    
    containner.append(
      this.right(),
      this.copyRight
    )
    return containner
  }
}

/**
 * here are the anothere extension 
 * like component iside the footer
 */

export const GridContainer  = {
  container : CreateElement('div', { classList: ['grid-container'] }),
  contents : [],  

  render() {
    this.contents.forEach(content => {
      this.container.append(content);
    });
    Object.assign(this.container.style, {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '20px'
    });
    return this.container;
  }
}