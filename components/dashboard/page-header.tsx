interface PageHeaderProps {
  title: string
  description: string
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl font-bold tracking-tight text-zinc-900">{title}</h1>
      <p className="text-zinc-500">{description}</p>
    </div>
  )
}
