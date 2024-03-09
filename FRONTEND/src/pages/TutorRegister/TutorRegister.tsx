import React, { useState } from 'react';
import { Select } from '@mantine/core';
import { NumberInput } from '@mantine/core';
import toast from 'react-hot-toast';
const TutorRegister: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
  });
  const [formDataUpdate, setFormDataUpdate] = useState({
    Experience: '',
    Languages: [],
  });

  const [status, setStatus] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleInputChangeUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setFormData((prevData) => ({
      ...prevData,
      languages: selectedOptions as never[],
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement your registration logic here
    setStatus(true);
    console.log('Form Data:', formData);
  };

  const handleSubmitUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement your registration logic here
    setStatus(true);
    console.log('Form Data:', formDataUpdate);
  };
  const [languages] = useState([
    'English',
    'Spanish',
    'French',
    'German',
    'Chinese',
    'Japanese',
    'Korean',
    'Arabic',
    'Russian',
    'Italian',
    'Portuguese',
    'Dutch',
  ]);
  return (
    <div className="h-[100vh] w-[100vw] flex justify-center items-center">
      {status == false ? (
        <div className="w-[500px] mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-600"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            {/* <div className="mb-4">
            <NumberInput
              label="Teaching Experience"
              description="in years"
              placeholder="0"
            />
          </div>
          <div className="mb-4">
            <Select
              label="Languages Known"
              placeholder="Pick value"
              data={languages}
              searchable
            />
          </div> */}
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md"
            >
              Register
            </button>
          </form>
        </div>
      ) : (
        <div className="w-[500px] mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Register</h2>
          <form onSubmit={handleSubmitUpdate}>
            <div className="mb-4">
              <NumberInput
                label="Teaching Experience"
                description="in years"
                placeholder="0"
                onChange={handleInputChangeUpdate}
              />
            </div>
            <div className="mb-4">
              <Select
                label="Languages Known"
                placeholder="Pick value"
                data={languages}
                searchable
                onChange={(e) => {
                  console.log(e.target.value);
                }}
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md"
              onClick={() => {
                window.location.href = '/myschedule';
              }}
            >
              Register
            </button>
          </form>
        </div>
      )}{' '}
    </div>
  );
};

export default TutorRegister;
