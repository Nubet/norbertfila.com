export type ContentSection = {
  title: string
  body: string[]
  points?: string[]
  table?: {
    headers: string[]
    rows: string[][]
  }
}
