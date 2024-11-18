import { useEffect, useState } from 'react'

export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [value, setValue] = useState((): T => {
    const item = localStorage.getItem(key)

    if (!item || item == 'undefined') return initialValue

    return JSON.parse(item)
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue] as const
}
