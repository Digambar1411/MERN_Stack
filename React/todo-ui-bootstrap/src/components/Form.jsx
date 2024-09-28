import React from 'react'

function Form() {
  return (
    <div className='form'>
      <h1>Student Details Form</h1>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Full Name</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your full name" />
      </div>

      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your email" />
      </div>

      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Age</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your age" />
      </div>

      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Grade</label>
        <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
          <option selected>Select your grade</option>
          <option value="1">A</option>
          <option value="2">B</option>
          <option value="3">C</option>
        </select>
      </div>

      <div class="mb-5">
        <div class="form-check">
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
          <label class="form-check-label" for="flexRadioDefault1">
            Male
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
          <label class="form-check-label" for="flexRadioDefault2">
            Female
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
          <label class="form-check-label" for="flexRadioDefault2">
            Other
          </label>
        </div>
      </div>

      <input class="btn btn-primary" type="submit" value="Submit"/>


    </div>
  )
}

export default Form