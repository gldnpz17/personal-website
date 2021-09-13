<template>
  <div class='h-20 w-20 group bg-gray-700 rounded-full shadow relative active:scale-95 active:text-red-500 hover:text-red-400 transition duration-300 transform hover:scale-110'>
    <svg class="h-full w-full inline-block px-5 labeled-button" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <slot name='svg-path'></slot>
    </svg>
    <p class='label select-none text-white bg-gray-600 rounded whitespace-nowrap ml-4 py-3 px-6 text-xl absolute left-full top-1/2'>{{ label }}</p>
  </div>
</template>

<script>
export default {
  props: ['label']
}
</script>

<style scoped>
  .labeled-button ~ .label {
    transition-property: all;
    transition-duration: 200ms;
    transition-timing-function: ease-in-out;
    opacity: 0;
    transform: translateY(-100%) rotateZ(-12deg);
    visibility: hidden;
  }
  .labeled-button:hover ~ .label {
    opacity: 1;
    transform: translateY(-50%) rotateZ(0deg);
    visibility: visible;
  }
</style>
