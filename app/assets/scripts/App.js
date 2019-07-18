import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import AnimateOnScroll from "./modules/AnimateOnScroll";
import $ from "jquery";
import StickyHeader from "./modules/StickyHeader";

const mobileMenu = new MobileMenu();
new RevealOnScroll($(".feature-item"), "85%");
new AnimateOnScroll($(".skillBar"), "85%");
new RevealOnScroll($(".testimonials"), "60%");
const stickyHeader = new StickyHeader();
