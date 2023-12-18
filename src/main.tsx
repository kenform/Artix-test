import ReactDOM from 'react-dom/client'
import { store } from './redux/store'
import { Provider } from 'react-redux'

import './styles/index.scss';
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>
)
