import { Separator } from '@/components/ui/separator'
import React from 'react'

const DesignerSidebar = () => {
  return (
    <div className='bg-accent h-full w-1/3 p-2 sm:p-4 rounded-lg'>
        <h1>Design elements</h1>
        <Separator className='border border-muted-foreground my-4 col-span-1 lg:col-span-2' />
    </div>
  )
}

export default DesignerSidebar