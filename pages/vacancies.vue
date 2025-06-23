<script setup>
const vacanciesStore = useVacanciesStore()
const route = useRoute()
const { selectedSpeciality } = baseSpecialities()

// Наблюдатель, который связывает `selectedSpeciality` с фильтром в сторе.
watch(
  selectedSpeciality,
  newSpeciality => {
    vacanciesStore.setSpeciality(newSpeciality)
  },
  { immediate: true }
)

// При монтировании страницы, проверяем URL и обновляем `selectedSpeciality`.
onMounted(() => {
  if (route.query.speciality) {
    selectedSpeciality.value = route.query.speciality
  }
})

const dropDownsStatus = reactive({
  speciality: false,
  source: false,
  location: false,
})
const toggleDropdown = type => {
  Object.keys(dropDownsStatus).forEach(key => {
    dropDownsStatus[key] = key === type ? !dropDownsStatus[key] : false
  })
}
// Загружаем все вакансии
const { pending } = useAsyncData('vacancies', () =>
  vacanciesStore.fetchVacancies()
)

// Прямой доступ к Map объектам
const sourceFilters = vacanciesStore.filterCounts.source
const locationFilters = vacanciesStore.filterCounts.location
const specialityFilters = vacanciesStore.filterCounts.speciality

const handleFilterClick = (filterType, value) => {
  // Клик по фильтру обновляет центральное состояние в `baseSpecialities`.
  if (filterType === 'speciality') {
    const isCurrentlySelected = selectedSpeciality.value === value
    selectedSpeciality.value = isCurrentlySelected ? null : value
  } else {
    vacanciesStore.toggleFilter(filterType, value)
  }
}

const handleRemoteChange = event => {
  vacanciesStore.setBooleanFilter('remote', event.target.checked)
}
const handleInternshipChange = event => {
  vacanciesStore.setBooleanFilter('internship', event.target.checked)
}
</script>

<template>
  <section class="page__vacancies vacancies">
    <div class="vacancies__container">
      <h1 class="vacancies__title" v-if="selectedSpeciality"
        >Вакансии по {{ selectedSpeciality }}</h1
      >
      <h1 class="vacancies__title" v-if="!selectedSpeciality"> Все вакансии</h1>
      <h2 class="vacancies__subtitle"
        >На этой странице агрегируются junior-вакансии и стажировки из различных
        источников: hh.ru, Habr Career, LinkedIn, Telegram-каналы и многие
        другие
      </h2>
      <div class="vacancies__actions actions">
        <a href="#" class="actions__create-vacancies">Добавить вакансию</a>
        <VacanciesFilter
          class="actions__filter"
          :specialityFilters="specialityFilters"
          :handleFilterClick="handleFilterClick"
          :pending="pending"
          :speciality="dropDownsStatus.speciality"
          :type="'speciality'"
          :label="selectedSpeciality || 'Специализация'"
          @toggleDropdown="toggleDropdown"
        />
        <VacanciesFilter
          class="source__filter"
          :specialityFilters="sourceFilters"
          :handleFilterClick="handleFilterClick"
          :pending="pending"
          :speciality="dropDownsStatus.source"
          :type="'source'"
          :label="'Источник'"
          @toggleDropdown="toggleDropdown"
        />
        <VacanciesFilter
          class="actions__filter location"
          :specialityFilters="locationFilters"
          :handleFilterClick="handleFilterClick"
          :pending="pending"
          :label="'Город'"
          :speciality="dropDownsStatus.location"
          :type="'location'"
          @toggleDropdown="toggleDropdown"
        />
        <div class="vacancies__toggle">
          <label
            for="remoting"
            @change="handleRemoteChange"
            :class="vacanciesStore.selectedFilters.remote ? 'active' : ''"
            >Удаленно
            <input
              type="checkbox"
              id="remoting"
              :checked="vacanciesStore.selectedFilters.remote"
            /><span></span>
          </label>
          <label
            for="intern"
            @change="handleInternshipChange"
            :class="vacanciesStore.selectedFilters.internship ? 'active' : ''"
            >Стажировка
            <input
              type="checkbox"
              id="intern"
              :checked="vacanciesStore.selectedFilters.internship"
            />
            <span></span>
          </label>
        </div>
      </div>
      <BaseLoading v-if="pending" />
      <ClientOnly>
        <VacanciesList
          v-if="!pending"
          class="vacancies__items"
          :vacancyData="vacanciesStore.filteredVacancies"
        />
      </ClientOnly>
    </div>
  </section>
</template>

<style scoped lang="scss">
.vacancies {
  position: relative;
  font-family: var(--madefor-display);

  &___container {
    display: flex;
    flex-direction: column;
    @media (max-width: 767px) {
    }
  }
  &__title {
    font-weight: bold;
    font-size: clamp(1.5rem, calc(-0.05rem + 6.63vw), 3.13rem);
    line-height: 1.04;
    letter-spacing: -0.02em;
    color: var(--neutral-800);
    margin-bottom: 20px;

    @media (max-width: 767px) {
      margin-bottom: 10px;
      line-height: 1.17;
      letter-spacing: -0.04em;
    }
  }
  &__subtitle {
    font-weight: var(--medium);
    font-size: clamp(0.88rem, calc(0.64rem + 1.02vw), 1.13rem);
    line-height: 1.22;
    letter-spacing: -0.03em;
    color: var(--neutral-700);
    margin-bottom: 50px;

    @media (max-width: 767px) {
      margin-bottom: 30px;
      line-height: 1.29;
      letter-spacing: -0.04em;
    }
  }
  &__toggle {
    display: flex;
    gap: 10px;
  }
}

.actions {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-bottom: 25px;
  @media (max-width: 1199px) {
    justify-content: center;
  }
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
    cursor: pointer;
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
        border-color: var(--neutral-800);
        &:before {
          background: var(--neutral-800);
          transform: translateX(14px);
        }
      }
    }
  }

  &__create-vacancies {
    min-width: 197px;
    margin-right: 10px;
    transition: background 0.4s ease;
    background: var(--gradient-button), var(--white);
    &:hover {
      background: var(--gradient-button-hover), var(--white);
    }
  }

  @media (max-width: 767px) {
    margin-bottom: 15px;
  }
}
</style>
