import { useState } from "react";

const hobbies = [
  { value: "music", name: "Music" },
  { value: "movies", name: "Movies" },
  { value: "plastic-model", name: "Plastic Model" },
];

const genders = [
  { value: "male", name: "Male" },
  { value: "female", name: "Female" },
  { value: "others", name: "Others" },
];

const jobPositions = {
  accounting: ["Accountant", "Senior Accountant", "Payroll Officer"],
  engineering: ["Frontend Developer", "Backend Developer", "System Analyst"],
  "human-resources": ["HR Assistant", "Recruiter", "HR Manager"],
  marketing: ["Marketing Assistant", "Content Specialist", "Marketing Manager"],
};

const departmentNames = {
  accounting: "Accounting",
  engineering: "Engineering",
  "human-resources": "Human Resources",
  marketing: "Marketing",
};

const initialFormData = {
  username: "",
  firstname: "",
  lastname: "",
  gender: "",
  hobbies: [],
  department: "",
  jobPosition: "",
};

function UserRegistration() {
  const [formData, setFormData] = useState(initialFormData);
  const [submittedData, setSubmittedData] = useState(null);

  const updateField = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const updateDepartment = (event) => {
    setFormData((current) => ({
      ...current,
      department: event.target.value,
      jobPosition: "",
    }));
  };

  const updateHobbies = (event) => {
    const { checked, value } = event.target;

    setFormData((current) => ({
      ...current,
      hobbies: checked
        ? [...current.hobbies, value]
        : current.hobbies.filter((hobby) => hobby !== value),
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedData({ ...formData, hobbies: [...formData.hobbies] });
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setSubmittedData(null);
  };

  const availablePositions = formData.department
    ? jobPositions[formData.department]
    : [];

  const getHobbyNames = (selectedHobbies) =>
    selectedHobbies
      .map((selected) => hobbies.find((hobby) => hobby.value === selected)?.name)
      .filter(Boolean)
      .join(", ");

  return (
    <main className="registration-page">
      <section className="registration-card" aria-labelledby="form-title">
        <header className="card-header">
          <div>
            <p className="eyebrow">Employee portal</p>
            <h1 id="form-title">User Registration</h1>
            <p className="intro">
              Enter the employee details and select a department to see its
              available positions.
            </p>
          </div>
          <div className="header-icon" aria-hidden="true">
            <span>+</span>
          </div>
        </header>

        <form onSubmit={handleSubmit} onReset={handleReset}>
          <div className="form-content">
            <fieldset className="form-section">
              <legend>Personal information</legend>

              <div className="text-fields">
                <div className="field">
                  <label htmlFor="username">Username</label>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    value={formData.username}
                    onChange={updateField}
                    placeholder="e.g. johndoe"
                  />
                </div>

                <div className="field">
                  <label htmlFor="firstname">First name</label>
                  <input
                    id="firstname"
                    name="firstname"
                    type="text"
                    value={formData.firstname}
                    onChange={updateField}
                    placeholder="e.g. John"
                  />
                </div>

                <div className="field">
                  <label htmlFor="lastname">Last name</label>
                  <input
                    id="lastname"
                    name="lastname"
                    type="text"
                    value={formData.lastname}
                    onChange={updateField}
                    placeholder="e.g. Doe"
                  />
                </div>
              </div>

              <div className="choice-row">
                <span className="field-label">Gender</span>
                <div className="choice-group">
                  {genders.map((gender) => (
                    <label className="choice" key={gender.value}>
                      <input
                        type="radio"
                        name="gender"
                        value={gender.value}
                        checked={formData.gender === gender.value}
                        onChange={updateField}
                      />
                      <span>{gender.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="choice-row">
                <span className="field-label">Hobbies</span>
                <div className="choice-group">
                  {hobbies.map((hobby) => (
                    <label className="choice" key={hobby.value}>
                      <input
                        type="checkbox"
                        name="hobbies"
                        value={hobby.value}
                        checked={formData.hobbies.includes(hobby.value)}
                        onChange={updateHobbies}
                      />
                      <span>{hobby.name}</span>
                    </label>
                  ))}
                </div>
              </div>
            </fieldset>

            <fieldset className="form-section employment-section">
              <legend>Employment details</legend>

              <div className="select-grid">
                <div className="field">
                  <label htmlFor="department">Department</label>
                  <select
                    id="department"
                    name="department"
                    value={formData.department}
                    onChange={updateDepartment}
                  >
                    <option value="">Select a department</option>
                    {Object.entries(departmentNames).map(([value, name]) => (
                      <option key={value} value={value}>
                        {name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="field">
                  <label htmlFor="jobPosition">Job position</label>
                  <select
                    id="jobPosition"
                    name="jobPosition"
                    value={formData.jobPosition}
                    onChange={updateField}
                    disabled={!formData.department}
                  >
                    <option value="">
                      {formData.department
                        ? "Select a position"
                        : "Choose a department first"}
                    </option>
                    {availablePositions.map((position) => (
                      <option key={position} value={position}>
                        {position}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </fieldset>
          </div>

          <div className="form-actions">
            <button className="button button-secondary" type="reset">
              Reset
            </button>
            <button className="button button-primary" type="submit">
              Submit registration
            </button>
          </div>
        </form>

        {submittedData && (
          <section className="submitted-card" aria-live="polite">
            <div className="submitted-heading">
              <div className="success-icon" aria-hidden="true">
                ✓
              </div>
              <div>
                <p className="eyebrow">Submission received</p>
                <h2>Registration details</h2>
              </div>
            </div>

            <dl className="result-grid">
              <div>
                <dt>Username</dt>
                <dd>{submittedData.username || "Not provided"}</dd>
              </div>
              <div>
                <dt>Full name</dt>
                <dd>
                  {[submittedData.firstname, submittedData.lastname]
                    .filter(Boolean)
                    .join(" ") || "Not provided"}
                </dd>
              </div>
              <div>
                <dt>Gender</dt>
                <dd>
                  {genders.find(
                    (gender) => gender.value === submittedData.gender,
                  )?.name || "Not selected"}
                </dd>
              </div>
              <div>
                <dt>Hobbies</dt>
                <dd>
                  {getHobbyNames(submittedData.hobbies) || "None selected"}
                </dd>
              </div>
              <div>
                <dt>Department</dt>
                <dd>
                  {departmentNames[submittedData.department] || "Not selected"}
                </dd>
              </div>
              <div>
                <dt>Job position</dt>
                <dd>{submittedData.jobPosition || "Not selected"}</dd>
              </div>
            </dl>
          </section>
        )}
      </section>
    </main>
  );
}

export default UserRegistration;
