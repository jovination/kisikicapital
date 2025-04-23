"use client"

import type React from "react"

import { useState } from "react"
import { X, Maximize2, Minimize2, Edit, Eye, Code, Copy, Check } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

interface PreviewModalProps {
  title: string
  description?: string
  component: React.ReactNode
  code?: string
  open: boolean
  onOpenChange: (open: boolean) => void
  onSave?: () => void
  editForm?: React.ReactNode
  className?: string
}

export function PreviewModal({
  title,
  description,
  component,
  code,
  open,
  onOpenChange,
  onSave,
  editForm,
  className,
}: PreviewModalProps) {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [activeTab, setActiveTab] = useState<"preview" | "edit" | "code">("preview")
  const [copied, setCopied] = useState(false)

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  const copyToClipboard = () => {
    if (code) {
      navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={cn(
          "flex flex-col gap-0 p-0 sm:max-w-[800px]",
          isFullscreen && "fixed inset-0 max-w-none rounded-none",
          className,
        )}
      >
        <DialogHeader className="flex flex-row items-center justify-between border-b p-4 dark:border-zinc-800">
          <div>
            <DialogTitle>{title}</DialogTitle>
            {description && <DialogDescription>{description}</DialogDescription>}
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={toggleFullscreen}>
              {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
            </Button>
            <Button variant="ghost" size="icon" onClick={() => onOpenChange(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <Tabs
          value={activeTab}
          onValueChange={(value) => setActiveTab(value as "preview" | "edit" | "code")}
          className="flex-1"
        >
          <div className="border-b dark:border-zinc-800">
            <TabsList className="h-12 w-full justify-start rounded-none bg-transparent px-4">
              <TabsTrigger
                value="preview"
                className="data-[state=active]:bg-background data-[state=active]:shadow-none"
              >
                <Eye className="mr-2 h-4 w-4" />
                Preview
              </TabsTrigger>
              {editForm && (
                <TabsTrigger value="edit" className="data-[state=active]:bg-background data-[state=active]:shadow-none">
                  <Edit className="mr-2 h-4 w-4" />
                  Edit
                </TabsTrigger>
              )}
              {code && (
                <TabsTrigger value="code" className="data-[state=active]:bg-background data-[state=active]:shadow-none">
                  <Code className="mr-2 h-4 w-4" />
                  Code
                </TabsTrigger>
              )}
            </TabsList>
          </div>

          <TabsContent value="preview" className="flex-1 p-0 data-[state=active]:flex">
            <div className="flex flex-1 items-center justify-center overflow-auto p-6">
              <div className="w-full">{component}</div>
            </div>
          </TabsContent>

          {editForm && (
            <TabsContent value="edit" className="flex-1 p-0 data-[state=active]:flex">
              <div className="flex flex-1 flex-col overflow-auto p-6">
                {editForm}
                {onSave && (
                  <div className="mt-6 flex justify-end">
                    <Button onClick={onSave} className="bg-[#EB9D2E] text-black hover:bg-[#EB9D2E]/90 dark:text-black">
                      Save Changes
                    </Button>
                  </div>
                )}
              </div>
            </TabsContent>
          )}

          {code && (
            <TabsContent value="code" className="flex-1 p-0 data-[state=active]:flex">
              <div className="relative flex flex-1 flex-col overflow-auto">
                <div className="absolute right-4 top-4 z-10">
                  <Button variant="outline" size="sm" onClick={copyToClipboard}>
                    {copied ? (
                      <>
                        <Check className="mr-2 h-4 w-4" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="mr-2 h-4 w-4" />
                        Copy
                      </>
                    )}
                  </Button>
                </div>
                <pre className="flex-1 overflow-auto rounded-md bg-zinc-950 p-6 text-sm text-zinc-50">
                  <code>{code}</code>
                </pre>
              </div>
            </TabsContent>
          )}
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
