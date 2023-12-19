"use client"

import { Button } from "@/components/ui/button"
import Canvas from "./canvas"
import DesignerSidebar from "./designer-sidebar"

export default function Designer({page}: {page: string}) {
    return (
        <div className="flex flex-col p-4 w-full border-[0.5px] border-accent rounded-lg bg-[url(/bg-designer.svg)]
        dark:bg-[url(/bg-designer-dark.svg)]">
            <div className="flex flex-row items-center justify-between border mb-2 p-2 bg-accent space-x-2">
                <span className="px-6 py-2 bg-zinc-200 dark:bg-zinc-700/50 rounded-md">
                    Page: {page}
                </span>
                <div className="space-x-2">
                    <Button>Publicar</Button>
                    <Button>Ver</Button>
                    <Button>Salvar</Button>
                </div>
            </div>
            <div className="flex h-full w-full gap-8">
                <Canvas />
                <DesignerSidebar />
            </div>
        </div>
    )
}