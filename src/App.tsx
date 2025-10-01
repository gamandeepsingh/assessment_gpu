
const App = () => {
  return (
    <div className="min-h-screen bg-primary text-white">
      <header className="bg-primary p-4">
        <h1 className="text-2xl font-bold">Hello World</h1>
      </header>
      <main className="p-8">
        <div className="bg-secondary p-6 rounded-lg">
          <p>This demonstrates the custom colors:</p>
          <ul className="mt-4 space-y-2">
            <li>Background: bg-background (dark)</li>
            <li>Primary: bg-primary (blue)</li>
            <li>Secondary: bg-secondary (slate)</li>
          </ul>
        </div>
      </main>
    </div>
  )
}

export default App
