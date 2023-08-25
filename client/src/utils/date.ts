import { format } from 'date-fns'
import { fr } from 'date-fns/locale'

export function shiftDate({ initialDate = new Date(), days }: { initialDate?: Date; days: number }) {
  const date = new Date(initialDate)
  const shiftDate = new Date(date.setDate(date.getDate() + days))

  return shiftDate
}

export function dateToWrittenDate(date: Date, isFrench = true) {
  const weekday = isFrench
    ? ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi']
    : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

  const monthName = isFrench
    ? [
        'janvier',
        'février',
        'mars',
        'avril',
        'mai',
        'juin',
        'juillet',
        'août',
        'septembre',
        'octobre',
        'novembre',
        'décembre',
      ]
    : [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ]

  const day = weekday[date.getDay()]
  const dayOfMonth = date.getDate()
  const month = monthName[date.getMonth()]
  const year = date.getFullYear()
  const writtenDate = isFrench ? `${day} ${dayOfMonth} ${month} ${year}` : `${day}, ${month} ${dayOfMonth}, ${year}`
  return writtenDate
}


export function getDateFromTimeStamps(timestamp: string) {
  if (!timestamp) return null
  return format(new Date(timestamp), 'dd/MM/yyyy HH:mm', { locale: fr })
}