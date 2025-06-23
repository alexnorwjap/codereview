<script setup>
const emit = defineEmits(['close'])

const modalRef = ref(null)

const closeModal = () => {
  emit('close')
}
useClickOutside(modalRef, closeModal)
</script>

<template>
  <div class="modal-speciality" ref="modalRef">
    <BaseMenuNav class="modal-speciality__nav" />
    <AppHeaderModalServicesList class="modal-speciality__services" />
  </div>
</template>

<style scoped lang="scss">
.modal-speciality {
  position: absolute;
  padding: 20px;
  top: calc(100% + 30px);
  left: 50%;
  transform: translate(-50%, 0);
  min-width: clamp(350px, calc(126px + 59.69vw), 584px);
  gap: 30px;
  display: flex;
  flex-direction: column;
  z-index: 99;

  border-radius: var(--radius-12);
  box-shadow: 0 1px 12px 2px rgba(36, 36, 36, 0.07);
  background: var(--white);

  @media (max-width: 650px) {
    min-width: auto;
    width: 100%;
  }

  &__nav {
  }
}
</style>
