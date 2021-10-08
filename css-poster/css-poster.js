let make = document.getElementById('title');

const onMouseMove = (e) =>{
  make.style.left = e.pageX + 'px';
  make.style.top = e.pageY +'px';
}

document.addEventListener('mousemove', onMouseMove);

//how to make html div follow mouse ---> https://levelup.gitconnected.com/use-javascript-to-make-an-element-follow-the-cursor-3872307778b4