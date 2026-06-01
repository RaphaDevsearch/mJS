export const Logo ={
  item : {
    name : 'Mjs',
    link : '#'
  },
  render() {
    const div = CreateElement('div');
    const a = CreateElement('a');

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

export const QuickLink = {
  items: [
    {
      label: 'Home',
      href: '#home'
    },
    {
      label: 'About',
      href: '#about'
    },
    {
      label: 'Contact',
      href: '#contact'
    }
  ],

  style : 'quick-links',
  render() {
    const nav = CreateElement('nav');
    const ul = CreateElement('ul');
    ul.classList.add(this.style)

    this.items.forEach(item => {
      const li = CreateElement('li');

      const a = CreateElement('a');
      a.href = item.href;
      a.textContent = item.label;

      li.append(a);
      ul.append(li);
    });

    nav.append(ul);

    return nav;
  }
};

export const CreateElement = (tagName, attributes = {}) => {
  const element = document.createElement(tagName);

  Object.entries(attributes).forEach(([key, value]) => {
    element[key] = value;
  });

  return element;
};

export const Divider = {

  render() {
    const hr = CreateElement('hr', { classList: ['divider'] });
    Object.assign(hr.style, {
      border: 'none',
      borderTop: '1px solid #9b8b8b',
      margin: '20px 0'
    });
    return hr
  }
}

export const Card = {
  image: {
    src: 'HERO.png',
    alt: 'Card Image'
  },

  title: 'Learn JavaScript',

  description:
    'Build projects and improve your JavaScript skills step by step.',

  action: {
    label: 'Read More',
    href: '#'
  },

  render() {
    const card = CreateElement('div', {
      classList: ['card']
    });

    Object.assign(card.style, {
      border: '1px solid #ddd',
      borderRadius: '12px',
      overflow: 'hidden',
      backgroundColor: '#fff'
    });

    const image = CreateElement('img');
    image.src = this.image.src;
    image.alt = this.image.alt;

    Object.assign(image.style, {
      width: '100%',
      display: 'block'
    });

    const body = CreateElement('div');

    Object.assign(body.style, {
      padding: '1rem'
    });

    const title = CreateElement('h3');
    title.textContent = this.title;

    const description = CreateElement('p');
    description.textContent = this.description;

    const button = CreateElement('a');
    button.href = this.action.href;
    button.textContent = this.action.label;

    Object.assign(button.style, {
      display: 'inline-block',
      marginTop: '1rem',
      padding: '0.75rem 1rem',
      borderRadius: '6px',
      textDecoration: 'none',
      backgroundColor: '#2563eb',
      color: '#fff'
    });

    body.append(
      title,
      description,
      button
    );

    card.append(
      image,
      body
    );

    return card;
  }
};