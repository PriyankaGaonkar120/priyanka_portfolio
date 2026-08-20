/* =========================================================
   PORTFOLIO JAVASCRIPT
   Priyanka Gaonkar
========================================================= */


/* =========================================================
   YEAR
========================================================= */

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


/* =========================================================
   PROJECT DATA
========================================================= */

const projectsData = [
  {
    title: "Campus Micro-Marketplace",

    category: "Personal Project · May 2026 – Present",

    desc:
      "A full-stack campus marketplace that enables students to list and request freelance services such as design, tutoring, and code help. Includes JWT-based authentication, role-based access control, request management, real-time status updates, and in-app chat between clients and service providers.",

    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
      "Ethereum",
      "IPFS"
    ],

    img:
      "https://placehold.co/800x500/0b1024/6366f1?text=Campus+Micro-Marketplace",

    github:
      "https://github.com/PriyankaGaonkar120",

    demo: "#"
  },


  {
    title: "Cross-District Knowledge Transfer for Landslide Risk Prediction",

    category: "Major Project · 2026 – Present",

    desc:
      "A machine learning project focused on landslide risk prediction in Hassan district using knowledge transferred from neighboring districts. The project uses multiple landslide conditioning factors and machine learning models to address data scarcity and improve regional landslide risk assessment.",

    tech: [
      "Python",
      "Machine Learning",
      "Random Forest",
      "XGBoost",
      "ANN",
      "GIS"
    ],

    img:
      "https://placehold.co/800x500/0b1024/8b5cf6?text=Landslide+Risk+Prediction",

    github:
      "https://github.com/PriyankaGaonkar120",

    demo: "#"
  },


  {
    title: "Blockchain-Based Digital Locker System",

    category: "Hackathon Project · 1st Place",

    desc:
      "A blockchain-based digital locker concept designed for secure storage and verification of digital documents. The project explores decentralized technologies to improve document security, integrity, and controlled access.",

    tech: [
      "Blockchain",
      "Ethereum",
      "IPFS"
    ],

    img:
      "https://placehold.co/800x500/0b1024/06b6d4?text=Digital+Locker",

    github:
      "https://github.com/PriyankaGaonkar120",

    demo: "#"
  },


  {
    title: "Waste Collection Management System",

    category: "Mini Project · 2025",

    desc:
      "A waste collection management system developed for Hasiru Dala NGO to support the organization and management of waste collection activities. The project focuses on improving coordination and making waste collection operations more structured and manageable.",

    tech: [
      "Web Development",
      "JavaScript",
      "Database"
    ],

    img:
      "https://placehold.co/800x500/0b1024/6366f1?text=Waste+Collection+Management",

    github:
      "https://github.com/PriyankaGaonkar120",

    demo: "#"
  }
];


/* =========================================================
   PROJECTS RENDER
========================================================= */

const projectsGrid = document.getElementById("projectsGrid");

if (projectsGrid) {

  projectsData.forEach((project) => {

    const outer = document.createElement("div");

    outer.className = "reveal";

    outer.innerHTML = `
      <div class="flip-scene h-full">

        <div class="flip-card">

          <!-- ================= FRONT ================= -->

          <div class="flip-face flip-front glass glass-border">

            <!-- Project Image -->

            <div class="aspect-[4/3] overflow-hidden">

              <img
                src="${project.img}"
                alt="${project.title}"
                loading="lazy"
                class="w-full h-full object-cover"
              />

            </div>


            <!-- Project Content -->

            <div class="p-4 flex flex-col flex-1">

              <!-- Category -->

              <p class="text-xs text-cyan-300 font-alt mb-2">
                ${project.category}
              </p>


              <!-- Title -->

              <h3
                class="font-display text-base font-semibold mb-3 leading-snug"
              >
                ${project.title}
              </h3>


              <!-- Technologies -->

              <div class="flex flex-wrap gap-1.5 mb-4">

                ${project.tech
                  .slice(0, 4)
                  .map(
                    (tech) => `
                      <span class="badge text-[10px]">
                        ${tech}
                      </span>
                    `
                  )
                  .join("")}

              </div>


              <!-- Buttons -->

              <div class="flex gap-2 mt-auto">

                <!-- GitHub -->

                <a
                  href="${project.github}"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="project-btn flex-1"
                  onclick="event.stopPropagation()"
                >
                  <iconify-icon icon="lucide:github"></iconify-icon>
                  GitHub
                </a>


                <!-- Details -->

                <button
                  class="project-btn project-details-btn"
                  type="button"
                  aria-label="View project details"
                >
                  <iconify-icon icon="lucide:info"></iconify-icon>
                </button>

              </div>

            </div>

          </div>


          <!-- ================= BACK ================= -->

          <div class="flip-face flip-back glass glass-border p-5 flex flex-col">

            <p class="text-xs text-cyan-300 font-alt mb-2">
              ${project.category}
            </p>


            <h3
              class="font-display text-lg font-semibold mb-4"
            >
              ${project.title}
            </h3>


            <p
              class="text-slate-300 text-sm font-alt leading-relaxed"
            >
              ${project.desc}
            </p>


            <div class="mt-auto">

              <!-- Technologies -->

              <div class="flex flex-wrap gap-2 mb-5">

                ${project.tech
                  .map(
                    (tech) => `
                      <span class="tech-tag">
                        ${tech}
                      </span>
                    `
                  )
                  .join("")}

              </div>


              <!-- GitHub -->

              <a
                href="${project.github}"
                target="_blank"
                rel="noopener noreferrer"
                class="project-btn w-full"
                onclick="event.stopPropagation()"
              >
                <iconify-icon icon="lucide:github"></iconify-icon>
                View on GitHub
              </a>

            </div>

          </div>

        </div>

      </div>
    `;

    projectsGrid.appendChild(outer);

  });

}


/* =========================================================
   PROJECT CARD FLIP
========================================================= */

document.querySelectorAll(".flip-scene").forEach((scene) => {

  scene.addEventListener("click", (event) => {

    if (
      window.matchMedia("(hover: none)").matches &&
      !event.target.closest("a")
    ) {
      scene.classList.toggle("is-flipped");
    }

  });

});


/* =========================================================
   PROJECT DETAILS BUTTON
========================================================= */

document.querySelectorAll(".project-details-btn").forEach((button) => {

  button.addEventListener("click", (event) => {

    event.stopPropagation();

    const scene = button.closest(".flip-scene");

    if (scene) {
      scene.classList.toggle("is-flipped");
    }

  });

});


/* =========================================================
   PROFILE PHOTO TILT
========================================================= */

(function () {

  const wrap =
    document.querySelector(".tilt-photo");

  const inner =
    document.querySelector(".tilt-photo-inner");


  if (!wrap || !inner) {
    return;
  }


  wrap.addEventListener("mousemove", (event) => {

    const rect =
      wrap.getBoundingClientRect();

    const x =
      (event.clientX - rect.left) /
        rect.width -
      0.5;

    const y =
      (event.clientY - rect.top) /
        rect.height -
      0.5;


    inner.style.transform = `
      rotateY(${x * 18}deg)
      rotateX(${-y * 18}deg)
    `;

  });


  wrap.addEventListener("mouseleave", () => {

    inner.style.transform =
      "rotateY(0deg) rotateX(0deg)";

  });

})();


/* =========================================================
   NAVBAR
========================================================= */

const navbar =
  document.getElementById("navbar");


window.addEventListener("scroll", () => {

  if (!navbar) {
    return;
  }


  const scrolled =
    window.scrollY > 40;


  navbar.classList.toggle(
    "bg-bgdeep/70",
    scrolled
  );


  navbar.classList.toggle(
    "backdrop-blur-xl",
    scrolled
  );


  navbar.classList.toggle(
    "border-b",
    scrolled
  );


  navbar.classList.toggle(
    "border-white/10",
    scrolled
  );

});


/* =========================================================
   MOBILE MENU
========================================================= */

const menuBtn =
  document.getElementById("menuBtn");

const mobileMenu =
  document.getElementById("mobileMenu");


if (menuBtn && mobileMenu) {

  menuBtn.addEventListener("click", () => {

    const isHidden =
      mobileMenu.classList.toggle("hidden");


    menuBtn.setAttribute(
      "aria-expanded",
      String(!isHidden)
    );

  });

}


/* Close mobile menu when link is clicked */

document
  .querySelectorAll("#mobileMenu a")
  .forEach((link) => {

    link.addEventListener("click", () => {

      if (mobileMenu) {
        mobileMenu.classList.add("hidden");
      }


      if (menuBtn) {

        menuBtn.setAttribute(
          "aria-expanded",
          "false"
        );

      }

    });

  });


/* =========================================================
   SMOOTH SCROLL
========================================================= */

document
  .querySelectorAll('a[href^="#"]')
  .forEach((link) => {

    link.addEventListener("click", (event) => {

      const targetId =
        link.getAttribute("href");


      if (
        !targetId ||
        targetId === "#"
      ) {
        return;
      }


      const target =
        document.querySelector(targetId);


      if (!target) {
        return;
      }


      event.preventDefault();


      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    });

  });


/* =========================================================
   CURSOR GLOW
========================================================= */

const glowEl =
  document.getElementById("cursor-glow");


if (
  glowEl &&
  window.matchMedia("(pointer: fine)").matches
) {

  window.addEventListener("mousemove", (event) => {

    glowEl.style.left =
      `${event.clientX}px`;

    glowEl.style.top =
      `${event.clientY}px`;

  });

}


/* =========================================================
   MAGNETIC BUTTONS
========================================================= */

document
  .querySelectorAll(".magnetic")
  .forEach((button) => {

    button.addEventListener("mousemove", (event) => {

      if (
        !window.matchMedia("(pointer: fine)").matches
      ) {
        return;
      }


      const rect =
        button.getBoundingClientRect();


      const x =
        event.clientX -
        rect.left -
        rect.width / 2;


      const y =
        event.clientY -
        rect.top -
        rect.height / 2;


      button.style.transform = `
        translate(
          ${x * 0.15}px,
          ${y * 0.25}px
        )
      `;

    });


    button.addEventListener("mouseleave", () => {

      button.style.transform =
        "translate(0, 0)";

    });

  });


/* =========================================================
   SCROLL REVEAL - GSAP
========================================================= */

if (
  typeof gsap !== "undefined" &&
  typeof ScrollTrigger !== "undefined"
) {

  gsap.registerPlugin(ScrollTrigger);


  gsap.utils
    .toArray(".reveal")
    .forEach((element, index) => {

      gsap.set(element, {
        opacity: 0,
        y: 30
      });


      gsap.to(element, {

        opacity: 1,

        y: 0,

        duration: 0.8,

        ease: "power3.out",

        delay:
          (index % 3) * 0.06,

        scrollTrigger: {

          trigger: element,

          start: "top 88%",

          once: true

        }

      });

    });

}


/* =========================================================
   THREE.JS BACKGROUND
========================================================= */

(function () {

  const canvas =
    document.getElementById("bg-canvas");


  if (
    !canvas ||
    typeof THREE === "undefined"
  ) {
    return;
  }


  const renderer =
    new THREE.WebGLRenderer({

      canvas,

      alpha: true,

      antialias: true

    });


  renderer.setPixelRatio(
    Math.min(
      window.devicePixelRatio,
      2
    )
  );


  renderer.setSize(
    window.innerWidth,
    window.innerHeight
  );


  const scene =
    new THREE.Scene();


  const camera =
    new THREE.PerspectiveCamera(

      60,

      window.innerWidth /
        window.innerHeight,

      0.1,

      1000

    );


  camera.position.z = 26;


  /* =====================================================
     STARFIELD
  ===================================================== */

  const starGeo =
    new THREE.BufferGeometry();


  const starCount = 1400;


  const positions =
    new Float32Array(
      starCount * 3
    );


  for (
    let i = 0;
    i < starCount;
    i++
  ) {

    positions[i * 3] =
      (Math.random() - 0.5) * 140;


    positions[i * 3 + 1] =
      (Math.random() - 0.5) * 140;


    positions[i * 3 + 2] =
      (Math.random() - 0.5) * 140;

  }


  starGeo.setAttribute(
    "position",
    new THREE.BufferAttribute(
      positions,
      3
    )
  );


  const starMat =
    new THREE.PointsMaterial({

      color: 0x8b9dff,

      size: 0.35,

      transparent: true,

      opacity: 0.7

    });


  const stars =
    new THREE.Points(
      starGeo,
      starMat
    );


  scene.add(stars);


  /* =====================================================
     NEURAL ORB
  ===================================================== */

  const group =
    new THREE.Group();


  /* Outer wireframe */

  const icoGeo =
    new THREE.IcosahedronGeometry(
      7,
      2
    );


  const icoMat =
    new THREE.MeshBasicMaterial({

      color: 0x6366f1,

      wireframe: true,

      transparent: true,

      opacity: 0.35

    });


  const ico =
    new THREE.Mesh(
      icoGeo,
      icoMat
    );


  group.add(ico);


  /* Nodes */

  const icoGeo2 =
    new THREE.IcosahedronGeometry(
      7,
      2
    );


  const nodeMat =
    new THREE.PointsMaterial({

      color: 0x06b6d4,

      size: 0.28

    });


  const nodes =
    new THREE.Points(
      icoGeo2,
      nodeMat
    );


  group.add(nodes);


  /* Inner orb */

  const innerGeo =
    new THREE.IcosahedronGeometry(
      4.2,
      1
    );


  const innerMat =
    new THREE.MeshBasicMaterial({

      color: 0x8b5cf6,

      wireframe: true,

      transparent: true,

      opacity: 0.4

    });


  const inner =
    new THREE.Mesh(
      innerGeo,
      innerMat
    );


  group.add(inner);


  scene.add(group);


  /* =====================================================
     MOUSE MOVEMENT
  ===================================================== */

  let mouseX = 0;

  let mouseY = 0;


  window.addEventListener(
    "mousemove",
    (event) => {

      mouseX =
        event.clientX /
          window.innerWidth -
        0.5;


      mouseY =
        event.clientY /
          window.innerHeight -
        0.5;

    }
  );


  /* =====================================================
     RESIZE
  ===================================================== */

  window.addEventListener(
    "resize",
    () => {

      camera.aspect =
        window.innerWidth /
        window.innerHeight;


      camera.updateProjectionMatrix();


      renderer.setSize(
        window.innerWidth,
        window.innerHeight
      );

    }
  );


  /* =====================================================
     ANIMATION
  ===================================================== */

  let isRunning = true;


  document.addEventListener(
    "visibilitychange",
    () => {

      isRunning =
        !document.hidden;


      if (isRunning) {
        animate();
      }

    }
  );


  function animate() {

    if (!isRunning) {
      return;
    }


    requestAnimationFrame(
      animate
    );


    /* Rotate orb */

    group.rotation.y +=
      0.0022;


    group.rotation.x +=
      0.0007;


    inner.rotation.y -=
      0.0035;


    /* Rotate stars */

    stars.rotation.y +=
      0.0002;


    /* Camera movement */

    camera.position.x +=
      (
        mouseX * 4 -
        camera.position.x
      ) * 0.02;


    camera.position.y +=
      (
        -mouseY * 4 -
        camera.position.y
      ) * 0.02;


    camera.lookAt(
      scene.position
    );


    renderer.render(
      scene,
      camera
    );

  }


  animate();

})();


/* =========================================================
   LOADER
========================================================= */

function hideLoader() {

  const loader =
    document.getElementById("loader");


  if (loader) {

    loader.classList.add("hide");

  }

}


/* Hide after page loads */

window.addEventListener(
  "load",
  () => {

    setTimeout(
      hideLoader,
      300
    );

  }
);


/* DOM fallback */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    setTimeout(
      hideLoader,
      900
    );

  }
);


/* Safety fallback */

setTimeout(
  hideLoader,
  2500
);


/* =========================================================
   ABOUT ACCORDION
========================================================= */

document
  .querySelectorAll(".about-question")
  .forEach((button) => {

    button.addEventListener("click", () => {

      const item =
        button.closest(".about-item");


      if (!item) {
        return;
      }


      const alreadyOpen =
        item.classList.contains("active");


      document
        .querySelectorAll(".about-item")
        .forEach((other) => {

          other.classList.remove("active");

        });


      if (!alreadyOpen) {

        item.classList.add("active");

      }

    });

  });


/* =========================================================
   FAQ ACCORDION
========================================================= */

document
  .querySelectorAll(".faq-question")
  .forEach((button) => {

    button.addEventListener("click", () => {

      const item =
        button.closest(".faq-item");


      if (!item) {
        return;
      }


      const alreadyOpen =
        item.classList.contains("active");


      document
        .querySelectorAll(".faq-item")
        .forEach((other) => {

          other.classList.remove("active");

        });


      if (!alreadyOpen) {

        item.classList.add("active");

      }

    });

  });