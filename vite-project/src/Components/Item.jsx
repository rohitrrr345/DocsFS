// Item.js
import React from 'react';
import styled from 'styled-components';

const ItemContainer = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
  margin: 5px;
  display: flex;
  justify-content: space-between;
`;

function Item({ item, onDelete }) {
  return (
    <ItemContainer>
      <div>{item.name}</div>
      <button onClick={() => onDelete(item.id)}>Delete</button>
    </ItemContainer>
  );
}

export default Item;
