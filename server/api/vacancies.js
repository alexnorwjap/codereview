export default defineEventHandler(async event => {
  const data = await $fetch('http://jobs.yourcodereview.com:8005/vacancies')
  return data
})
