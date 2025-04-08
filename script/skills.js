
// scrol reavela
ScrollReveal({
  reset: true,
  distance: "180px",
  duration: 2000,
  delay: 200
});
// ScrollReveal().reveal('.second', { origin: 'right' });
// ScrollReveal().reveal('.first', { origin: 'left' });
ScrollReveal().reveal('.subtitle , .header', { origin: 'top' });
ScrollReveal().reveal('.swiper1', { origin: 'right' });
ScrollReveal().reveal('.swiper2', { origin: 'left' });
ScrollReveal().reveal('.light-container,.skills, .lorem', { origin: 'bottom' });


  const SkillData = [
      {
          name: "Skill 1",
          Image: "../src/skills/py_trans.png",
          width: 100,
          height: 100
      },
      {
          name: "Skill 2",
          Image: "../src/skills/cpptrans2.png",
          width: 100,
          height: 100
      },
      {
          name: "Skill 3",
          Image: "../src/skills/docker.webp",
          width: 100,
          height: 100
      },
      {
          name: "Skill 1",
          Image: "../src/skills/framer.png",
          width: 100,
          height: 100
      },
      {
          name: "Skill 2",
          Image: "../src/skills/html_trans.png",
          width: 100,
          height: 100
      },
      {
          name: "Skill 3",
          Image: "../src/skills/javatransperant.png",
          width: 100,
          height: 100
      },
      {
          name: "Skill 1",
          Image: "../src/skills/js_trans.png",
          width: 100,
          height: 100
      },
      {
          name: "Skill 2",
          Image: "../src/skills/mongodb.png",
          width: 100,
          height: 100
      },
      {
          name: "Skill 3",
          Image: "../src/skills/mui.png",
          width: 100,
          height: 100
      },
      {
          name: "Skill 1",
          Image: "../src/skills/mysql.png",
          width: 100,
          height: 100
      },
      {
          name: "Skill 2",
          Image: "redux.png",
          width: 100,
          height: 100
      },
      {
          name: "Skill 3",
          Image: "../src/skills/react.png",
          width: 100,
          height: 100
      },
      {
          name: "Skill 1",
          Image: "../src/skills/tailwind.png",
          width: 100,
          height: 100
      },
      // {
      //     name: "Skill 2",
      //     Image: "py_trans.png",
      //     width: 100,
      //     height: 100
      // },
      // {
      //     name: "Skill 3",
      //     Image: "py_trans.png",
      //     width: 100,
      //     height: 100
      // },
      // {
      //     name: "Skill 1",
      //     Image: "py_trans.png",
      //     width: 100,
      //     height: 100
      // },
      // {
      //     name: "Skill 2",
      //     Image: "py_trans.png",
      //     width: 100,
      //     height: 100
      // },
      // {
      //     name: "Skill 3",
      //     Image: "py_trans.png",
      //     width: 100,
      //     height: 100
      // },
      // Add more skills as needed
  ];

  document.addEventListener("DOMContentLoaded", function () {
      const swiperContainers = document.querySelectorAll('.swiper-container');

      SkillData.forEach(skill => {
          swiperContainers.forEach(container => {
              const swiperWrapper = container.querySelector('.swiper-wrapper');

              const slide = document.createElement('div');
              slide.className = 'swiper-slide';

              const img = document.createElement('img');
              img.src = skill.Image;
              img.alt = skill.name;
              img.width = skill.width;
              img.height = skill.height;

              slide.appendChild(img);
              swiperWrapper.appendChild(slide);
          });
      });

      new Swiper('.swiper1', {
          slidesPerView: 1,
          spaceBetween: 10,
          loop: true,
          autoplay: {
              delay: 0,
              disableOnInteraction: false,
          },
          speed: 5000,
          breakpoints: {
              640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
              },
              768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
              },
              1024: {
                  slidesPerView: 5,
                  spaceBetween: 40,
              },
          },
      });

      new Swiper('.swiper2', {
          slidesPerView: 1,
          spaceBetween: 10,
          loop: true,
          autoplay: {
              delay: 0,
              disableOnInteraction: false,
              reverseDirection: true,
          },
          speed: 5000,
          breakpoints: {
              640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
              },
              768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
              },
              1024: {
                  slidesPerView: 5,
                  spaceBetween: 40,
              },
          },
      });
  });
  const cube = document.querySelector('.cube');
  const container = document.querySelector('.container');
  let timeoutId;

  document.addEventListener('mousemove', (e) => {
      clearTimeout(timeoutId);
      cube.classList.remove('animate');

      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width * 2 - 1;
      const y = (e.clientY - rect.top) / rect.height * 2 - 1;
      const rotateX = y * 50;
      const rotateY = x * 50;
      cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

      timeoutId = setTimeout(() => {
          cube.style.transform = ''; // Clear inline transform style
          cube.classList.add('animate');
      }, 1000); // 1 second of inactivity
  });
