(()=>{
  /* preloader*/
  let preloader = document.getElementById('pageLoader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  };
  // avatar event handler
    const avatar = document.getElementById("avatar");
    avatar.addEventListener('click', function(){
      avatar.style.opacity=".3";
    });
    
})();
