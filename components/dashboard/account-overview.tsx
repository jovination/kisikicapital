import { DollarSign, PieChart, TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export function AccountOverview() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Account Balance</CardTitle>
          <DollarSign className="h-4 w-4 text-zinc-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-zinc-900">$16,543.00</div>
          <p className="text-xs text-zinc-500">
            <span className="text-emerald-500">↑ 12.5%</span> from last month
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Profit Target</CardTitle>
          <TrendingUp className="h-4 w-4 text-zinc-500" />
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold text-zinc-900">$1,250.00</div>
            <Badge className="bg-[#EB9D2E] text-black">80%</Badge>
          </div>
          <div className="mt-2">
            <Progress value={80} className="h-2 bg-zinc-100" indicatorClassName="bg-[#EB9D2E]" />
          </div>
          <p className="mt-1 text-xs text-zinc-500">$1,250 of $1,500 target</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Daily Drawdown</CardTitle>
          <PieChart className="h-4 w-4 text-zinc-500" />
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold text-zinc-900">1.2%</div>
            <Badge variant="outline" className="border-emerald-200 text-emerald-600">
              Safe
            </Badge>
          </div>
          <div className="mt-2">
            <Progress value={24} className="h-2 bg-zinc-100" indicatorClassName="bg-emerald-500" />
          </div>
          <p className="mt-1 text-xs text-zinc-500">Max allowed: 5%</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Max Drawdown</CardTitle>
          <PieChart className="h-4 w-4 text-zinc-500" />
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold text-zinc-900">3.5%</div>
            <Badge variant="outline" className="border-emerald-200 text-emerald-600">
              Safe
            </Badge>
          </div>
          <div className="mt-2">
            <Progress value={58} className="h-2 bg-zinc-100" indicatorClassName="bg-emerald-500" />
          </div>
          <p className="mt-1 text-xs text-zinc-500">Max allowed: 6%</p>
        </CardContent>
      </Card>
    </div>
  )
}
