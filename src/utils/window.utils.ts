import { nextTick } from 'vue';

/**
 * Scrolls to an element with the specified ID
 * @param id - The ID of the element to scroll to
 */
export const scrollToRef = (id: string): void => {
  nextTick(() => {
    console.log(window?.document?.getElementById(id));
    const element = window?.document?.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offset = id === 'home' ? 0 : 100;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  });
};