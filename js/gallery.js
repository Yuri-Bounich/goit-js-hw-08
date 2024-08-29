
const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
    {
    preview:
    'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
    'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
    },
    {
    preview:
    'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
    'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
    },
    {
    preview:
    'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
    'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
    },
    {
    preview:
    'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
    'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
    },
    {
    preview:
    'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
    'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
    },
    {
    preview:
    'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
    'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
    },
    {
    preview:
    'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
    'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
    },
    {
    preview:
    'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
    'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
    },
    ];

const markup = images.map(image => {
  return `
  <li class="gallery-item">
      <a class="gallery-link" href="${image.original}">     
        <img
        class="gallery-image"
        src="${image.preview}"
        data-source="${image.original}"
        alt="${image.description}"
        />
        </a>
        </li>
  `;
}).join('');
// console.log("markup  markup:", markup)



const container = document.querySelector(".gallery");
container.insertAdjacentHTML('beforeend', markup);

container.style.top = "24px";
container.style.paddingLeft = "0px";
// container.style.left = "156px";
container.style.maxWidth = "1128px";
container.style.top = "24px";
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.gap = "24px";
container.style.justifyContent = "center";
container.style.objectFit = "cover";
container.style.listStyleType = "none";

// const element = querySelector(".gallery-item");

const galImages = document.querySelectorAll(".gallery-image");
galImages.forEach(image => {
  image.style.margin = "0 auto";
  image.style.objectFit = "cover";
  image.style.width = "360px";
  image.style.height = "200px";
  // image.style.top: 24px;
  // image.style.left: 540px;
  // image.style.gap: 0px;
  // image.style.opacity: 0px;
});







// function generateProductsMarkup(products) {
//   return products
//     .map(product => {
//       return `
//         <li class="item js-product-item" data-id="${product.id}">
//           <img
//             src="${product.img}"
//             alt="${product.name}"
//           />
//           <h3>${product.name}</h3>
//           <p>Price: <b>${product.price}</b> uah</p>
//         </li>
//         `;
//     })
//     .join('');
// }



// const markup = images.map((image) => `<img class="img-gallery" src="${image.url}" alt="${image.alt}" width="600" height="500" />`)
//   .join("");

// listEl.innerHTML = markup;

// const imagesEl = document.querySelectorAll(".img-gallery");
// imagesEl.forEach(img => {
//   img.style.objectFit = "cover";
// });
    
//     <li class="gallery-item">
//   <a class="gallery-link" href="large-image.jpg">
//     <img
//       class="gallery-image"
//       src="small-image.jpg"
//       data-source="large-image.jpg"
//       alt="Image description"
//     />
//   </a>
// </li>
