import Link from "next/link"
import { Download } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const recentTrades = [
  {
    id: "TR-7829",
    pair: "EUR/USD",
    type: "BUY",
    openPrice: 1.0921,
    closePrice: 1.0956,
    profit: 350,
    date: "Today, 10:45 AM",
  },
  {
    id: "TR-7828",
    pair: "GBP/JPY",
    type: "SELL",
    openPrice: 186.721,
    closePrice: 186.325,
    profit: 420,
    date: "Today, 9:32 AM",
  },
  {
    id: "TR-7827",
    pair: "USD/CAD",
    type: "BUY",
    openPrice: 1.3645,
    closePrice: 1.3612,
    profit: -210,
    date: "Yesterday, 3:15 PM",
  },
  {
    id: "TR-7826",
    pair: "AUD/USD",
    type: "SELL",
    openPrice: 0.6598,
    closePrice: 0.6573,
    profit: 180,
    date: "Yesterday, 1:45 PM",
  },
  {
    id: "TR-7825",
    pair: "XAU/USD",
    type: "BUY",
    openPrice: 2324.85,
    closePrice: 2342.3,
    profit: 520,
    date: "Apr 7, 11:20 AM",
  },
]

export function RecentTrades() {
  return (
    <Card className="md:col-span-2">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Recent Trades</CardTitle>
          <CardDescription>Your latest trading activity</CardDescription>
        </div>
        <Button variant="outline" size="sm" className="h-8">
          <Download className="mr-2 h-4 w-4" />
          Export
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentTrades.map((trade) => (
            <div key={trade.id} className="flex items-center justify-between rounded-lg border p-3">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-zinc-900">{trade.pair}</span>
                  <Badge
                    className={trade.type === "BUY" ? "bg-emerald-100 text-emerald-700" : "bg-rose-100 text-rose-700"}
                  >
                    {trade.type}
                  </Badge>
                </div>
                <div className="text-xs text-zinc-500">{trade.date}</div>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className={`font-medium ${trade.profit > 0 ? "text-emerald-600" : "text-rose-600"}`}>
                  {trade.profit > 0 ? "+" : ""}${Math.abs(trade.profit).toFixed(2)}
                </span>
                <div className="text-xs text-zinc-500">
                  {trade.openPrice} → {trade.closePrice}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <Link href="/dashboard/trading/history" className="text-[#EB9D2E] hover:underline">
            View all trades
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
