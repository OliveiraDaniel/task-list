import { useEffect } from 'react'
import { SnackbarContainer } from '../styles/Snackbar'
import { useDispatch } from 'react-redux'
import { closeSnackbar } from '../features/snackbarSlice'

const Snackbar = ({
  message,
  isOpen,
}: {
  message: string
  isOpen: boolean
}) => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        dispatch(closeSnackbar())
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [isOpen, dispatch])

  return <SnackbarContainer isOpen={isOpen}>{message}</SnackbarContainer>
}

export default Snackbar
