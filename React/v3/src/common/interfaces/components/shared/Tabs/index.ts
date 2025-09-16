interface TabsProps {
  tabs: string[]
  activeTab: string
  labels: Record<string, string> // por ejemplo: { all: 'Todos', Empresa: 'Empresa' }
  onChange: (tab: string) => void
  theme?: 'light' | 'dark'
}

export type { TabsProps }