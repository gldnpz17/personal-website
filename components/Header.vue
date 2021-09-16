<template>
  <div ref='navbar' class='grid grid-cols-3 px-8 py-4 fixed w-full transition ease-in-out duration-200 z-40'>
    <h1 ref='pageName' class='text-xl md:text-3xl text-gray-700 font-semibold hidden md:inline-block'>gldnpz</h1>
  </div>
</template>

<script>
export default {
  mounted () {
    window.addEventListener('scroll', (event) => {
      const opaqueNavbarClasses = ['shadow-md', 'bg-gray-50']
      if (document.documentElement.scrollTop > 50) {
        this.$refs.navbar.classList.add(...opaqueNavbarClasses)
        this.$refs.pageName.classList.remove('hidden')
        this.$refs.pageName.classList.add('inline-block')
      } else {
        this.$refs.navbar.classList.remove(...opaqueNavbarClasses)
        this.$refs.pageName.classList.add('hidden')
        this.$refs.pageName.classList.remove('inline-block')
      }
    })
  }
}
</script>

<style>

</style>
