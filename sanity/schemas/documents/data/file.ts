import { client } from '@/sanity/lib/client'
import { DocumentPdfIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

interface File {
  _type: 'file'
  asset: {
    _ref: string
    _type: 'reference'
  }
  url: string
  originalFilename: string
}

export interface FileDocument {
  _type: 'fileDocument'
  _id: string
  _rev: string
  _createdAt: string
  _updatedAt: string
  _originalId?: string | undefined
  name: string
  fileType:
    | 'pdf'
    | 'docx'
    | 'xlsx'
    | 'pptx'
    | 'image'
    | 'video'
    | 'audio'
    | 'other'
  file: File
}

export default defineType({
  name: 'fileDocument',
  title: 'File',
  type: 'document',
  icon: DocumentPdfIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'fileType',
      title: 'File Type',
      type: 'string',
      validation: (Rule) => Rule.required(),
      options: {
        layout: 'dropdown',
        list: [
          { title: 'PDF', value: 'pdf' },
          { title: 'Word Document', value: 'docx' },
          { title: 'Excel Document', value: 'xlsx' },
          { title: 'PowerPoint Document', value: 'pptx' },
          { title: 'Image', value: 'image' },
          { title: 'Video', value: 'video' },
          { title: 'Audio', value: 'audio' },
          { title: 'Other', value: 'other' }
        ]
      }
    }),
    defineField({
      name: 'file',
      title: 'File',
      type: 'file',
      validation: (Rule) => Rule.required(),

      options: {
        storeOriginalFilename: true
      }
    })
  ]
})

export const fetchFiles = async () => {
  const query = `*[_type == "fileDocument" && !(_id in path("drafts.**"))]{
    ...,
    file {
      ...,
    "url": asset -> url,
    "originalFilename": asset -> originalFilename
    }
  }`
  return await client.fetch<FileDocument[]>(query)
}
