var slideItem=0;window.onload=function(){setInterval(passarSlide,3e3);for(var a=document.getElementById("slideshow").offsetWidth,b=document.getElementsByClassName("slide"),c=0;3>=c;c++)b[c].style.width=a+"px";document.getElementsByClassName("bolinha")[0].style.backgroundColor="blue"};function passarSlide(){var a=document.getElementById("slideshow").offsetWidth,b=document.getElementsByClassName("bolinha");console.log(slideItem),console.log(a),0===slideItem?(document.getElementsByClassName("slideshow_area")[0].style.marginLeft="-"+a*slideItem+"px",b[0].style.backgroundColor="blue",b[1].style.backgroundColor="red",b[2].style.backgroundColor="red",b[3].style.backgroundColor="red",slideItem++):1===slideItem?(document.getElementsByClassName("slideshow_area")[0].style.marginLeft="-"+a*slideItem+"px",b[0].style.backgroundColor="red",b[1].style.backgroundColor="blue",b[2].style.backgroundColor="red",b[3].style.backgroundColor="red",slideItem++):2===slideItem?(document.getElementsByClassName("slideshow_area")[0].style.marginLeft="-"+a*slideItem+"px",b[0].style.backgroundColor="red",b[1].style.backgroundColor="red",b[2].style.backgroundColor="blue",b[3].style.backgroundColor="red",slideItem++):3==slideItem&&(document.getElementsByClassName("slideshow_area")[0].style.marginLeft="-"+a*slideItem+"px",b[0].style.backgroundColor="red",b[1].style.backgroundColor="red",b[2].style.backgroundColor="red",b[3].style.backgroundColor="blue",slideItem=0)}
