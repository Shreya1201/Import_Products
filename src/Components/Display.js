import React, { useState, useEffect } from "react";
import axios from "axios";

const TableComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://s3.amazonaws.com/open-to-cors/assignment.json"
        );
        setData(response.data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const renderTableHeader = () => {
    if (!data || Object.keys(data).length === 0) {
      return null;
    }

    const headers = Object.keys(data[Object.keys(data)[0]]);

    return headers.map((header) => <th key={header}>{header}</th>);
  };

  const renderTableData = () => {
    if (!data || Object.keys(data).length === 0) {
      return null;
    }

    const sortedData = Object.values(data).sort(
      (a, b) => parseInt(b.popularity, 10) - parseInt(a.popularity, 10)
    );

    return sortedData.map((product, index) => {
      return (
        <tr key={index}>
          <td>{product.subcategory}</td>
          <td>{product.title}</td>
          <td>{product.price}</td>
          <td>{product.popularity}</td>
        </tr>
      );
    });
  };

  return (
    <div>
      <div>
        <thead>
          <tr>{renderTableHeader()}</tr>
        </thead>
        <tbody>{renderTableData()}</tbody>
      </div>
    </div>
  );
};

export default TableComponent;
