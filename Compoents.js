import {
  Navigation,
  Logo
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
  render() {
    const containner = document.createElement('footer')
    const title = document.createElement('h1')
    title.textContent = 'Footer'
    containner.append(
      title
    )
    return containner
  }
}
