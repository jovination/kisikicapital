"use client"

import type React from "react"

import { useState } from "react"
import { Eye } from "lucide-react"
import { Button, type ButtonProps } from "@/components/ui/button"
import { PreviewModal } from "@/components/ui/preview-modal"

interface PreviewButtonProps extends ButtonProps {
  title: string
  description?: string
  component: React.ReactNode
  code?: string
  editForm?: React.ReactNode
  onSave?: () => void
}

export function PreviewButton({ title, description, component, code, editForm, onSave, ...props }: PreviewButtonProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button variant="outline" size="sm" onClick={() => setOpen(true)} {...props}>
        <Eye className="mr-2 h-4 w-4" />
        Preview
      </Button>

      <PreviewModal
        title={title}
        description={description}
        component={component}
        code={code}
        editForm={editForm}
        open={open}
        onOpenChange={setOpen}
        onSave={onSave}
      />
    </>
  )
}
