// components/Markdown.js
import React from 'react'
import { remark } from 'remark'
import html from 'remark-html'
import remarkGfm from 'remark-gfm'

export default async function Markdown({ content }) {
  const processedContent = await remark()
    .use(remarkGfm) // ←追加
    .use(html)
    .process(content)
  const contentHtml = processedContent.toString()

  return <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
}
