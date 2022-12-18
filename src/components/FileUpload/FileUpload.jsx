import React, { useState, useRef, useEffect } from 'react';
import { string, func } from 'prop-types';
import classNames from 'classnames';

import './fileUpload.scss';
import UploadIcon from '~/assets/icons/icon-upload.svg';
import ErrorMessage from '~/components/ErrorMessage';
import { validationHandler } from './validationOnBlur';

export const FileUpload = ({ name, placeholder, getValidatedValue }) => {
  const [uploadedFile, setUploadedFile] = useState();
  const [errorMessage, setErrorMessage] = useState(null);
  const [validFile, setValidFile] = useState(null);
  const fileInput = useRef(null);

  useEffect(() => {
    validationHandler(uploadedFile, setErrorMessage, setValidFile);
  }, [uploadedFile]);

  //sending valid file
  useEffect(() => {
    if (validFile && getValidatedValue) return getValidatedValue(validFile);
    return;
  }, [validFile]);

  const triggerInputFile = () => fileInput.current.click();

  const uploadHandler = (e) => {
    const file = e.target.files[0];
    setUploadedFile(file);
  };
  return (
    <div className="upload">
      <label className="upload__label" htmlFor={name}>
        {name}
      </label>
      <input
        className="upload__input"
        id={name}
        name={name}
        ref={fileInput}
        type="file"
        accept=".pdf"
        onChange={uploadHandler}
      />
      <div
        className={classNames('upload__field', {
          'upload__field--error': errorMessage,
        })}
        onClick={triggerInputFile}
      >
        {uploadedFile ? (
          <span className="upload__file-name">{uploadedFile.name}</span>
        ) : (
          <span className="upload__placeholder">{placeholder}</span>
        )}
        <UploadIcon className="upload__icon" />
      </div>
      {errorMessage && <ErrorMessage message={errorMessage} />}
    </div>
  );
};

FileUpload.propTypes = {
  name: string.isRequired,
  placeholder: string.isRequired,
  getValidatedValue: func,
};
