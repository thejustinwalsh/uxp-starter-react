import React from 'react';
import Spectrum from 'react-uxp-spectrum';

export default function RadioGroup() {
  return (
    <>
      <div className="element">
        <Spectrum.Detail>RADIO GROUP</Spectrum.Detail>
        <div className="flex-row begin">
          <Spectrum.RadioGroup>
            <Spectrum.Label slot="label">RadioGroup Label</Spectrum.Label>
            <Spectrum.Radio checked value="1">
              Radio
            </Spectrum.Radio>
            <Spectrum.Radio disabled value="2">
              Radio
            </Spectrum.Radio>
            <Spectrum.Radio invalid value="3">
              Radio
            </Spectrum.Radio>
            <Spectrum.Radio emphasized value="4">
              Radio
            </Spectrum.Radio>
          </Spectrum.RadioGroup>
        </div>
      </div>
    </>
  );
}
