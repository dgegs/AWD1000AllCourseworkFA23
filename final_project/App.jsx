import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {nanoid} from 'nanoid';
import AddStudent from './AddStudent';
import _ from 'lodash';

function App() {

  const [allStudents, setAllStudents] = useState(null);
  const [searchResults, setSearchResults] = useState(null);
  const [keywords, setKeywords] = useState('');
  const [gradYear, setGradYear] = useState('');

  const saveStudents = (students) => {
    setAllStudents(students);
    setSearchResults(students);
  }

  const addStudent = (newStudent) => {
    const updatedStudents = [...allStudents, newStudent];
    saveStudents(updatedStudents)
}

  const searchStudents = () => {
    let keywordsArray = [];

    if(keywords){
      keywordsArray = keywords.toLowerCase().split(' ');
    }

    if(gradYear){
      keywordsArray.push(gradYear.toString());
    }

    if(keywordsArray.length > 0){
      const searchResults = allStudents.filter(student => {
        for(const word of keywordsArray){
          if(student.firstName.toLowerCase().includes(word) || 
          student.lastName.toLowerCase().includes(word) || 
          student.gradYear === parseInt(word)){
            return true;
          }
        }
        return false;
      });
      setSearchResults(searchResults);
    }else{
      setSearchResults(allStudents);
    }
  }

  const students = [{
    id: nanoid(),
    firstName: "Bernete",
    lastName: "Beed",
    email: "bbeed0@flickr.com",
    images:'images/student1.jpg',
    gradYear: 2003

  }, {
    id: nanoid(),
    firstName: "Yolande",
    lastName: "Schruur",
    email: "yschruur1@boston.com",
    images:'images/student2.jpg',
    gradYear: 2000
  }, {
    id: nanoid(),
    firstName: "Ag",
    lastName: "Gendricke",
    email: "agendricke2@networkadvertising.org",
    images:'images/student3.jpg',
    gradYear: 2003
  }, {
    id: nanoid(),
    firstName: "Robinia",
    lastName: "Dagleas",
    email: "rdagleas3@prweb.com",
    images:'images/student4.jpg',
    gradYear: 2005
  }, {
    id: nanoid(),
    firstName: "Rosa",
    lastName: "Cathel",
    email: "rcathel4@google.cn",
    images:'images/student5.jpg',
    gradYear: 2004
  }, {
    id: nanoid(),
    firstName: "Brandtr",
    lastName: "Manie",
    email: "bmanie5@arizona.edu",
    images:'images/student6.jpg',
    gradYear: 2003
  }, {
    id: nanoid(),
    firstName: "Nalani",
    lastName: "Edge",
    email: "nedge6@quantcast.com",
    images:'images/student7.jpg',
    gradYear: 2002
  }, {
    id: nanoid(),
    firstName: "Mel",
    lastName: "McCullouch",
    email: "mmccullouch7@ucla.edu",
    images:'images/student8.jpg',
    gradYear: 2002
  }, {
    id: nanoid(),
    firstName: "Danie",
    lastName: "Bushill",
    email: "dbushill8@house.gov",
    images:'images/student9.jpg',
    gradYear: 2003
  }, {
    id: nanoid(),
    firstName: "Evvy",
    lastName: "Dowderswell",
    email: "edowderswell9@skype.com",
    images:'images/student10.jpg',
    gradYear: 2001
  }];
  

  return (

    <div className='container'>
      <div className='row'>
        {searchResults && searchResults.map((student) =>
        (      <div className='col-lg-2'key={student.id}>
        <div className='card'>
          <img src={student.images} alt='Our Students'className='card-img-top mx-auto' />
          <ul className='list-group list-group-flush'>
            <li className='list-group-item text-center'>{student.firstName}</li>
            <li className='list-group-item text-center'>{student.lastName}</li>
            <li className='list-group-item text-center'>{student.email}</li>
            <li className='list-group-item text-center'>{student.gradYear}</li>
          </ul>
        </div>
      </div>)
        )}

      </div>
      {!allStudents && <button type="button" className='btn btn-lg btn-success' onClick={() => saveStudents(students)}>Save Students</button>}
      <AddStudent addStudent={addStudent}/>
      <div className='row mt-4'>
        <div className='col-md-4'>
          <label htmlFor='txtKeyworkds'>Search by First or Last Name</label>
          <input type='text' className='form-control' placeholder='Student Name' onChange={evt => setKeywords(evt.currentTarget.value)} value={keywords}/>
        </div>
        <div className='col-md-4'>
          <select value={gradYear} onChange={evt => setGradYear(evt.currentTarget.value)} className='form-select'>
            <option value=''>Select Year</option>
            {_(allStudents).map(student => student.gradYear).sort().uniq().map(year => <option key={year} value={year}>{year}</option>).value()}          </select>
        </div>
        <div className='col-md-4'>
          <button type='button' className='btn btn-primary' onClick={searchStudents}>Search Students</button>
        </div>
      </div> 
    </div>
  )
}

export default App
