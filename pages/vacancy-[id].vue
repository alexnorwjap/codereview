<script setup>
const vacanciesStore = useVacanciesStore()
const route = useRoute()

const targetVacancy = computed(() => {
  return vacanciesStore.filteredVacancies.find(
    vacancy => vacancy.id === +route.params.id
  )
})
console.log(route.path)
const similarVacancy = computed(() => {
  if (vacanciesStore.filteredVacancies.length >= 2) {
    return vacanciesStore.filteredVacancies
      .filter(vacancy => vacancy.id !== targetVacancy.value.id)
      .slice(0, 2)
  }
  return []
})

console.log(
  similarVacancy.value,
  targetVacancy.value.id,
  vacanciesStore.filteredVacancies
)

const vacancyListsFirst = [
  {
    title: 'О программе:',
    list: [
      'Период стажировки: июнь-август 2025;',
      'Продолжительность 3 месяца;',
      'Онлайн формат;',
      'До 30 часов в неделю;',
      'Обучение с тренером soft skills;',
      'Работа над коммерческими проектами и менторы. Встречи раз в неделю по 2 часа;',
      'Материалы для изучения + домашние задания + контрольные работы;',
      'Этапы отбора: отправка резюме → заполнение анкеты → собеседование с рекрутером → собеседование с техническим.',
    ],
  },
  {
    title: 'Ожидания от кандидата:',
    list: [
      'Мы ищем выпускников технических вузов, которые имеют базовые знания Java Core, Spring Framework, SQL;',
      'Будет плюсом начальные опыта работы в технической сфере, а также в IT в целом и разработке в частности.',
    ],
  },
]
const vacancyListsSecond = [
  {
    title: 'Дополнительное преимущество:',
    list: [
      'Понимание ООП;',
      'Понимание микросервисной архитектуры и многопоточности.',
    ],
  },
  {
    title: 'Что мы предлагаем после успешного прохождения стажировки:',
    list: [
      'Официальное трудоустройство по ТК РФ в аккредитованную IT-компанию;',
      'Возможность удаленной работы из любого города;',
      'ДМС после прохождения испытательного срока;',
      'Работа в команде высококвалифицированных профессионалов;',
      'Дополнительное обучение, библиотека, возможность посещения конференций, вебинаров, тренингов;',
      'Корпоративные скидки от партнеров;',
      'Насыщенная корпоративная культура.',
    ],
  },
]

provide('vacancyData', {
  target: targetVacancy,
  similar: similarVacancy,
})
</script>

<template>
  <section class="page-vacancy">
    <div class="page-vacancy__container">
      <div class="page-vacancy__base">
        <header class="page-vacancy__header">
          <p class="page-vacancy__date">
            {{ formattedDate(targetVacancy.date_publication) }}</p
          >
          <div class="page-vacancy__title-section">
            <h1>{{ targetVacancy.title }}</h1>
            <VacancyItemTerms class="page-vacancy__terms" :targetVacancy />
          </div>
        </header>

        <main class="page-vacancy__job-content">
          <section class="page-vacancy__job-description">
            <p>
              Компания IT_ONE запускает стажировку для будущих Java
              разработчиков, которая готовится при поддержке специалистов уровня
              от Junior+ до Middle.
            </p>
            <br />
            <p>
              Наши стажеры смогут получить опыт работы в профессиональной среде,
              развить свои навыки под руководством высококвалифицированных
              специалистов и открыть для себя новые возможности развития в IT-
              индустрии.
            </p>
          </section>

          <VacancyItemListDetails
            class="page-vacancy__list"
            v-for="vacancyList in vacancyListsFirst"
            :key="vacancyList.title"
            :programDetails="vacancyList"
          />
          <VacancyItemAdsContent class="page-vacancy__ads" />

          <VacancyItemListDetails
            class="page-vacancy__list"
            v-for="vacancyList in vacancyListsSecond"
            :key="vacancyList.title"
            :programDetails="vacancyList"
          />
        </main>
      </div>

      <VacancyItemSidebar class="page-vacancy__sidebar" />
    </div>
  </section>
</template>

<style scoped lang="scss">
.page-vacancy {
  font-family: var(--madefor-display);
  &__container {
    display: flex;
    justify-content: space-between;
  }
  &__base {
    max-width: 660px;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  &__header {
    position: relative;
    margin-bottom: 19px;
    &:after {
      position: absolute;
      content: '';
      width: 100%;
      bottom: -19px;
      height: 0.5px;
      background: var(--neutral-300);
    }
  }
  &__date {
    font-weight: var(--medium);
    font-size: clamp(1rem, calc(0.88rem + 0.51vw), 1.125rem);
    line-height: 1.22;
    letter-spacing: -0.03em;
    color: var(--neutral-600);
    margin-bottom: 10px;
    @media (max-width: 767px) {
      line-height: 1.25;
    }
  }
  &__title-section {
    max-width: 541px;
    display: flex;
    flex-direction: column;
    gap: clamp(20px, calc(0.65rem + 2.55vw), 30px);
    h1 {
      font-weight: bold;
      font-size: clamp(1.375rem, calc(1.14rem + 1.02vw), 1.625rem);
      line-height: 1.15;
      letter-spacing: -0.02em;
      color: var(--neutral-800);

      @media (max-width: 767px) {
        line-height: 1.18;
        letter-spacing: -0.05em;
      }
    }
  }
  &__job-content {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  &__job-description {
    font-weight: var(--medium);
    font-size: clamp(1rem, calc(0.88rem + 0.51vw), 1.125rem);
    line-height: 1.33;
    letter-spacing: -0.03em;
    color: var(--neutral-800);

    @media (max-width: 767px) {
      line-height: 1.37;
    }
  }
}
</style>
