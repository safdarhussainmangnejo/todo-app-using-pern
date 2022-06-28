import React from "react";
import styled from "styled-components";
import Button from './Button.styled';
const StyledTable = styled.table`
  caption-side: top;
  border: none;
  caption-side: bottom;
   empty-cell: show | hide; 

   vertical-align: baseline | sub | super | text-top | 
                text-bottom | middle | top | bottom | 
                <percentage> | <length>

   tbody {
    vertical-align: top;
  }             
  td,
  th {
    border: none;
  }
   td,
  th {
    
    border-bottom:1px solid;
    padding: 5px 5px;
    background: papayawhip;
  }
  }

  td {
    padding: 5px 10px;
  }

  tbody tr {
    :nth-of-type(odd) {
      
      background: papayawhip;
    }
  }
  thead > tr {
    background-color: #c2c2c2;
    
  caption {
    font-size: 1.5em;
    padding: 10px;
    font-weight: bold;
  }
`;
export default ({ data }) => (
  <TableMarkup titles={Object.keys(data[0])} data={data} />
);
const TableMarkup = ({ titles, data }) => (
  <StyledTable>
    
    <colgroup>
      <col />
      <col />
      <col />
    </colgroup>
    <thead>
      <tr>
        {titles.map((title, index) => (
          <th key={index}>{title}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((item, index) => (
        <tr key={index}>
          {titles.map((title, index) => (
            <td key={index}>{item[title]}</td>
            
          ))}
        <td> <Button>Edit</Button></td>
        <td><Button>Delete</Button></td>
          
        </tr>
      ))}
    </tbody>
    
  </StyledTable>
);
