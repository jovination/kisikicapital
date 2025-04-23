import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const upcomingPayouts = [
  {
    id: "PO-3421",
    amount: 1250,
    status: "Pending",
    date: "Apr 15, 2023",
  },
  {
    id: "PO-3420",
    amount: 980,
    status: "Processing",
    date: "Apr 8, 2023",
  },
]

export function UpcomingPayouts() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Payouts</CardTitle>
        <CardDescription>Your scheduled payments</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {upcomingPayouts.map((payout) => (
            <div key={payout.id} className="flex items-center justify-between rounded-lg border p-3">
              <div className="flex flex-col gap-1">
                <span className="font-medium text-zinc-900">${payout.amount.toFixed(2)}</span>
                <div className="text-xs text-zinc-500">{payout.date}</div>
              </div>
              <Badge
                className={payout.status === "Pending" ? "bg-amber-100 text-amber-700" : "bg-blue-100 text-blue-700"}
              >
                {payout.status}
              </Badge>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Link href="/dashboard/payouts/request" className="w-full">
            <Button className="w-full bg-[#EB9D2E] text-black hover:bg-[#EB9D2E]/90">Request Payout</Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
