<script setup>
defineEmits(['toggleDropdown'])
defineProps({
  specialityFilters: Object,
  handleFilterClick: Function,
  type: String,
  label: String,
  speciality: Boolean,
  pending: Boolean,
})
</script>

<template>
  <div class="speciality">
    <button
      class="speciality__dropdown"
      type="button"
      @click.stop="$emit('toggleDropdown', type)"
      ><span>{{ label }}</span
      ><BaseHeaderArrowSvg :active="speciality"
    /></button>
    <VacanciesDropDownModal
      class="speciality__dropdown"
      v-if="speciality && !pending"
      :specialityFilters
      :handleFilterClick="handleFilterClick"
      @closeDropdown="$emit('toggleDropdown', type)"
      :typeDropdown="type"
      :label="label"
    />
  </div>
</template>

<style scoped lang="scss">
.speciality {
  position: relative;
  display: flex;
  flex-direction: column;

  & a,
  button,
  label {
    padding: 12px 15px;
    font-weight: var(--medium);
    border-radius: var(--radius-12);

    font-size: clamp(1rem, calc(0.88rem + 0.51vw), 1.125rem);
    line-height: 1.22;
    letter-spacing: -0.03em;
    color: var(--neutral-800);
  }

  & button,
  label {
    background: var(--neutral-100);
    display: flex;
    align-items: center;
    gap: 5px;
    &:hover,
    &:active,
    &:focus,
    &:checked {
      background: var(--neutral-150);
    }
  }
  & button {
    gap: 8px;
  }
  & label {
    input {
      display: none;
    }
    span {
      display: inline-block;
      position: relative;
      width: 36px;
      height: 22px;
      border-radius: 30px;
      border: 2px solid var(--neutral-300);
      &:before {
        content: '';
        position: absolute;
        top: 2px;
        left: 2px;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        background: var(--neutral-300);
        transition: transform 0.4s ease;
      }
    }
    &.active {
      span {
        &:before {
          transform: translateX(14px);
        }
      }
    }
  }

  &__create-vacancies {
    margin-right: 10px;
    transition: background 0.4s ease;
    background: var(--gradient-button), var(--white);
    &:hover {
      background: var(--gradient-button-hover), var(--white);
    }
  }
}
</style>
