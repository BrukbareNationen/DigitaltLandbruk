TweenMax.defaultEase = Linear.easeOut;

new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  navigation: true,
  scrollingSpeed: 400,
  onLeave: (origin, destination, direction) => {
    const section = destination.item;
    const title = section.querySelector("h1");
    const par = section.querySelector(".description");
    const tl = new TimelineMax({ delay: 0.5 });
    tl.fromTo(title, 0.5, { y: "50", opacity: 0 }, { y: "0", opacity: 1 }).fromTo(par, 0.5, {y:"-50", opacity: 0}, {y:"0", opacity: 1});
    // if (destination.index === 1) {
    //   // const fade = document.querySelectorAll(".fade2");
    //   const description = document.querySelector("#des2");

    //   tl.fromTo(
    //       description,
    //       0.5,
    //       { opacity: 0, y: "50" },
    //       { y: "0", opacity: 1 }
    //     );
    // }

    // if (destination.index === 2) {
    //   // const fade = document.querySelectorAll(".fade2");
    //   const description = document.querySelector("#des3");

    //   tl.fromTo(
    //       description,
    //       0.5,
    //       { opacity: 0, y: "-150" },
    //       { y: "-20", opacity: 1 }
    //     );
    // }

    // if (destination.index === 3) {
    //   // const fade = document.querySelectorAll(".fade2");
    //   const description = document.querySelector("#des4");

    //   tl.fromTo(
    //       description,
    //       0.5,
    //       { opacity: 0, y: "-150", x: "-100" },
    //       { y: "-20", opacity: 1 , x:"0"}
    //     );
    // }
  }
});
