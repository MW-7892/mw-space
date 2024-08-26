export default function ListItem({
  title,
  description
}: {
  title: string
  description: string
}) {
  return (
    <div className="rounded-lg bg-teal-900 px-3 py-4">
      {title}: {description}
    </div>
  )
}
