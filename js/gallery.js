const products = [
    {
    id: 1,
    preview:
    "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__340.jpg",
  original:
    "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
  description: "Hokkaido Flower",
},
{
    id: 2,
  preview:
    "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
  original:
    "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
  description: "Container Haulage Freight",
},
{   id: 3,
  preview:
    "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
  original:
    "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
  description: "Aerial Beach View",
},
{   id: 4,
  preview:
    "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
  original:
    "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
  description: "Flower Blooms",
},
{   id: 5,
  preview:
    "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
  original:
    "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
  description: "Alpine Mountains",
},
{   id: 6,
  preview:
    "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
  original:
    "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
  description: "Mountain Lake Sailing",
},
{   id: 7,
  preview:
    "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
  original:
    "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
  description: "Alpine Spring Meadows",
},
{   id: 8,
  preview:
    "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
  original:
    "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
  description: "Nature Landscape",
},
{   id: 9,
  preview:
    "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
  original:
    "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
  description: "Lighthouse Coast Sea",
},
  ];

  
const container = document.querySelector('.products');

function productTemplate(item) {
  return `<li class="item" data-id="${item.id}">
  <img
    src="${item.preview}"
    alt="image"
  />
</li>`;
}

function productListTemplate(products) {
  return products.map(productTemplate).join('');
}

function render() {
  const markup = productListTemplate(products);
  container.innerHTML = markup;
}

render();


container.addEventListener('click', e => {
    if (e.target === e.currentTarget) return;
  
    const liElem = e.target.closest('li');
    const id = +liElem.dataset.id;
    const item = products.find(el => el.id === id);
    console.log(item);
  
    const instance = basicLightbox.create(
      `
    <div class="modal">
    <img
    src="${item. original}"
    alt="image"
  />
  
    </div>
  `,
      {
        /*
         * Function that gets executed before the lightbox will be shown.
         * Returning false will prevent the lightbox from showing.
         */
        onShow: instance => {
          console.log('ADD LISTENER');
          document.addEventListener('keydown', closeModal);
        },
        /*
         * Function that gets executed before the lightbox closes.
         * Returning false will prevent the lightbox from closing.
         */
        onClose: instance => {
          console.log('REMOVE LISTENER');
          document.removeEventListener('keydown', closeModal);
        },
      },
    );
  
    function closeModal(e) {
      console.log(e.code);
      if (e.code === 'Escape') instance.close();
    }
  
    instance.show();
  });
  
  // ===============================
  
  document.addEventListener('click', onDocumentClick);
  
  function onDocumentClick(e) {}
  