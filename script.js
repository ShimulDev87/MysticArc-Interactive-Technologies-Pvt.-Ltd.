document.addEventListener("DOMContentLoaded", () => {
    let index = 0;
    const images = document.querySelectorAll(".carousel-item");
    const totalImages = images.length;

    // Carousel image change function
    function changeImage() {
        index = (index + 1) % totalImages;
        document.querySelector(".carousel-images").style.transform = `translateX(-${index * 100}vw)`;
    }

    setInterval(changeImage, 6000); // Change image every 6 seconds

    // Menu toggle functionality
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        menuToggle.classList.toggle("active");
    });
});

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", () => {
    let index = 0;
    const images = document.querySelectorAll(".carousel-item");
    const totalImages = images.length;

    function showNextImage() {
        images.forEach((img) => img.classList.remove("active")); // Hide all images
        images[index].classList.add("active"); // Show current image

        index = (index + 1) % totalImages; // Move to the next image
    }

    setInterval(showNextImage, 4000); // Change image every 4 seconds
});
document.addEventListener("DOMContentLoaded", function () {
    const portfolioItems = document.querySelectorAll(".portfolio-item");

    portfolioItems.forEach((item) => {
        item.addEventListener("mouseover", () => {
            item.classList.add("hovered");
        });

        item.addEventListener("mouseleave", () => {
            item.classList.remove("hovered");
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const portfolioItems = document.querySelectorAll(".portfolio-item");

    portfolioItems.forEach((item) => {
        item.addEventListener("mouseover", () => {
            item.classList.add("hovered");
        });

        item.addEventListener("mouseleave", () => {
            item.classList.remove("hovered");
        });
    });
});

const aboutTexts = {
    en: `At MysticArc Interactive, we blend spirituality and innovation to craft immersive gaming experiences and powerful engineering solutions.
  
    With a team of passionate developers, designers, and visionaries, we turn ideas into reality. Our expertise spans across several domains, including Game Development, Game Publishing, and Digital Engineering.
  
    At MysticArc Interactive, we believe that work can be a form of worship (Ibadat). Our mission is to create games and digital experiences that positively impact people's lives—whether through educational tools, motivational games, spiritual learning, or innovative simulations.
  
    ✅ Developing meaningful games that entertain, educate, and inspire.
    ✅ Helping people through technology and innovation.
    ✅ Balancing financial success with ethical, purposeful work.
  
    For us, game development is not just a business—it is a way to serve people and contribute to a better world while earning ethically and sustainably.`,
  
    bn: `MysticArc Interactive-এ আমরা আধ্যাত্মিকতা এবং প্রযুক্তিকে একত্রিত করে অসাধারণ গেমিং অভিজ্ঞতা এবং শক্তিশালী প্রকৌশল সমাধান তৈরি করি।
  
    আমাদের দক্ষ টিমের সদস্যরা তাদের সৃজনশীলতা ও দক্ষতাকে কাজে লাগিয়ে ধারণাকে বাস্তবে পরিণত করে। আমাদের বিশেষজ্ঞতা রয়েছে গেম ডেভেলপমেন্ট, গেম পাবলিশিং এবং ডিজিটাল ইঞ্জিনিয়ারিং-এ।
  
    MysticArc Interactive বিশ্বাস করে যে কাজ ইবাদতের সমান। আমাদের লক্ষ্য হলো এমন গেম তৈরি করা যা মানুষের জীবনকে ইতিবাচকভাবে প্রভাবিত করে—শিক্ষামূলক টুল, মোটিভেশনাল গেম, আধ্যাত্মিক শিক্ষা, বা উদ্ভাবনী সিমুলেশনের মাধ্যমে।
  
    ✅ অর্থবহ গেম তৈরি করা যা মানুষকে বিনোদন দেয়, শিক্ষা দেয় এবং অনুপ্রাণিত করে।
    ✅ প্রযুক্তি এবং উদ্ভাবনের মাধ্যমে মানুষের সহায়তা করা।
    ✅ আর্থিক সফলতাকে নৈতিক ও উদ্দেশ্যপূর্ণ কাজের সঙ্গে সামঞ্জস্যপূর্ণ করা।
  
    আমাদের জন্য, গেম ডেভেলপমেন্ট শুধুমাত্র ব্যবসা নয়—এটি একটি সেবা, যা নৈতিকভাবে উপার্জন করে বিশ্বকে আরও ভালো করতে সাহায্য করে।`,
  
    pt: `Na MysticArc Interactive, combinamos espiritualidade e inovação para criar experiências de jogos imersivas e soluções tecnológicas poderosas.
  
    Nossa equipe de desenvolvedores, designers e visionários transforma ideias em realidade. Nossa experiência abrange áreas como Desenvolvimento de Jogos, Publicação de Jogos e Engenharia Digital.
  
    A MysticArc Interactive acredita que o trabalho pode ser uma forma de adoração (Ibadat). Nosso objetivo é criar jogos e experiências digitais que impactem positivamente a vida das pessoas—seja por meio de ferramentas educacionais, jogos motivacionais, aprendizado espiritual ou simulações inovadoras.
  
    ✅ Desenvolver jogos significativos que entretenham, eduquem e inspirem.
    ✅ Ajudar as pessoas por meio da tecnologia e inovação.
    ✅ Equilibrar o sucesso financeiro com um trabalho ético e com propósito.
  
    Para nós, o desenvolvimento de jogos não é apenas um negócio—é uma forma de servir as pessoas e contribuir para um mundo melhor enquanto ganhamos de forma ética e sustentável.`,
  
    es: `En MysticArc Interactive, combinamos espiritualidad e innovación para crear experiencias de juego inmersivas y soluciones de ingeniería poderosas.
  
    Con un equipo de desarrolladores, diseñadores y visionarios apasionados, convertimos ideas en realidad. Nuestra experiencia abarca múltiples áreas, incluyendo Desarrollo de Videojuegos, Publicación de Juegos e Ingeniería Digital.
  
    En MysticArc Interactive, creemos que el trabajo puede ser una forma de adoración (Ibadat). Nuestra misión es crear juegos y experiencias digitales que impacten positivamente en la vida de las personas, ya sea mediante herramientas educativas, juegos motivacionales, aprendizaje espiritual o simulaciones innovadoras.
  
    ✅ Desarrollar juegos significativos que entretengan, eduquen e inspiren.
    ✅ Ayudar a las personas a través de la tecnología y la innovación.
    ✅ Equilibrar el éxito financiero con un trabajo ético y con propósito.
  
    Para nosotros, el desarrollo de videojuegos no es solo un negocio—es una manera de servir a las personas y contribuir a un mundo mejor mientras ganamos de manera ética y sostenible.`
  };
  
  
  let textElement = document.getElementById("about-text");
  let typingTimeout;
  
  function changeLanguage(lang) {
      clearTimeout(typingTimeout); // Stop any ongoing typing effect
      const fullText = aboutTexts[lang];
      textElement.innerHTML = ""; // Clear the text
  
      // Create faded text with low opacity
      let fadedHTML = "";
      for (let i = 0; i < fullText.length; i++) {
          fadedHTML += `<span class="faded" id="char-${i}">${fullText[i]}</span>`;
      }
      textElement.innerHTML = fadedHTML;
  
      // Start typing effect
      typeEffect(fullText, 0);
  }
  
  function typeEffect(text, index) {
      if (index < text.length) {
          let charSpan = document.getElementById(`char-${index}`);
          if (charSpan) {
              charSpan.classList.add("highlighted"); // Highlight current letter
          }
          typingTimeout = setTimeout(() => typeEffect(text, index + 1), 20);
      }
  }
  
  // Default language
  changeLanguage('en');
  

