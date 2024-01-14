const images = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];
// Вибір контейнера для галереї у DOM
const galleryContainer = document.querySelector('.gallery');

// Генерація розмітки галереї на основі масиву зображень
const galleryMarkup = images.map(({ preview, original, description }) => `
<li class="gallery-item">
  <a class="gallery-link" href="${original}">
    <img
      class="gallery-image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
`).join('');

// Вставка сгенерованої розмітки у контейнер галереї
galleryContainer.innerHTML = galleryMarkup;

// Ініціалізація змінної для екземпляру basicLightbox
let lightboxInstance = null;

// Додавання слухача подій на кліки у контейнері галереї
galleryContainer.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {
  // Запобігання стандартній обробці кліку
  event.preventDefault();

  // Перевірка, чи клік був здійснений на зображенні
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  // Отримання адреси зображення
  const imageSrc = event.target.dataset.source;

  // Перевірка, чи існує екземпляр lightbox
  if (!lightboxInstance) {
      // Створення нового екземпляру lightbox, якщо він ще не був створений
      lightboxInstance = basicLightbox.create(`
        <img src="${imageSrc}" width="800" height="600">
      `, {
          // Додавання слухача подій для клавіші Escape при відкритті
          onShow: (instance) => {
              document.addEventListener('keydown', onKeydown);
          },
          // Видалення слухача подій для клавіші Escape при закритті
          onClose: (instance) => {
              document.removeEventListener('keydown', onKeydown);
          }
      });
  } else {
      // Оновлення вмісту існуючого екземпляру lightbox
      lightboxInstance.element().querySelector('img').src = imageSrc;
  }

  // Показ екземпляру lightbox
  lightboxInstance.show();
}

// Функція для обробки натискання клавіш
function onKeydown(event) {
  // Закриття lightbox при натисканні клавіші Escape
if (event.key === 'Escape' && lightboxInstance) {
lightboxInstance.close();
}
}