"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function CustomerFilters() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="客户名称：请选择" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="xiaomi">小米集团</SelectItem>
            <SelectItem value="tencent">腾讯集团</SelectItem>
            <SelectItem value="goldman">高盛</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="客户类型：请选择" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="public">公司户</SelectItem>
            <SelectItem value="private">个人户</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="提供产品：请选择" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="saas">SaaS服务</SelectItem>
            <SelectItem value="ipo">IPO</SelectItem>
            <SelectItem value="crm">CRM</SelectItem>
            <SelectItem value="erp">ERP</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="业务部门：请选择" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="sales">销售部</SelectItem>
            <SelectItem value="marketing">市场部</SelectItem>
            <SelectItem value="support">客户支持</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
