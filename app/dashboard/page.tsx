import SideNav from "../ui/dashboard/sidenav"
import { Card } from "../ui/dashboard/cards"
import RevenueChart from "../ui/dashboard/revenue-chart"
import LatestInvoices from "../ui/dashboard/latest-invoices"
import { lusitana } from "../ui/fonts"
import { fetchRevenue, fetchLatestInvoices, fetchCardData } from "../lib/data"
import { LatestInvoice, Revenue } from "../lib/definitions"
import { CardDataProps } from "../ui/dashboard/cards"

export default async function Page() {

  const revenue = await fetchRevenue()
  const latestInvoices = await fetchLatestInvoices()
  const cardData = await fetchCardData()

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Collected" value={cardData.totalPaidInvoices} type="collected" />
        <Card title="Pending" value={cardData.totalPendingInvoices} type="pending" />
        <Card title="Total Invoices" value={cardData.numberOfInvoices} type="invoices" />
        <Card
          title="Total Customers"
          value={cardData.numberOfCustomers}
          type="customers"
        />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChart revenue={revenue} />
        <LatestInvoices latestInvoices={latestInvoices} />
      </div>
    </main>
  )
}