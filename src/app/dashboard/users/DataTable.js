// components/DataTable.js
import React from 'react';

const DataTable = ({ data }) => {
  return (
    <table className="table w-full">
      <thead>
        <tr>
          {/* Add table headers here */}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {/* Render table rows here */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
