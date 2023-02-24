const $root = document.querySelector('.root-container');
const $btn = document.querySelectorAll(".button");
const arr = [...$btn];

arr.forEach((el) => {
  el.addEventListener("click", (e) => {
    el.classList.toggle('button--opacity');

    if(el.id === 'one') {
        $root.className = 'root-container';
    } else if(el.id === 'two') {
        $root.className = 'root-container white';
    } else {
        $root.className = 'root-container purple';
    }
    arr
      .filter((item) => {
        return item != el;
      })
      .forEach((item) => {
        item.classList.remove('button--opacity');
      });
  });
});
