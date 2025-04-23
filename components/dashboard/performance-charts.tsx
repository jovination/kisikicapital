import { BarChart2, LineChart } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function PerformanceCharts() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {/* Performance Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Daily Performance</CardTitle>
          <CardDescription>Your profit and loss for the past week</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] w-full">
            <div className="flex h-full w-full items-center justify-center">
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <BarChart2 className="h-12 w-12 text-zinc-300" />
                </div>
                <p className="text-sm text-zinc-500">Performance chart visualization</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Balance History Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Balance History</CardTitle>
          <CardDescription>Your account balance over time</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] w-full">
            <div className="flex h-full w-full items-center justify-center">
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <LineChart className="h-12 w-12 text-zinc-300" />
                </div>
                <p className="text-sm text-zinc-500">Balance history visualization</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
