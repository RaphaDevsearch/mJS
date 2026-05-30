import {
  Navigation,
  Logo,
  QuickLink
} from './Extension.js'
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
    containner.append(
      title
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

