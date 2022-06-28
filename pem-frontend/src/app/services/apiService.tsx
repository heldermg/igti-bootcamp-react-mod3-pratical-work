import { getAllData } from './httpService'

export async function apiGetAllExpenses(yearMonth?: string) {
  const params = yearMonth ? `?yearMonth=${yearMonth}&_sort=day` : '?_sort=day'
  const allExpenses = await getAllData(`/expenses${params}`)
  return [...allExpenses]
}

