<template>
  <div ref='navbar' class='grid grid-cols-3 px-8 py-4 fixed w-full transition transition-all ease-in-out duration-200 z-40'>
    <h1 class='text-3xl text-gray-700 font-semibold'>gldnpz</h1>
  </div>
</template>

<script>
export default {
  mounted () {
    window.addEventListener('scroll', (event) => {
      const opaqueNavbarClasses = ['shadow-md', 'bg-gray-50']
      if (document.documentElement.scrollTop > 50) {
        this.$refs.navbar.classList.add(...opaqueNavbarClasses)
        console.log('a')
      } else {
        this.$refs.navbar.classList.remove(...opaqueNavbarClasses)
        console.log('b')
      }
    })
  }
}
</script>

<style>

</style>
