//ModalDisplay
const changeBtn = document.querySelector('.change-btn');
const modalBox = document.querySelector('.modal-box');
const closeBtn = document.querySelector('.modal-close')

changeBtn.addEventListener('click' , (e) => {

   if(modalBox.classList.contains('close-modal')){
      modalBox.classList.remove('close-modal');
   }else{
      modalBox.classList.add('show-modal');
   }

   console.log(modalBox);
});

closeBtn.addEventListener('click' , (e) => {
   if(modalBox.classList.contains('show-modal')){
      modalBox.classList.remove('show-modal');
   }else{
      modalBox.classList.add('close-modal');
   }
});

//FetchPart
const weather = new Weather('newyork');

weather.getWeather()
   .then(data => console.log(data))
   .catch(err => console.log(err));
