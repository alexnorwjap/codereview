export const useVacanciesStore = defineStore('vacancies', () => {
  // State
  const vacancies = ref([])
  const loading = ref(false)

  // Filter counts using reactive Maps
  const filterCounts = reactive({
    source: new Map(),
    location: new Map(),
    speciality: new Map(),
  })
  // filteredVacancies
  // Selected filters
  const selectedFilters = reactive({
    source: [],
    location: [],
    speciality: [],
    remote: false,
    internship: false,
  })

  // Getters (computed properties)
  const filteredVacancies = computed(() => {
    return vacancies.value.filter(vacancy => {
      // Фильтр по источнику
      if (
        selectedFilters.source.length > 0 &&
        !selectedFilters.source.includes(vacancy.source)
      ) {
        return false
      }

      // Фильтр по местоположению
      if (
        selectedFilters.location.length > 0 &&
        !selectedFilters.location.includes(vacancy.location)
      ) {
        return false
      }

      // Фильтр по специализации
      if (
        selectedFilters.speciality.length > 0 &&
        !selectedFilters.speciality.includes(vacancy.speciality)
      ) {
        return false
      }

      // Фильтр по удаленной работе
      if (selectedFilters.remote && !vacancy.remote) {
        return false
      }

      // Фильтр по стажировке
      if (selectedFilters.internship && !vacancy.internship) {
        return false
      }

      return true
    })
  })

  // Dynamic filter counts based on current filters
  const dynamicFilterCounts = computed(() => {
    const counts = {
      source: new Map(),
      location: new Map(),
      speciality: new Map(),
    }

    // For speciality, always use the full list from original data
    // This ensures the speciality filter always shows all options
    vacancies.value.forEach(vacancy => {
      if (vacancy.speciality) {
        const currentCount = counts.speciality.get(vacancy.speciality) || 0
        counts.speciality.set(vacancy.speciality, currentCount + 1)
      }
    })

    // Filter vacancies based on all filters except the one we're counting
    const getFilteredVacanciesExcept = filterType => {
      return vacancies.value.filter(vacancy => {
        // Skip the filter type we're calculating counts for
        if (
          filterType !== 'source' &&
          selectedFilters.source.length > 0 &&
          !selectedFilters.source.includes(vacancy.source)
        ) {
          return false
        }

        if (
          filterType !== 'location' &&
          selectedFilters.location.length > 0 &&
          !selectedFilters.location.includes(vacancy.location)
        ) {
          return false
        }

        if (
          filterType !== 'speciality' &&
          selectedFilters.speciality.length > 0 &&
          !selectedFilters.speciality.includes(vacancy.speciality)
        ) {
          return false
        }

        if (selectedFilters.remote && !vacancy.remote) {
          return false
        }

        if (selectedFilters.internship && !vacancy.internship) {
          return false
        }

        return true
      })
    }

    // Calculate counts for source and location only
    ;['source', 'location'].forEach(filterType => {
      const filteredVacs = getFilteredVacanciesExcept(filterType)

      filteredVacs.forEach(vacancy => {
        const value = vacancy[filterType]
        if (value) {
          const currentCount = counts[filterType].get(value) || 0
          counts[filterType].set(value, currentCount + 1)
        }
      })
    })

    return counts
  })

  // Actions
  const updateFilterCount = (filterType, value) => {
    if (!value) return

    const currentCount = filterCounts[filterType].get(value) || 0
    filterCounts[filterType].set(value, currentCount + 1)
  }

  const clearFilterCounts = () => {
    filterCounts.source.clear()
    filterCounts.location.clear()
    filterCounts.speciality.clear()
  }

  const toggleFilter = (filterType, value) => {
    const currentFilters = selectedFilters[filterType]
    const index = currentFilters.indexOf(value)

    if (index > -1) {
      // Удаляем фильтр, если он уже выбран
      currentFilters.splice(index, 1)
    } else {
      // Добавляем фильтр, если он не выбран
      currentFilters.push(value)
    }
  }

  const setBooleanFilter = (filterType, value) => {
    selectedFilters[filterType] = value
  }

  const clearAllFilters = () => {
    selectedFilters.source = []
    selectedFilters.location = []
    selectedFilters.speciality = []
    selectedFilters.remote = false
    selectedFilters.internship = false
  }

  const isFilterSelected = (filterType, value) => {
    return selectedFilters[filterType].includes(value)
  }

  // Новый action для установки одного фильтра по специальности
  const setSpeciality = speciality => {
    if (speciality) {
      selectedFilters.speciality = [speciality]
    } else {
      selectedFilters.speciality = []
    }
  }

  const fetchVacancies = async () => {
    // Этот метод теперь снова будет отвечать за загрузку ВСЕХ вакансий
    // для первоначального наполнения фильтров, как в MenuNav.
    if (vacancies.value.length > 0) {
      return vacancies.value
    }
    loading.value = true
    try {
      const data = await $fetch('/api/vacancies')

      if (data && data.items) {
        setVacancies(data.items)
      } else {
        setVacancies([])
      }
    } catch (e) {
      console.error('Ошибка при загрузке вакансий:', e)
      setVacancies([])
    } finally {
      loading.value = false
    }
    return vacancies.value
  }

  const setVacancies = newVacancies => {
    vacancies.value = newVacancies || []
    clearFilterCounts()

    // Используем vacancies.value для итерации, что безопаснее
    vacancies.value.forEach(item => {
      updateFilterCount('source', item.source)
      updateFilterCount('location', item.location)
      updateFilterCount('speciality', item.speciality)
    })
  }

  // Return state, getters, and actions
  return {
    // State
    vacancies,
    loading,
    filterCounts,
    selectedFilters,

    // Getters
    filteredVacancies,
    dynamicFilterCounts,

    // Actions
    updateFilterCount,
    clearFilterCounts,
    toggleFilter,
    setBooleanFilter,
    clearAllFilters,
    isFilterSelected,
    fetchVacancies,
    setVacancies,
    setSpeciality,
  }
})
