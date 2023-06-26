import { useState, useEffect } from 'react'
import Filters from './Filters'
import Job from './Job'
import data from './data.json'
import './App.css'

export default function App() {
  const [role, setRole] = useState("")
  const [level, setLevel] = useState("")
  const [languages, setLanguages] = useState([])
  const [tools, setTools] = useState([])
  const [newData, setNewData] = useState(data)

  useEffect(() => {

    if(role === "" && level === "" && languages.length === 0 && tools.length === 0) return setNewData(data)

    let currentData = data

    if(role !== "") currentData = currentData.filter(job => job.role === role)
    if(level !== "") currentData = currentData.filter(job => job.level === level)
    if(languages.length > 0){
      currentData = currentData.filter(job => {
        let counter = 0
        languages.forEach(language => {
          if(job.languages.includes(language)) counter++
        })
        return counter === languages.length
      })
    }
    if(tools.length > 0){
      currentData = currentData.filter(job => {
        let counter = 0
        tools.forEach(tool => {
          if(job.tools.includes(tool)) counter++
        })
        return counter === tools.length
      })
    }

    setNewData(currentData)

  }, [role, level, languages, tools])

  const handleClear = () => {
    setRole("")
    setLevel("")
    setLanguages([])
    setTools([])
    setNewData(data)
  }

  const handleRole = () => setRole("")
  const handleLevel = () => setLevel("")
  const handleLanguage = (type) => setLanguages(languages.filter(language => language !== type))
  const handleTools = (type) => setTools(tools.filter(tool => tool !== type))

  return (
    <>
      <header>
        <section className={role !== "" || level !== "" || languages.length > 0 || tools.length > 0 ? "active" : ""}>
          <div className="filters">
            {role !== "" && <Filters name={role} handle={handleRole}/>}
            {level !== "" && <Filters name={level} handle={handleLevel}/>}
            {languages.length > 0 && languages.map((language, i) => <Filters key={i} name={language} handle={() => handleLanguage(language)}/>)}
            {tools.length > 0 && tools.map((tool, i) => <Filters key={i} name={tool} handle={() => handleTools(tool)}/>)}
          </div>
          <div className="clear">
            <p onClick={handleClear}> Clear </p>
          </div>
        </section>
      </header>
      <main>
        {
          newData.map((job) => {
            return (
              <Job 
                {...job} 
                key={job.id}
                roleFilter={role}
                setRole={setRole}
                levelFilter={level}
                setLevel={setLevel}
                languagesFilter={languages}
                setLanguages={setLanguages}
                toolsFilter={tools}
                setTools={setTools}
              />
            )
          })
        }
      </main>
    </>
  )
}