"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { CustomerDetail } from "@/components/customer-detail"
import { CustomerContactRecord } from "@/components/customer-contact-record"

const customers = [
  {
    id: 1,
    name: "小米集团",
    nameEn: "Xiaomi",
    type: "公司户",
    company: "小米科技有限责任公司",
    products: ["新客签约", "续约签约"],
    tags: ["专属秘书"],
    entryDate: "2019-10-01",
  },
  {
    id: 2,
    name: "小米科技",
    nameEn: "Xiaomi Tech",
    type: "公司户",
    company: "小米科技有限责任公司",
    products: ["销售", "IPO", "私募"],
    tags: ["机构投资", "CRM", "ERM"],
    entryDate: "2017-10-01",
  },
  {
    id: 3,
    name: "腾讯集团",
    nameEn: "Tencent",
    type: "公司户",
    company: "腾讯科技有限公司",
    products: [],
    tags: [],
    entryDate: "",
  },
  {
    id: 4,
    name: "高盛",
    nameEn: "Goldman Sachs",
    type: "公司户",
    company: "高盛集团",
    products: [],
    tags: [],
    entryDate: "",
  },
]

export function CustomerTable() {
  const [selectedCustomer, setSelectedCustomer] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState<"basic" | "contact">("basic")

  if (selectedCustomer !== null) {
    const customer = customers.find((c) => c.id === selectedCustomer)

    if (customer) {
      return (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-500">客户详情 / {activeTab === "basic" ? "基本信息" : "联系记录"}</div>
            <Button variant="outline" onClick={() => setSelectedCustomer(null)}>
              返回列表
            </Button>
          </div>

          <div className="flex space-x-4">
            <Button
              variant={activeTab === "basic" ? "default" : "outline"}
              onClick={() => setActiveTab("basic")}
              className={activeTab === "basic" ? "bg-blue-500 hover:bg-blue-600" : ""}
            >
              基本信息
            </Button>
            <Button
              variant={activeTab === "contact" ? "default" : "outline"}
              onClick={() => setActiveTab("contact")}
              className={activeTab === "contact" ? "bg-blue-500 hover:bg-blue-600" : ""}
            >
              联系记录
            </Button>
          </div>

          {activeTab === "basic" ? (
            <CustomerDetail customer={customer} />
          ) : (
            <CustomerContactRecord customerId={customer.id} />
          )}
        </div>
      )
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="text-sm">
          总共 <span className="font-bold">{customers.length}</span> 个客户
        </div>
        <div className="flex items-center space-x-1">
          <Button variant="outline" size="sm">
            1
          </Button>
          <Button variant="default" size="sm" className="bg-blue-500">
            2
          </Button>
          <Button variant="outline" size="sm">
            3
          </Button>
          <Button variant="outline" size="sm">
            4
          </Button>
          <Button variant="outline" size="sm">
            5
          </Button>
          <span className="text-sm">10条/页</span>
        </div>
      </div>

      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-10">
                <Checkbox />
              </TableHead>
              <TableHead>客户名称</TableHead>
              <TableHead>客户类型</TableHead>
              <TableHead>法人公司</TableHead>
              <TableHead>提供产品</TableHead>
              <TableHead>联系部门</TableHead>
              <TableHead>录入时间</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customers.map((customer) => (
              <TableRow
                key={customer.id}
                className="cursor-pointer hover:bg-gray-50"
                onClick={() => setSelectedCustomer(customer.id)}
              >
                <TableCell>
                  <Checkbox onClick={(e) => e.stopPropagation()} />
                </TableCell>
                <TableCell>
                  <div className="font-medium">{customer.name}</div>
                  <div className="text-sm text-gray-500">{customer.nameEn}</div>
                </TableCell>
                <TableCell>{customer.type}</TableCell>
                <TableCell>{customer.company}</TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-1">
                    {customer.products.map((product, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className={
                          product === "新客签约"
                            ? "bg-blue-100 text-blue-800 hover:bg-blue-100"
                            : product === "续约签约"
                              ? "bg-pink-100 text-pink-800 hover:bg-pink-100"
                              : product === "销售"
                                ? "bg-green-100 text-green-800 hover:bg-green-100"
                                : product === "IPO"
                                  ? "bg-cyan-100 text-cyan-800 hover:bg-cyan-100"
                                  : "bg-purple-100 text-purple-800 hover:bg-purple-100"
                        }
                      >
                        {product}
                      </Badge>
                    ))}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-1">
                    {customer.tags.map((tag, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className={
                          tag === "专属秘书"
                            ? "bg-red-100 text-red-800 hover:bg-red-100"
                            : tag === "机构投资"
                              ? "bg-green-100 text-green-800 hover:bg-green-100"
                              : tag === "CRM"
                                ? "bg-cyan-100 text-cyan-800 hover:bg-cyan-100"
                                : "bg-indigo-100 text-indigo-800 hover:bg-indigo-100"
                        }
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </TableCell>
                <TableCell>{customer.entryDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
