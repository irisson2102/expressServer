export const handleServiceError = (error) => {
  console.log(error)
  return {
    status: 500,
    message: 'Internal Server Error'
  }
} 