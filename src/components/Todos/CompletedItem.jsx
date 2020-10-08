import React from 'react';

const CompletedItem = ({ completed }) => {
  /* Borrowed function for formatting the date */
  const dateFormatter = () => {
    const date = new Date();
    const format = new Intl.DateTimeFormat('en', {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
    });
    const [
      { value: month },
      ,
      { value: day },
      ,
      { value: year },
    ] = format.formatToParts(date);

    return `${day}.${month}.${year}`;
  };

  return (
    <>
      <tr key={completed.id}>
        <td>{completed.title}</td>
        <td>{completed.author}</td>
        <td>{completed.description}</td>
        <td>{dateFormatter()}</td>
      </tr>
    </>
  );
};

export default CompletedItem;
