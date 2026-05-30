export const Logo ={
  item : {
    name : 'Mjs',
    link : '#'
  },
  render() {
    const div = document.createElement('div')
    const a = document.createElement('a')

    a.href = this.item.link
    a.textContent = this.item.name
    
    div.append(a)
    return div
  }
}
export const Navigation = {
  item :[
    {
      name : 'Home',
      link : '#home'
    },
    {
      name : 'About',
      link : '#about'
    },
    {
      name : 'Contact',
      link : '#contact'
    }
  ],
  render() {
    const nav = document.createElement('nav')
    const ul = document.createElement('ul')

    this.item.forEach(item => {
      const li = document.createElement('li')
      const a = document.createElement('a')
      a.href = item.link
      a.textContent = item.name
      li.append(a)
      ul.append(li)
    })

    nav.append(ul)

    return nav
  }
}
