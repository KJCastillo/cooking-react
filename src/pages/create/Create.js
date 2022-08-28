import './Create.css'
import { useState } from 'react'

export default function Create() {
  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [cookingtime, setCookingtime] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(title, method, cookingtime)
  }
 
  return (
    <div className='create'>
      <h2 className='page-title'>Add a new recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe Title</span>
          <input 
          type="text" 
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
          />
        </label>

        <label>
          <span>Recipe Method</span>
          <textarea 
          onChange={(e) => setMethod(e.target.value)}
          value={method}
          required
          />
        </label>
        <label>
          <span>Cooking time:</span>
          <input 
          type="number" 
          onChange={(e) => setCookingtime(e.target.value)}
          value={cookingtime}
          required
          />
        </label>
        <button className="btn">submit</button>
      </form>
    </div>
  )
}
