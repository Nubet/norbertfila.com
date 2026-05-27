interface ImportMetaEnv {
  readonly BASE_URL: string
  readonly VITE_CONTACT_FORM_ENDPOINT?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
