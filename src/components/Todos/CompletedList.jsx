import React from 'react';
import CompletedItem from './CompletedItem';

const CompletedList = ({ completed }) => (
  <table>
    <thead>
      <tr>
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
);

export default CompletedList;
