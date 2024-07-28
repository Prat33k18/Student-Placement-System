import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Alert } from 'react-bootstrap';
import base_url from './api';

function PlacementForm() {
  const [placement, setPlacement] = useState({
    name: '',
    college: '',
    date: '',
    qualification: '',
    year: ''
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const onFormSubmit = async (e) => {
    e.preventDefault();
    
    if (!placement.name || !placement.college || !placement.date || !placement.qualification || !placement.year) {
      setError('Please fill out all fields.');
      return;
    }

    try {
      const response = await postDataToServer(placement);
      console.log(response);
      setSuccess(true);
      setError(null);
      onReset();
    } catch (err) {
      console.error(err);
      setError('Error submitting the form. Please try again.');
    }
  };

  const postDataToServer = async (data) => {
    return axios.post(`${base_url}`, data);
  };

  const onReset = () => {
    setPlacement({
      name: '',
      college: '',
      date: '',
      qualification: '',
      year: ''
    });
    setError(null);
    setSuccess(false);
  };

  return (
    <div>
      <h1>Placement Entry Form</h1>
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">Form submitted successfully!</Alert>}
      <Form onSubmit={onFormSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            value={placement.name}
            onChange={(e) => setPlacement({ ...placement, name: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>College:</Form.Label>
          <Form.Control
            type="text"
            value={placement.college}
            onChange={(e) => setPlacement({ ...placement, college: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Date:</Form.Label>
          <Form.Control
            type="date"
            value={placement.date}
            onChange={(e) => setPlacement({ ...placement, date: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Qualification:</Form.Label>
          <Form.Control
            type="text"
            value={placement.qualification}
            onChange={(e) => setPlacement({ ...placement, qualification: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Year:</Form.Label>
          <Form.Control
            type="number"
            value={placement.year}
            onChange={(e) => setPlacement({ ...placement, year: e.target.value })}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Button variant="secondary" type="button" onClick={onReset} className="ms-2">
          Reset
        </Button>
      </Form>
    </div>
  );
}

export default PlacementForm;
