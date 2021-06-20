import React from 'react';
import Spectrum from 'react-uxp-spectrum';

export default function Checkboxes() {
  return (
    <>
      <div className="element">
        <Spectrum.Detail>CHECKBOX</Spectrum.Detail>
        <div className="flex-row begin">
          <Spectrum.Checkbox>Checkbox</Spectrum.Checkbox>
        </div>
      </div>
      <div className="element">
        <Spectrum.Detail>CHECKBOX STATES</Spectrum.Detail>
        <div className="flex-row around">
          <Spectrum.Checkbox checked>Checkbox</Spectrum.Checkbox>
          <Spectrum.Checkbox indeterminate>Checkbox</Spectrum.Checkbox>
          <Spectrum.Checkbox disabled>Checkbox</Spectrum.Checkbox>
          <Spectrum.Checkbox invalid>Checkbox</Spectrum.Checkbox>
        </div>
      </div>
    </>
  );
}
