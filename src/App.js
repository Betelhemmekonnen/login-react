import { BrowserRouter } from 'react-router-dom'
import MyForm from './components/useForm'

const App = () => {
  return (
    <BrowserRouter>
      <MyForm />
    </BrowserRouter>
  )
}

export default App