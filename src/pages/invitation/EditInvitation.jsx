import React from 'react';
import { useParams } from 'react-router-dom';

function EditInvitation() {
  const { id } = useParams();
  return <div>Edit {id}</div>;
}

export default EditInvitation;
