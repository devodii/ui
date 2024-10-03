import { ComponentProps, ReactNode } from 'react'

interface ListProps<T> extends ComponentProps<'ul'> {
  data: T[]
  renderItem: (item: NoInfer<T>) => ReactNode
}

export const List = <T,>({ data, renderItem, ...rest }: ListProps<T>) => {
  return <ul {...rest}>{data.map(it => renderItem(it))}</ul>
}

/**
 * UseCase
 *
 * <List
 * data={['Add more components', 'Turn into a library', 'Ship']}
 * renderItem={(el) => <li key={el}>{el}</li>}
 * />
 */
