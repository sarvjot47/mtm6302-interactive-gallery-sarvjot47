
const images = [
  {
    thumb: 'https://img.freepik.com/premium-photo/3d-green-doll-with-googly-eyes-big-mouth_1087408-2206.jpg?w=740',
    hd: 'https://img.freepik.com/premium-photo/3d-green-doll-with-googly-eyes-big-mouth_1087408-2206.jpg?w=740',
    caption: 'Amazing View 1'
  },
  {
    thumb: 'https://img.freepik.com/premium-photo/3d-render-cute-character-with-glasses-cap-3d-render-cute-character-with-glasses_912214-34891.jpg?w=740',
    hd: 'https://img.freepik.com/premium-photo/3d-render-cute-character-with-glasses-cap-3d-render-cute-character-with-glasses_912214-34891.jpg?w=740',
    caption: 'Amazing View 2'
  },
  {
    thumb: 'https://img.freepik.com/premium-photo/cute-teeth-character-animated-cartoon-style-animated-expressions-quirky-expressions-playful-expressions-medicine-dentist-smile-happy-pretty-stomatology-white-laugh-brush_887181-16863.jpg?w=1380',
    hd: 'https://img.freepik.com/premium-photo/cute-teeth-character-animated-cartoon-style-animated-expressions-quirky-expressions-playful-expressions-medicine-dentist-smile-happy-pretty-stomatology-white-laugh-brush_887181-16863.jpg?w=1380',
    caption: 'Amazing View 2'
  },
  {
    thumb: 'https://img.freepik.com/premium-photo/close-up-cartoon-character-with-mustache-suspenders-generative-ai_1034064-40897.jpg?w=740',
    hd: 'https://img.freepik.com/premium-photo/close-up-cartoon-character-with-mustache-suspenders-generative-ai_1034064-40897.jpg?w=740',
    caption: 'Amazing View 2'
  },
  {
    thumb: 'https://img.freepik.com/premium-photo/adorable-3d-style-character-children-generative-ai_739548-13632.jpg?w=740',
    hd: 'https://img.freepik.com/premium-photo/adorable-3d-style-character-children-generative-ai_739548-13632.jpg?w=740',
    caption: 'Amazing View 2'
  },
  {
    thumb: 'https://img.freepik.com/premium-photo/vintage-minimalism-3d-art-slender-cartoon-character_899449-92176.jpg?w=740',
    hd: 'https://img.freepik.com/premium-photo/vintage-minimalism-3d-art-slender-cartoon-character_899449-92176.jpg?w=740',
    caption: 'Amazing View 2'
  },
  {
    thumb: 'https://img.freepik.com/premium-photo/minimalist-3d-character-design-style-alex-petruk-ape_899449-79113.jpg?w=740',
    hd: 'https://img.freepik.com/premium-photo/minimalist-3d-character-design-style-alex-petruk-ape_899449-79113.jpg?w=740',
    caption: 'Amazing View 2'
  },
  {
    thumb: 'https://img.freepik.com/premium-photo/3d-rendering-cartoon-character-construction-worker-construction-site_893765-2897.jpg?w=1380',
    hd: 'https://img.freepik.com/premium-photo/3d-rendering-cartoon-character-construction-worker-construction-site_893765-2897.jpg?w=1380',
    caption: 'Amazing View 2'
  },
  {
    thumb: 'https://img.freepik.com/free-photo/3d-rendering-cartoon-character-beach_23-2151054588.jpg?t=st=1731571468~exp=1731575068~hmac=4abc7d2391405a9b4ff980240f6148b4a43005ffe224e99f763ff2861c879844&w=1380',
    hd: 'https://img.freepik.com/free-photo/3d-rendering-cartoon-character-beach_23-2151054588.jpg?t=st=1731571468~exp=1731575068~hmac=4abc7d2391405a9b4ff980240f6148b4a43005ffe224e99f763ff2861c879844&w=1380',
    caption: 'Amazing View 2'
  },
  {
    thumb: 'https://img.freepik.com/free-photo/young-man-cartoon-character-with-phone_23-2150964377.jpg?t=st=1731571496~exp=1731575096~hmac=2697a825f0e82244260deb77baef4c4825d8e029f5575f609d31725e8728da59&w=1060',
    hd: 'https://img.freepik.com/free-photo/young-man-cartoon-character-with-phone_23-2150964377.jpg?t=st=1731571496~exp=1731575096~hmac=2697a825f0e82244260deb77baef4c4825d8e029f5575f609d31725e8728da59&w=1060',
    caption: 'Amazing View 2'
  },
 
];


const gallery = document.querySelector('.gallery');

images.forEach((image) => {
  const img = document.createElement('img');
  img.src = image.thumb;
  img.alt = image.caption;
  img.dataset.hd = image.hd;
  img.dataset.caption = image.caption;
  gallery.appendChild(img);
});


const modalOverlay = document.createElement('div');
modalOverlay.classList.add('modal-overlay');

const modalContent = document.createElement('div');
modalContent.classList.add('modal-content');

const modalClose = document.createElement('div');
modalClose.classList.add('modal-close');
modalClose.textContent = '×';

const modalImage = document.createElement('img');
const modalCaption = document.createElement('div');
modalCaption.classList.add('modal-caption');

modalContent.appendChild(modalClose);
modalContent.appendChild(modalImage);
modalContent.appendChild(modalCaption);
modalOverlay.appendChild(modalContent);
document.body.appendChild(modalOverlay);


function openModal(hdSrc, captionText) {
  modalImage.src = hdSrc;
  modalCaption.textContent = captionText;
  modalOverlay.classList.add('modal-show');
}


function closeModal() {
  modalOverlay.classList.remove('modal-show');
}


document.body.addEventListener('click', (e) => {
  if (e.target.matches('.gallery img')) {
    const hdSrc = e.target.dataset.hd;
    const captionText = e.target.dataset.caption;
    openModal(hdSrc, captionText);
  }
});

modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay || e.target === modalClose) {
    closeModal();
  }
});

modalImage.addEventListener('click', closeModal);
