export const Header = {
  logo : 'Mjs',
  navigation : [
    "Home",
    "About",
    "Contact"
  ],
  render() {
    const containner = document.createElement('header')

    const label = document.createElement('h1')
    label.textContent = this.logo

    const nav = document.createElement('nav')
    const ul = document.createElement('ul')

    this.navigation.forEach(item => {
      const li = document.createElement('li')
      const a = document.createElement('a')
      a.href = `#${item.toLowerCase()}`
      a.textContent = item
      li.append(a)
      ul.append(li)
    })

    nav.append(ul)

    containner.append(
      label,
      nav
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
