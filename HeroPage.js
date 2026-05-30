export const HeroPage = {
  text: {
    title: 'Welcome to Mjs',
    description: 'Learn web development by building real projects.'
  },

  cta: {
    label: 'Get Started',
    href: '#start'
  },

  image: {
    src: './HERO.png',
    alt: 'Hero Image'
  },

  style: {
    section: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '1rem',
      minHeight: '80vh',
      padding: '4rem 2rem',
      // border : '1px solid red'
    },

    content: {
      flex: '1',
      // border : '1px solid red'
    },

    title: {
      fontSize: '3rem',
      marginBottom: '1rem'
    },

    description: {
      fontSize: '1.1rem',
      lineHeight: '1.6',
      marginBottom: '2rem',
      maxWidth: '600px'
    },

    button: {
      display: 'inline-block',
      padding: '0.9rem 1.5rem',
      borderRadius: '8px',
      textDecoration: 'none',
      fontWeight: 'bold',
      backgroundColor: '#2563eb',
      color: '#fff'
    },

    image: {
      width: '600px',
      maxWidth: '100%',
      borderRadius: '12px'
    }
  },

  render() {
    const section = document.createElement('section');
    Object.assign(section.style, this.style.section);

    // Content
    const content = document.createElement('div');
    Object.assign(content.style, this.style.content);

    const title = document.createElement('h1');
    title.textContent = this.text.title;
    Object.assign(title.style, this.style.title);

    const description = document.createElement('p');
    description.textContent = this.text.description;
    Object.assign(description.style, this.style.description);

    const button = document.createElement('a');
    button.href = this.cta.href;
    button.textContent = this.cta.label;
    Object.assign(button.style, this.style.button);

    content.append(
      title,
      description,
      button
    );

    // Image
    const image = document.createElement('img');
    image.src = this.image.src;
    image.alt = this.image.alt;
    Object.assign(image.style, this.style.image);

    section.append(
      content,
      image
    );

    return section;
  }
};