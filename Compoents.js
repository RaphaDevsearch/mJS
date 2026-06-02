import {
  Navigation,
  Logo,
  QuickLink,
  CreateElement,
  Divider,
  Card,
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
      Card.render(),
      Card.render(),
      Card.render(),
      Card.render(),
      Card.render(),
    )
    containner.append(
      HeroPage.render(),
      Divider.render(),
      GridContainer.render(),
      Divider.render(),
      Carousel.render()
    )

    Object.assign(containner.style, {
      padding: '7rem',
      maxWidth: '1200px',
      margin: '0 auto'
    })

    return containner
  }
}
export const Footer = {
  logo : Logo,
  quickLink : QuickLink,
  copyRight : 'Copyright 2026',

  right(){
    const div = CreateElement('div')
    div.append(
      this.quickLink.render(),
      this.quickLink.render(),
      this.quickLink.render()
    )
    return div
  },

  render() {
    const containner = CreateElement('footer')
    
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

export const Carousel = {
  currentIndex: 0,

  items: [
    {
      image: 'https://placehold.co/600x300',
      alt: 'Image 1'
    },
    {
      image: 'https://placehold.co/600x300?text=Image+2',
      alt: 'Image 2'
    },
    {
      image: 'https://placehold.co/600x300?text=Image+3',
      alt: 'Image 3'
    }
  ],

  render() {
    const container = CreateElement('div', {
      classList: ['carousel']
    });

    Object.assign(container.style, {
      border: '1px solid #ddd',
      borderRadius: '12px',
      overflow: 'hidden',
      maxWidth: '600px',
      margin: '0 auto'
    });

    // Body
    const body = CreateElement('div');

    const image = CreateElement('img', {
      src: this.items[this.currentIndex].image,
      alt: this.items[this.currentIndex].alt
    });

    Object.assign(image.style, {
      width: '100%',
      display: 'block'
    });

    body.append(image);

    // Footer
    const footer = CreateElement('div');

    Object.assign(footer.style, {
      display: 'flex',
      justifyContent: 'space-around',
      gap: '1rem',
      padding: '1rem'
    });

    const prevBtn = CreateElement('button');
    prevBtn.textContent = '<';

    const nextBtn = CreateElement('button');
    nextBtn.textContent = '>';

    const buttonStyle = {
      padding: '0.5rem 1rem',
      borderRadius: '6px',
      border: 'none',
      backgroundColor: '#2563eb',
      color: '#fff',
      cursor: 'pointer'
    };

    [prevBtn, nextBtn].forEach(btn => {
      Object.assign(btn.style, buttonStyle);
    });
   
    prevBtn.addEventListener('click', () => {
      this.currentIndex =
        (this.currentIndex - 1 + this.items.length) % this.items.length;

      image.src = this.items[this.currentIndex].image;
      image.alt = this.items[this.currentIndex].alt;
    });

    nextBtn.addEventListener('click', () => {
      this.currentIndex =
        (this.currentIndex + 1) %
        this.items.length;

      image.src = this.items[this.currentIndex].image;
      image.alt = this.items[this.currentIndex].alt;
    });

    footer.append(
      prevBtn,
      nextBtn
    );

    container.append(
      body,
      footer
    );

    return container;
  }
};