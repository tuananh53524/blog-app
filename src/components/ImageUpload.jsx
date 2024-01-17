// ImageUpload.js
'use client'
import React, { useState } from 'react';
import { Form, Button, Col, Row, Image } from 'react-bootstrap';
import imageStyles from '@/css/ImageUpload.module.css';

const ImageUpload = () => {
  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([...images, ...files]);

    const previews = files.map((file) => URL.createObjectURL(file));
    setImagePreviews([...imagePreviews, ...previews]);
  };

  const handleRemoveImage = (index) => {
    const updatedImages = [...images];
    const updatedPreviews = [...imagePreviews];

    updatedImages.splice(index, 1);
    updatedPreviews.splice(index, 1);

    setImages(updatedImages);
    setImagePreviews(updatedPreviews);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Handle image upload logic here
    console.log('Images uploaded:', images);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Choose images</Form.Label>
        <Form.Control type="file" multiple onChange={handleImageChange} />
      </Form.Group>

      <Row xs={1} md={2} lg={3}>
        {imagePreviews.map((preview, index) => (
          <Col xs={6} md={4} key={index} className="mb-3">
            <Image src={preview} alt={`Preview ${index}`} thumbnail className={imageStyles['image-preview']} />
            <Button variant="danger" onClick={() => handleRemoveImage(index)} className={imageStyles['remove-button']}>
              Remove
            </Button>
          </Col>
        ))}
      </Row>

      <Button type="submit">Upload</Button>
    </Form>
  );
};

export default ImageUpload;
