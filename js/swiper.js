var swiper = new Swiper(".mSwiper", {
	//    autoplay: true,
	navigation: {
		nextEl: ".reviewnext",
		prevEl: ".reviewprev",
	},
});



// var swiper = new Swiper(".slidersw", {
//    direction: "vertical",

//    slidesPerView: "auto",
//    freeMode: true,
//    scrollbar: {
//       el: ".swiper-scrollbar",
//    },
//    mousewheel: true,
//    slidesPerView: 4,



// });

let itemm = document.querySelectorAll('.task-and-comment-div');


if (itemm.length > 10) {
	for (let index = 0; index < itemm.length; index++) {
		const element = itemm[index];
		if (index > 9) {
			element.style.display = 'none'
		}
	}
}

let ll = document.querySelector('.ll');
ll.addEventListener('click', function () {
	for (let index = 0; index < itemm.length; index++) {
		const element = itemm[index];
		element.style.display = 'flex'
	}
})