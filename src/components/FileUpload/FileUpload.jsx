import React, { useState } from 'react';
import { string, func } from 'prop-types';
import classNames from 'classnames';

import './fileUpload.scss';
import UploadIcon from '../../assets/icons/icon-upload.svg';

export const FileUpload = ({ name, placeholder, errorMessage, getValue }) => {
  const [uploadedFile, setUploadedFile] = useState('');

  const uploadHandler = (e) => {
    const file = e.target.files[0];
    setUploadedFile(file);
    getValue(file);
  };

  return (
    <div className="upload">
      <div className="upload__label">{name}</div>
      <input
        className="upload__input"
        id={name}
        type="file"
        name={name}
        accept=".pdf"
        onChange={uploadHandler}
      />
      <label
        className={classNames('upload__field', { upload__error: errorMessage })}
        htmlFor={name}
      >
        {uploadedFile?.name || (
          <span className="upload__placeholder">{placeholder}</span>
        )}
        <UploadIcon className="upload__icon" />
      </label>
      {errorMessage && (
        <div className="upload__error-message">{errorMessage}</div>
      )}
    </div>
  );
};

FileUpload.propTypes = {
  name: string.isRequired,
  placeholder: string.isRequired,
  errorMessage: string,
  getValue: func,
};
