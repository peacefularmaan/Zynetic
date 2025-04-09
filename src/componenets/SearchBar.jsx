import { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      onSearch(input);
      setInput('');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center items-center gap-2 w-full mb-6"
    >
      <input
        type="text"
        placeholder="Enter city name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="px-4 py-2 rounded-md bg-gray-800 text-white w-2/3 sm:w-1/2"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
      >
        Search
      </button>
    </form>
  );
}
