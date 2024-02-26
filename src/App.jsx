import { useState, useEffect } from 'react'
import Filter from './Components/Filter/Filter'
import PersonForm from './Components/PersonForm/PersonForm'
import Person from './Components/Person/Person'
import { v4 as uuidv4 } from 'uuid'
import contactService from '../src/Services/contact.js'
import {
  Notification,
  ErrorMessage,
} from './Components/Notification/Notification.jsx'
import './index.css'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumbers, setNewNumbers] = useState('')
  const [filterWords, setFilterWords] = useState('')
  const [message, setMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    console.log('effect')
    const fetchData = async () => {
      try {
        const response = await contactService.getAll()
        console.log(response)
        setPersons(response.data)
      } catch (error) {
        console.error('Error fetching data', error)
      }
    }
    fetchData()
  }, [])

  console.log('render', persons.length, 'persons')

  const addContact = (e) => {
    e.preventDefault()

    //console.log("addContact", e.target.value);

    const contactObject = {
      name: newName,
      number: newNumbers,
      id: uuidv4,
    }

    console.log('Name', contactObject.name)

    const updateNumber = () => {
      persons.some((item) => {
        if (
          item.name.toLocaleLowerCase() ===
          contactObject.name.toLocaleLowerCase()
        ) {
          const id = item.id
          console.log('id from put request', id)
          const numberUpdate = async () => {
            try {
              const response = await contactService.update(id, contactObject)
              console.log(response.data)
              const updatedNumber = response.data.number
              //console.log(updatedNumber);
              const updateState = persons.map((person) =>
                person.name === response.data.name
                  ? { ...person, number: updatedNumber }
                  : person
              )
              console.log(updateState)
              setPersons(updateState)
              setNewNumbers(updatedNumber)
              setTimeout(() => {
                setNewNumbers(null)
              }, 5000)
              console.log('Number from put request', newNumbers)
            } catch (error) {
              console.log('Error updating number', error)
            }
          }
          numberUpdate()
        }
      })
    }

    //console.log("Add new contact", persons);
    //Refactor the code
    const sendData = async () => {
      try {
        const response = await contactService.create(contactObject)
        setPersons([...persons, response.data])
        console.log('Contact added successfully')
        setMessage(`Added ${response.data.name}`)
        setTimeout(() => {
          setMessage('')
        }, 5000)
      } catch (error) {
        const dispalyWarning = error.response.data.error
        setErrorMessage(dispalyWarning)
        setTimeout(() => {
          setErrorMessage('')
        }, 5000)
      }
    }

    const warning = `${contactObject.name} already added to phone book, replace the old number with a new one ?`

    if (
      persons.some(
        (ele) =>
          ele.name.toLowerCase() === contactObject.name.toLocaleLowerCase()
      )
    ) {
      if (window.confirm(warning)) {
        //console.log("Update number");
        updateNumber()
      }
    } else {
      sendData()
    }
  }

  const handleChange = (e) => {
    const contactName = e.target.value
    console.log('handleChange', contactName)
    console.log('newName', contactName)
    setNewName(contactName)
    //setMessage(`Added ${contactName}`);
  }

  console.log(message)

  const handleNumbers = (e) => {
    console.log('newNumbers', e.target.value)
    setNewNumbers(e.target.value)
  }

  const handleFilter = (e) => {
    setFilterWords(e.target.value.toLowerCase())
  }

  const searchKey = persons.filter((ele) =>
    ele.name.toLowerCase().includes(filterWords)
  )

  const deleteContact = async (e) => {
    //console.log(persons);
    const indexOfBtn = e.target.id
    //console.log(indexOfBtn);

    const confirm = `Delete ${persons[indexOfBtn].name} ?`
    //console.log(confirm);
    if (window.confirm(confirm)) {
      try {
        const targetID = persons.map((ele) => ele.id)
        const id = targetID[indexOfBtn]
        //console.log(id);
        await contactService.deleteContact(id)
        setPersons(persons.filter((item) => item.id !== id))
      } catch (error) {
        setErrorMessage(
          `Information of ${persons[indexOfBtn].name} has already been removed`
        )
        setTimeout(() => {
          setErrorMessage('')
        }, 5000)
        console.error('Error deleting contact', error)
      }
    } else {
      null
    }
  }

  return (
    <div className='absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]'>
      <h2 className='flex justify-center py-5  text-4xl font-italic tracking-tight text-green-900 sm:text-6xl'>
        Phonebook
      </h2>
      {message === '' ? null : <Notification message={message} />}
      {errorMessage === '' ? null : (
        <ErrorMessage errorMessage={errorMessage} />
      )}

      <div>
        <Filter handleFilter={handleFilter} />
      </div>
      {/* <h3>Added a new contact</h3> */}
      <PersonForm
        addContact={addContact}
        newName={newName}
        handleChange={handleChange}
        newNumbers={newNumbers}
        handleNumbers={handleNumbers}
      />
      {/* <h2>Numbers</h2> */}
      <Person searchKey={searchKey} deleteContact={deleteContact} />
    </div>
  )
}

export default App
