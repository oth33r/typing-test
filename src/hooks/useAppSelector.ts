import { RootState } from '@/store/store'
import { useSelector } from 'react-redux'
// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppSelector = useSelector.withTypes<RootState>()

