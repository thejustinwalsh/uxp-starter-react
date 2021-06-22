import React, { useState } from 'react';
import Spectrum from 'react-uxp-spectrum';

export default function Textfields() {
  const [valid, setValid] = useState(false);

  return (
    <>
      <div className="element">
        <Spectrum.Detail>TEXTFIELD</Spectrum.Detail>
        <div className="flex-column begin">
          <Spectrum.Textfield
            invalid={!valid}
            valid={valid}
            placeholder="Placeholder..."
            onInput={e => setValid(e.target.value !== '')}
          >
            <Spectrum.Label isRequired slot="label">
              Required field
            </Spectrum.Label>
          </Spectrum.Textfield>
        </div>
      </div>
      <div className="element">
        <Spectrum.Detail>TEXTAREA</Spectrum.Detail>
        <div className="flex-column begin">
          <Spectrum.Textarea placeholder="Say something...">
            <Spectrum.Label slot="label">Textarea Label</Spectrum.Label>
          </Spectrum.Textarea>
        </div>
      </div>
    </>
  );
}
