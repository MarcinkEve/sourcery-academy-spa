import React, { useState, useRef } from 'react';
import { string, func } from 'prop-types';
import classNames from 'classnames';

import './fileUpload.scss';
import UploadIcon from '../../assets/icons/icon-upload.svg';
import ErrorMessage from '../ErrorMessage';

export const FileUpload = ({
  name,
  placeholder,
  errorMessage,
  onValueChange,
}) => {
  const [uploadedFile, setUploadedFile] = useState('');
  const fileInput = useRef(null);

  const triggerInputFile = () => fileInput.current.click();

  const uploadHandler = (e) => {
    const file = e.target.files[0];
    setUploadedFile(file);
    onValueChange(file);
  };

  return (
    <div className="upload">
      <label className="upload__label">{name}</label>
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
        {uploadedFile?.name || (
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
  errorMessage: string,
  onValueChange: func,
};
