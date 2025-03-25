let currentIndex = 0;
        const slides = document.querySelectorAll(".slide");

        function updateSlide() {
            
            slides.forEach((slide, index) => {
                slide.classList.remove("active");
                if (index === currentIndex) {
                    slide.classList.add("active");
                }
            });

        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % slides.length;
            updateSlide();
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            updateSlide();
        }