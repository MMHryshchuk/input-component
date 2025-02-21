import './App.css'
import TextInput from './components/TextInput'

function App() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: 16}}>
      <TextInput label="Input" placeholder="Placeholder" required />
      <TextInput label="Input" placeholder="Placeholder" disabled />
      <TextInput label="Input" placeholder="Placeholder" error="Something went wrong" />
    </div>
  )
}

export default App
