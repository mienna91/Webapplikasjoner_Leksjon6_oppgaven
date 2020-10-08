import React from 'react';
import Title from '../Title';
import CompletedItem from './CompletedItem';

const CompletedList = ({ completed }) => (
  <section id="completeSection">
    <Title title="Completed todos" />
    <form id="formComplete">
      <label htmlFor="filterCheckBox" id="checkBoxLbl">
        Filter by date
      </label>
      <input type="checkbox" name="filterCheckBox" id="filterCheckbox" />
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
        {completed.map((item) => (
          <CompletedItem key={item.id} completed={item} />
        ))}
      </tbody>
    </table>
  </section>
);

export default CompletedList;
