import React, {useState} from 'react'

function Student(props) {
  return (
    <div className='card'>
          <img src={props.student.images} alt='Our Students'className='card-img-top mx-auto' />
          <ul className='list-group list-group-flush'>
            <li className='list-group-item text-center'>{props.student.firstName}</li>
            <li className='list-group-item text-center'>{props.student.lastName}</li>
            <li className='list-group-item text-center'>{props.student.email}</li>
            <li className='list-group-item text-center'>{props.student.gradYear}</li>
            <button type='button' className='btn btn-danger'onClick={(props.removeStudent(props.student))}> Delete Student</button>
          </ul>
        </div>
  )
}

export default Student
