import { CustomerTable } from "@/components/customer-table"
import { CustomerFilters } from "@/components/customer-filters"
import { Button } from "@/components/ui/button"
import { PlusCircle, Search, ImportIcon as FileImport } from "lucide-react"

export default function Home() {
  return (
    <div className="container mx-auto py-6 space-y-6">
      <h1 className="text-2xl font-bold">客户关系管理系统</h1>

      <div className="flex flex-col space-y-4">
        <CustomerFilters />

        <div className="flex space-x-2">
          <Button variant="default" size="sm" className="bg-blue-500 hover:bg-blue-600">
            <Search className="h-4 w-4 mr-2" />
            查询
          </Button>
          <Button variant="default" size="sm" className="bg-orange-500 hover:bg-orange-600">
            <FileImport className="h-4 w-4 mr-2" />
            导出
          </Button>
          <Button variant="default" size="sm" className="bg-green-500 hover:bg-green-600">
            <PlusCircle className="h-4 w-4 mr-2" />
            新建
          </Button>
          <Button variant="default" size="sm" className="bg-blue-400 hover:bg-blue-500">
            批量导入
          </Button>
        </div>

        <CustomerTable />
      </div>
    </div>
  )
}
