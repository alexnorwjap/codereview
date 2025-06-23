export const formattedDate = storeData => {
  const date = new Date(storeData)

  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()

  return `${String(day).padStart(2, '0')}.${String(month).padStart(2, '0')}.${year}`
}
