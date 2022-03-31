interface ImportMetaEnv {
  // define custom env variables
  readonly VITE_XXX: string
  readonly HOGE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
