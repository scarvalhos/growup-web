import relativeTime from 'dayjs/plugin/relativeTime'
import duration from 'dayjs/plugin/duration'
import timezone from 'dayjs/plugin/timezone'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

import 'dayjs/locale/pt-br'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(duration)
dayjs.extend(relativeTime)
dayjs.locale('pt-br')

export const getUsername = (email: string) => {
  const parts = email?.split('@')

  const [username, _mail] = parts

  return username
}

// money

export const money = (s?: string | number) => {
  let num = 0

  if (typeof s === 'number') {
    num = s
  } else {
    num = Number(s)
  }

  return (num || 0).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}

// date

export const date = (
  value: string | number,
  type?: 'digit' | 'long' | 'long-short',
  withHour?: boolean
) => {
  if (value === '') {
    return '-'
  }

  switch (type) {
    case 'long':
      if (withHour) {
        return `${dayjs(value).format('DD, MMMM')} de ${dayjs(value).format(
          'YYYY'
        )} às ${dayjs(value).utcOffset(-3).format('HH:mm')}`
      }
      return `${dayjs(value).format('DD, MMMM')} de ${dayjs(value).format(
        'YYYY'
      )}`

    case 'long-short':
      if (withHour) {
        return `${dayjs(value).format('DD, MMM/YYYY')} às ${dayjs(value)
          .utcOffset(-3)
          .format('HH:mm')}`
      }
      return `${dayjs(value).format('DD, MMM/YYYY')}`

    case 'digit':
      if (withHour) {
        return `${dayjs(value).format('DD/MM/YYYY')} às ${dayjs(value)
          .utcOffset(-3)
          .format('HH:mm')}`
      }
      return dayjs(value).format('DD/MM/YYYY')

    default:
      if (withHour) {
        return `${dayjs(value).format('DD/MM/YYYY')} às ${dayjs(value)
          .utcOffset(-3)
          .format('HH:mm')}`
      }
      return dayjs(value).format('DD/MM/YYYY')
  }
}

// strtonum

export const strtonum = (s?: string | null): number => {
  if (!s) return 0
  return +s.replace(/[^\d,-]/g, '').replace(',', '.') || 0
}

// numtostr

export const numtostr = (
  n?: number | null,
  o?: Intl.NumberFormatOptions
): string | undefined => {
  if (n === null || n === undefined) return undefined
  return n?.toLocaleString('pt-BR', {
    maximumFractionDigits: 2,
    ...o,
  })
}

// generateMongoObjectId

export const generateMongoObjectId = function () {
  const timestamp = ((new Date().getTime() / 1000) | 0).toString(16)
  return (
    timestamp +
    'xxxxxxxxxxxxxxxx'
      .replace(/[x]/g, function () {
        return ((Math.random() * 16) | 0).toString(16)
      })
      .toLowerCase()
  )
}
