const pageContent = {
  title: 'Biohumfarma',
  subtitle: 'Suplementos selecionados para sua rotina',
  logo: 'assets/logo-biohumfarma.png',
  socials: {
    instagram: 'https://www.instagram.com/',
    whatsapp: 'https://wa.me/',
    site: 'https://www.biohumfarma.com.br/'
  }
};

const products = [
  {
    name: 'Mix 4 Magnésios',
    price: '',
    image: 'assets/mix-4-magnesios.jpg',
    link: 'https://www.biohumfarma.com.br/suplementos-para-os-ossos/mix-4-magnesios-dimalato-treonato-quelato-bisglicinato-60-caps'
  },
  {
    name: 'Picolinato de Cromo 350 mcg',
    price: '',
    image: 'assets/picolinato-de-cromo-350mcg.jpg',
    link: 'https://www.biohumfarma.com.br/emagrecimento/picolinato-de-cromo-350-mcg-60-capsulas'
  },
  {
    name: 'Psyllium + Glucomannan',
    price: '',
    image: 'assets/psyllium-glucomannan.jpg',
    link: 'https://www.biohumfarma.com.br/emagrecimento/psyllium-glucomannan-60-capsulas'
  },
  {
    name: 'Mix 4 Magnésios',
    price: '',
    image: 'assets/mix-4-magnesios.jpg',
    link: 'https://www.biohumfarma.com.br/suplementos-para-os-ossos/mix-4-magnesios-dimalato-treonato-quelato-bisglicinato-60-caps'
  },
  {
    name: 'Picolinato de Cromo 350 mcg',
    price: '',
    image: 'assets/picolinato-de-cromo-350mcg.jpg',
    link: 'https://www.biohumfarma.com.br/emagrecimento/picolinato-de-cromo-350-mcg-60-capsulas'
  },
  {
    name: 'Psyllium + Glucomannan',
    price: '',
    image: 'assets/psyllium-glucomannan.jpg',
    link: 'https://www.biohumfarma.com.br/emagrecimento/psyllium-glucomannan-60-capsulas'
  }
];

const setPageContent = () => {
  const title = document.getElementById('pageTitle');
  const subtitle = document.getElementById('pageSubtitle');
  const logo = document.getElementById('brandLogo');
  const logoFallback = document.getElementById('logoFallback');

  title.textContent = pageContent.title;
  subtitle.textContent = pageContent.subtitle;
  logo.src = pageContent.logo;
  logo.alt = `Logo da ${pageContent.title}`;

  logo.addEventListener('error', () => {
    logo.hidden = true;
    logoFallback.hidden = false;
  });

  document.getElementById('instagramLink').href = pageContent.socials.instagram;
  document.getElementById('whatsappLink').href = pageContent.socials.whatsapp;
  document.getElementById('siteLink').href = pageContent.socials.site;
};

const renderProducts = () => {
  const grid = document.getElementById('productGrid');
  const template = document.getElementById('productCardTemplate');

  products.forEach((product) => {
    const fragment = template.content.cloneNode(true);
    const link = fragment.querySelector('.product-link');
    const image = fragment.querySelector('.product-image');
    const placeholder = fragment.querySelector('.image-placeholder');
    const name = fragment.querySelector('.product-name');
    const price = fragment.querySelector('.product-price');

    link.href = product.link;
    image.src = product.image;
    image.alt = product.name;
    name.textContent = product.name;
    price.textContent = product.price || '';

    image.addEventListener('error', () => {
      image.hidden = true;
      placeholder.hidden = false;
    });

    grid.appendChild(fragment);
  });
};

setPageContent();
renderProducts();
