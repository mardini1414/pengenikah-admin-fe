import React from 'react';
import { getTodo } from '../repositories/todo';

function NotFound() {
  const { data } = getTodo();
  console.log(data);

  return <div>NotFound</div>;
}

export default NotFound;
