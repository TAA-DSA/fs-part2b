import { useState, useEffect } from 'react'
import Filter from './Components/Filter/Filter'
import PersonForm from './Components/PersonForm/PersonForm'
import Person from './Components/Person/Person'
import { v4 as uuidv4 } from 'uuid'
import contactService from '../src/Services/contact.js'
import Login from './Components/Login/Login.jsx'
import loginService from './Services/login.js'

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
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  // useEffect(() => {
  //   console.log('effect')
  //   const fetchData = async () => {
  //     try {
  //       const response = await contactService.getAll()
  //       console.log(response)
  //       setPersons(response.data)
  //     } catch (error) {
  //       console.error('Error fetching data', error)
  //     }
  //   }
  //   fetchData()
  // }, [])

  //console.log('render...', persons.length, 'persons')

  const addContact = (e) => {
    e.preventDefault()

    //console.log("addContact", e.target.value);
    const contactObject = {
      name: newName,
      number: newNumbers,
      id: uuidv4,
    }

    console.log('Name', contactObject.name)

    const messageConfirmUpdate = (id) => {
      const warning = `${contactObject.name} already added to phone book, replace the old number with a new one ?`
      return window.confirm(warning) ? updateNumber(id, contactObject) : null
    }

    if (
      persons.some(
        (person) =>
          person.name.toLowerCase() === contactObject.name.toLocaleLowerCase()
      )
    ) {
      const id = persons.find(
        (person) =>
          person.name.toLocaleLowerCase() ===
          contactObject.name.toLocaleLowerCase()
      ).id
      console.log('id :', id)
      messageConfirmUpdate(id)
    } else {
      addNewContact(contactObject)
    }
  }

  //Display error message on front-end

  const catchError = (error) => {
    const errorWarning = error.response.data.error
    setErrorMessage(errorWarning)
    setTimeout(() => {
      setErrorMessage('')
    }, 5000)
  }

  const addNewContact = async (contactObject) => {
    try {
      const response = await contactService.create(contactObject)
      console.log('Contact added successfully :', response.data)
      setPersons([...persons, response.data])
      setNewName('')
      setNewNumbers('')
      setMessage(`Contact added ${response.data.name}`)
      setTimeout(() => {
        setMessage('')
      }, 5000)
    } catch (error) {
      catchError(error)
      // const displayWarning = error.response.data.error
      // setErrorMessage(displayWarning)
      // setTimeout(() => {
      //   setErrorMessage('')
      // }, 5000)
    }
  }

  //Problem: state updating the state but displaying previous value
  const updateNumber = async (id, contactObject) => {
    console.log('working on the code...')
    try {
      const response = await contactService.update(id, contactObject)
      console.log('response', response)
      const updatedPersons = persons.map((person) =>
        person.id === id ? { ...person, number: response.data.number } : person
      )
      console.log('UpdatedPersons :', updatedPersons)
      setPersons(updatedPersons)
      setMessage(`Updated number to ${response.data.number}`)
      setTimeout(() => {
        setMessage('')
      }, 5000)
      setNewNumbers('')
    } catch (error) {
      catchError(error)
      console.error('Cannot Update', error)
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

  //function for the search bar
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

  //Login functions

  const handleUserName = (e) => {
    console.log(e.target.value)
    setUserName(e.target.value)
  }
  console.log('username :', userName)

  const handlePassword = (e) => {
    console.log(e.target.value)
    setPassword(e.target.value)
  }

  console.log('password :', password)

  const loginBtn = async (e) => {
    e.preventDefault()
    try {
      const user = await loginService.login({
        userName,
        password,
      })
      console.log(user)
      contactService.setToken(user.token)
      setUser(user)
      setUserName('')
      setPassword('')
    } catch (exception) {
      setErrorMessage(exception.error)
      setTimeout(() => {
        setErrorMessage('')
      }, 500)
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

      <Login
        loginSubmit={loginBtn}
        username={userName}
        password={password}
        handleUserName={handleUserName}
        handlePassword={handlePassword}
      />

      {user ? (
        <>
          <div>
            <Filter handleFilter={handleFilter} />
          </div>

          <PersonForm
            addContact={addContact}
            newName={newName}
            handleChange={handleChange}
            newNumbers={newNumbers}
            handleNumbers={handleNumbers}
          />

          <Person searchKey={searchKey} deleteContact={deleteContact} />
        </>
      ) : null}
    </div>
  )
}

export default App
