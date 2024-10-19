import Router from 'preact-router'
import RetrievePasswords from './components/RetrievePasswords'
import UploadPasswords from './components/UploadPasswords'
import Navbar from './components/Navbar'

export function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <RetrievePasswords path="/get-passwords" />
        <UploadPasswords path="/" />
      </Router>
    </div>
  )
}
