<template>
  <a class='transition duration-300 hover:text-red-400 transform active:scale-95 active:text-red-500 hover:scale-110 hover:rotate-6 hover:-translate-y-1' :href='url'>
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: ['url']
}
</script>

<style>

</style>
