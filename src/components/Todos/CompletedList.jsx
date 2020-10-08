import React, { useState, useEffect } from 'react';
import Title from '../Title';
import CompletedItem from './CompletedItem';

const CompletedList = ({ completed }) => {
  const [search, setSearch] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  const handleChange = (event) => setSearch(event.target.value);

  useEffect(() => {
    const result = completed.filter((complete) =>
      complete.title.toLowerCase().includes(search)
    );
    setSearchResult(result);
  }, [search]);

  return (
    <section id="completeSection">
      <Title title="Completed todos" />
      <form id="formComplete">
        <label htmlFor="filterCheckBox" id="checkBoxLbl">
          Search by title:
        </label>
        <input
          type="text"
          name="filterCheckBox"
          id="filterCheckbox"
          onChange={handleChange}
          value={search}
        />
      </form>
      <table id="completeTable">
        <thead>
          <tr id="tblHeader">
            <th>Title</th>
            <th>Author</th>
            <th>Description</th>
            <th>Completed date</th>
          </tr>
        </thead>
        <tbody>
          {search.length < 1
            ? completed.map((item) => (
                <CompletedItem key={item.id} completed={item} />
              ))
            : searchResult.map((item) => (
                <CompletedItem key={item.id} completed={item} />
              ))}
        </tbody>
      </table>
    </section>
  );
};

export default CompletedList;
