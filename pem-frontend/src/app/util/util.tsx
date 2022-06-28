
const months: string[] = [
  'January', 'February', 'March', 
  'April', 'May', 'June', 
  'July', 'August', 'September',
  'October', 'November', 'December']

function padStartWithZero(element: any, length: number): string {
  if (element) {
    return element.toString().padStart(length, "0")
  }
  return element
}

const currencyOptions = {
  style: 'currency',
  currency: 'BRL',
  minimumFractionDigits: 2,
}

const currencyNumberFormat = Intl.NumberFormat('pt-BR', currencyOptions)

export { months, currencyNumberFormat, padStartWithZero }