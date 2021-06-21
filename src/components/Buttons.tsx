import React from 'react';
import Spectrum from 'react-uxp-spectrum';

export default function Buttons() {
  return (
    <>
      <div className="element">
        <Spectrum.Detail>BUTTON</Spectrum.Detail>
        <div className="flex-row around">
          <Spectrum.ActionButton>Button</Spectrum.ActionButton>
          <Spectrum.ActionButton disabled>Button</Spectrum.ActionButton>
          <Spectrum.ActionButton quiet>Button</Spectrum.ActionButton>
          <Spectrum.ActionButton>
            <Spectrum.Icon name="ui:Magnifier" size="xs" slot="icon" />
            Button
          </Spectrum.ActionButton>
          <Spectrum.ActionButton>
            <Spectrum.Icon name="ui:Magnifier" size="xs" slot="icon" />
          </Spectrum.ActionButton>
        </div>
      </div>
    </>
  );
}
