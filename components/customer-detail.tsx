"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Edit } from "lucide-react"

interface CustomerDetailProps {
  customer: {
    id: number
    name: string
    nameEn: string
    type: string
    company: string
    products: string[]
    tags: string[]
    entryDate: string
  }
}

export function CustomerDetail({ customer }: CustomerDetailProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-xl">{customer.name}</CardTitle>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Edit className="h-4 w-4 mr-2" />
            编辑
          </Button>
          <Button variant="default" size="sm" className="bg-blue-500 hover:bg-blue-600">
            互动记录
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4 items-center">
              <div className="text-sm text-gray-500">所属集团：</div>
              <div className="col-span-2">{customer.name}</div>
            </div>

            <div className="grid grid-cols-3 gap-4 items-center">
              <div className="text-sm text-gray-500">中文名称：</div>
              <div className="col-span-2">{customer.name}</div>
            </div>

            <div className="grid grid-cols-3 gap-4 items-center">
              <div className="text-sm text-gray-500">英文名称：</div>
              <div className="col-span-2">{customer.nameEn}</div>
            </div>

            <div className="grid grid-cols-3 gap-4 items-center">
              <div className="text-sm text-gray-500">风险等级：</div>
              <div className="col-span-2">低</div>
            </div>

            <div className="grid grid-cols-3 gap-4 items-center">
              <div className="text-sm text-gray-500">法人代表：</div>
              <div className="col-span-2">雷军</div>
            </div>

            <div className="grid grid-cols-3 gap-4 items-center">
              <div className="text-sm text-gray-500">注册资本：</div>
              <div className="col-span-2">185,000万人民币</div>
            </div>

            <div className="grid grid-cols-3 gap-4 items-center">
              <div className="text-sm text-gray-500">股票代码：</div>
              <div className="col-span-2">01810.HK</div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4 items-center">
              <div className="text-sm text-gray-500">中文全称：</div>
              <div className="col-span-2">{customer.company}</div>
            </div>

            <div className="grid grid-cols-3 gap-4 items-center">
              <div className="text-sm text-gray-500">客户类型：</div>
              <div className="col-span-2">{customer.type}</div>
            </div>

            <div className="grid grid-cols-3 gap-4 items-center">
              <div className="text-sm text-gray-500">活跃状态：</div>
              <div className="col-span-2">活跃</div>
            </div>

            <div className="grid grid-cols-3 gap-4 items-center">
              <div className="text-sm text-gray-500">城市地区：</div>
              <div className="col-span-2">北京</div>
            </div>

            <div className="grid grid-cols-3 gap-4 items-center">
              <div className="text-sm text-gray-500">成立日期：</div>
              <div className="col-span-2">2010-03-03</div>
            </div>

            <div className="grid grid-cols-3 gap-4 items-center">
              <div className="text-sm text-gray-500">股东：</div>
              <div className="col-span-2">Smart Mobile Holdings Limited，刘德，林斌等</div>
            </div>

            <div className="grid grid-cols-3 gap-4 items-start">
              <div className="text-sm text-gray-500">注册地址：</div>
              <div className="col-span-2">北京市海淀区西二旗中路33号院6号楼6层006号</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
