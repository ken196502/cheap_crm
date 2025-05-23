"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts"

interface CustomerContactRecordProps {
  customerId: number
}

const contactData = [
  { name: "投资服务", value: 5, percentage: 42, color: "#4f46e5" },
  { name: "销售沟通", value: 3, percentage: 25, color: "#f97316" },
  { name: "线上会议", value: 2, percentage: 16, color: "#10b981" },
  { name: "客服反馈", value: 1, percentage: 8, color: "#ef4444" },
  { name: "招待客户", value: 1, percentage: 8, color: "#f59e0b" },
]

const transactionData = [
  {
    id: 1,
    date: "2025-03-26",
    amount: -34000.0,
    type: "出差费用",
    purpose: "出差实访客户",
    department: "销售三部",
    person: "张三",
  },
  {
    id: 2,
    date: "2025-03-22",
    amount: 0.0,
    type: "电话沟通",
    purpose: "运营和销售沟通",
    department: "销售部",
    person: "李四",
  },
  {
    id: 3,
    date: "2025-03-21",
    amount: 0.0,
    type: "服务反馈",
    purpose: "运营和销售服务反馈",
    department: "销售部",
    person: "李四",
  },
  {
    id: 4,
    date: "2025-03-20",
    amount: -1234.56,
    type: "招待客户",
    purpose: "招待客户",
    department: "销售三部",
    person: "张三，王五",
  },
  {
    id: 5,
    date: "2025-03-19",
    amount: 0.0,
    type: "线上会议",
    purpose: "线上1on1",
    department: "CRM",
    person: "赵六",
  },
]

export function CustomerContactRecord({ customerId }: CustomerContactRecordProps) {
  const [dateRange, setDateRange] = useState({ start: "2025-03-01", end: "2025-03-31" })

  return (
    <Card>
      <CardContent className="pt-6">
        <Tabs defaultValue="basic">
          <TabsList>
            <TabsTrigger value="basic">基本信息</TabsTrigger>
            <TabsTrigger value="contact">联系记录</TabsTrigger>
          </TabsList>

          <TabsContent value="basic" className="pt-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <div className="text-sm text-gray-500">日期：</div>
                <input
                  type="date"
                  value={dateRange.start}
                  onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
                  className="border rounded px-2 py-1 text-sm"
                />
                <div className="text-sm">至</div>
                <input
                  type="date"
                  value={dateRange.end}
                  onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
                  className="border rounded px-2 py-1 text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="h-64">
                <div className="text-center font-medium mb-2">服务记录类型明细</div>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={contactData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={2}
                      dataKey="value"
                      label={({ name, percentage }) => `${name}: ${percentage}%`}
                      labelLine={false}
                    >
                      {contactData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
                <div className="text-center text-sm">
                  总数量：<span className="font-bold text-lg">12</span>
                </div>
              </div>

              <div className="space-y-2">
                {contactData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                      <div className="text-sm">{item.name}</div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-sm">{item.percentage}%</div>
                      <div className="text-sm">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="contact" className="pt-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>日期</TableHead>
                  <TableHead>金额 (折合HKD)</TableHead>
                  <TableHead>联系类型</TableHead>
                  <TableHead>联系描述</TableHead>
                  <TableHead>联系部门</TableHead>
                  <TableHead>服务人</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactionData.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell>{transaction.date}</TableCell>
                    <TableCell className={transaction.amount < 0 ? "text-red-500" : ""}>
                      {transaction.amount.toLocaleString()}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={
                          transaction.type === "出差费用"
                            ? "bg-blue-100 text-blue-800"
                            : transaction.type === "电话沟通"
                              ? "bg-green-100 text-green-800"
                              : transaction.type === "服务反馈"
                                ? "bg-purple-100 text-purple-800"
                                : transaction.type === "招待客户"
                                  ? "bg-orange-100 text-orange-800"
                                  : "bg-cyan-100 text-cyan-800"
                        }
                      >
                        {transaction.type}
                      </Badge>
                    </TableCell>
                    <TableCell>{transaction.purpose}</TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={
                          transaction.department === "销售三部"
                            ? "bg-blue-100 text-blue-800"
                            : transaction.department === "销售部"
                              ? "bg-green-100 text-green-800"
                              : "bg-cyan-100 text-cyan-800"
                        }
                      >
                        {transaction.department}
                      </Badge>
                    </TableCell>
                    <TableCell>{transaction.person}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
