import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function AccountInformation() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Account Information</CardTitle>
        <CardDescription>Details about your trading account</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-1">
            <p className="text-sm font-medium text-zinc-500">Account Type</p>
            <p className="font-medium text-zinc-900">One Phase</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium text-zinc-500">Account Size</p>
            <p className="font-medium text-zinc-900">$25,000</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium text-zinc-500">Profit Split</p>
            <p className="font-medium text-zinc-900">80/20</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium text-zinc-500">Account Status</p>
            <div className="flex items-center gap-2">
              <Badge className="bg-emerald-100 text-emerald-700">Active</Badge>
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium text-zinc-500">Trading Platform</p>
            <p className="font-medium text-zinc-900">MetaTrader 5</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium text-zinc-500">Login ID</p>
            <p className="font-medium text-zinc-900">MT5-87654321</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium text-zinc-500">Server</p>
            <p className="font-medium text-zinc-900">Kisiki-Live</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium text-zinc-500">Leverage</p>
            <p className="font-medium text-zinc-900">1:100</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t px-6 py-4">
        <Link href="/dashboard/downloads/mt5">
          <Button variant="outline">Download MT5</Button>
        </Link>
        <Link href="/dashboard/trading/rules">
          <Button variant="outline">View Trading Rules</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
