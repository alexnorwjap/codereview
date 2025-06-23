<script setup>
const vacanciesStore = useVacanciesStore()
const modalRefs = ref(null)
const close = defineEmits(['closeDropdown'])
const { selectedSpeciality } = baseSpecialities()

defineProps({
  specialityFilters: Object,
  handleFilterClick: Function,
  typeDropdown: String,
  label: String,
})

const closeModal = () => {
  close('closeDropdown')
}

useClickOutside(modalRefs, closeModal)
</script>

<template>
  <ul class="dropdown" ref="modalRefs">
    <li
      class="dropdown__item"
      :class="{ active: vacanciesStore.isFilterSelected(typeDropdown, name) }"
      v-for="[name, count] in label !== 'Специализация'
        ? vacanciesStore.dynamicFilterCounts[typeDropdown].entries()
        : specialityFilters.entries()"
      :key="name"
      @click="handleFilterClick(typeDropdown, name)"
    >
      <span class="dropdown__name">{{ name }}</span>

      <span
        class="dropdown__count"
        v-if="label !== 'Специализация' && label !== selectedSpeciality"
        >{{ count }}
      </span>
      <BaseSvgIcon
        class="dropdown__icon"
        :class="{ active: vacanciesStore.isFilterSelected(typeDropdown, name) }"
        icon="check"
        :width="18"
        :height="18"
        v-else
      />
    </li>
  </ul>
</template>

<style scoped lang="scss">
.dropdown {
  max-height: 255px;

  position: absolute;
  content: '';
  top: calc(100% + 10px);
  width: 224px;
  left: 50%;
  height: auto;
  transform: translateX(-50%);
  background: var(--white);
  border-radius: var(--radius-14);
  overflow: auto;

  box-shadow:
    0 4px 24px 0 rgba(0, 0, 0, 0.12),
    0 1px 3px 0 rgba(0, 0, 0, 0.05);
  z-index: 99;
  padding: 10px 0 5px 0;

  &__item {
    padding: 9px 15px;
    cursor: pointer;
    display: flex;
    gap: 10px;
    align-items: center;

    font-size: 1.125rem;
    line-height: 1.22;
    letter-spacing: -0.03em;
    color: var(--neutral-800);

    &:hover {
      background: var(--neutral-100);
    }

    &.active {
      background: var(--neutral-200);
    }
    &:has(.dropdown__icon) {
      justify-content: space-between;
    }
  }
  &__count {
    color: var(--neutral-500);
  }
  &__icon {
    display: none;
    &.active {
      display: block;
    }
  }
}
</style>
