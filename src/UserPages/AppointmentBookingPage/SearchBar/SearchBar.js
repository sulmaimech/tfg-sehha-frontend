import React from 'react';
import { useForm } from 'react-hook-form';
//import './Searchbar.css'

// Assuming specialities and specialists are passed as props and may include more detailed objects in your real use case
const SearchBar = ({ onFilter, specialists }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log("Form Submission Data: ", data);
    onFilter(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="search-bar">
      <div className="select-container">
        <label htmlFor="specialist">Specialist</label>
        <select id="specialist" {...register('specialist')}>
          <option value="">Select a Specialist</option>
          {specialists.map((specialist, index) => (
            <option key={index} value={specialist.id}>
              {"Dr." + specialist.firstName + " " + specialist.lastName}
            </option>
          ))}
        </select>
      </div>
      <input {...register('from')} type="datetime-local" />
      <input {...register('to')} type="datetime-local" />
      <button type="submit" className="search-button">Search</button>
    </form>
  );
};

export default SearchBar;
