/// <reference types="vite/client" />

interface ImageModule {
  default: string
}

declare module '*.png' {
  const value: ImageModule
  export default value
}

declare module '*.jpg' {
  const value: ImageModule
  export default value
}

declare module '*.jpeg' {
  const value: ImageModule
  export default value
}

declare module '*.gif' {
  const value: ImageModule
  export default value
}

declare module '*.svg' {
  const value: ImageModule
  export default value
}
