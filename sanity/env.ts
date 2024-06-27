export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-05-15'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'production'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'cimzou7g'
)
 export const token="skXkvcYhUdJaQg7qpNReJYmY4rONU4cfxlBJ3Pa87V4xfVXHS33S06BIOdgBtWwlPqLTYS7L7yCETxeZWo7tXMZQrUDgnKN0TtDsJvfzSNoAwa95AV3AT2s6q7rErgXwNH5dAsDq88w9twp5e3RJbrBYD9NobiqJRSpMiw94elIe6te3tLY0"
 

export const useCdn = true

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}



