import Header from '@/components/ui/Header'

type Props = {
  children: React.ReactNode
}

function DashboardLayout({ children }: Props) {
  return (
    <>
      <main>
        <Header />
        {children}
      </main>
    </>
  )
}
export default DashboardLayout
