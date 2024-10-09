export type OverrideProps<Base, Extend> = Extend & Omit<Base, keyof Extend>
