let count = localStorage.getItem('reviews');

if(!count){
  count = 0;
}

count = parseInt(count) + 1;

localStorage.setItem('reviews', count);

document.querySelector('#count').textContent = count;
