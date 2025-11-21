import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function useNavbarEffects() {
  useEffect(() => {
    // Inicializa animações (AOS substitui ScrollReveal)
    AOS.init({ duration: 1000, once: true });

    const header = document.querySelector(".header-area");
    const menuTrigger = document.querySelector(".menu-trigger");
    const nav = document.querySelector(".header-area .nav");

    // Função para fixar navbar no scroll
    const scrollNavBar = () => {
      const width = window.innerWidth;
      if (width > 991) {
        const scroll = window.scrollY;
        if (scroll >= 30) {
          header?.classList.add("header-sticky");
        } else {
          header?.classList.remove("header-sticky");
        }
      }
    };

    // Alternar menu mobile
    const toggleMenu = () => {
      menuTrigger?.classList.toggle("active");
      nav?.classList.toggle("active");
    };

    menuTrigger?.addEventListener("click", toggleMenu);
    window.addEventListener("scroll", scrollNavBar);
    window.addEventListener("resize", scrollNavBar);

    // Loader (simples substituto)
    const preloader = document.getElementById("preloader");
    if (preloader) {
      setTimeout(() => {
        preloader.style.opacity = "0";
        preloader.style.visibility = "hidden";
      }, 800);
    }

    // Cleanup
    return () => {
      menuTrigger?.removeEventListener("click", toggleMenu);
      window.removeEventListener("scroll", scrollNavBar);
      window.removeEventListener("resize", scrollNavBar);
    };
  }, []);
}
