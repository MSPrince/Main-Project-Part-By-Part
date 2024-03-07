const products = [
    { name: 'Top Product', link: 'fdvdfvdv', imageSrc: './asset/Shop-by-Categories/accessories & wearables.webp' },
    { name: 'Elderly care', link: 'sdgdgdsgsd', imageSrc: './asset/Shop-by-Categories/Elderly-care.webp' },
    { name: 'Personal care', link: 'vdsvsd', imageSrc: './asset/Shop-by-Categories/Personal care.webp' },
    { name: 'Healthcare devices', link: 'sfsfd', imageSrc: './asset/Shop-by-Categories/Healthcare devices.webp' },
    { name: 'Health food and drinks', link: 'dvfsdvsd', imageSrc: './asset/Shop-by-Categories/Health food and drinks.webp' },
    { name: 'Skin care', link: 'dfsdfgs', imageSrc: './asset/Shop-by-Categories/Skin care.webp' },
    { name: 'Mother and baby care', link: 'fsdes', imageSrc: './asset/Shop-by-Categories/Mother and Baby Care.webp' },
    { name: 'Accessories & wearables', link: 'advgfrger', imageSrc: './asset/Shop-by-Categories/accessories & wearables.webp' },
    { name: 'Fitness supplements', link: 'fvgrt5g', imageSrc: './asset/Shop-by-Categories/fitness supplements.webp' },
    { name: 'Ayurvedic care', link: 'egert', imageSrc: './asset/Shop-by-Categories/Ayurvedic care.webp' },
    { name: 'Sexual wellness', link: 'rw456t45', imageSrc: './asset/Shop-by-Categories/sexual wellness.webp' },
    { name: 'Mega clearance sale', link: 'wet656t4t', imageSrc: './asset/Shop-by-Categories/mega-clearance-sale.webp' },
    { name: 'Diabetic care', link: 'fdsczczxcsa', imageSrc: './asset/Shop-by-Categories/diabetic care.webp' },
    { name: 'Health condition', link: 'wwerwerwer', imageSrc: './asset/Shop-by-Categories/health condition.webp' },
    { name: 'Winter store', link: 'eerwrew', imageSrc: './asset/Shop-by-Categories/winter store.webp' },
    { name: 'Trending products', link: '', imageSrc: './asset/Shop-by-Categories/trending product.webp' }

    // Add more products as needed
  ];

  // Reference to the product container
  const productContainer = document.getElementById('product-container');

  // Dynamically generate product containers and content
  products.forEach(product => {
    const producttContainer = document.createElement('div');
    producttContainer.classList.add('productt-container');

    const aacDiv = document.createElement('div');
    aacDiv.classList.add('aac');

    const img = document.createElement('img');
    img.src = product.imageSrc;
    img.alt = '';

    const anchor = document.createElement('a');
    anchor.href = product.link;
    anchor.appendChild(img);

    aacDiv.appendChild(anchor);

    const h5 = document.createElement('h5');
    h5.textContent = product.name;

    producttContainer.appendChild(aacDiv);
    producttContainer.appendChild(h5);

    productContainer.appendChild(producttContainer);
  });