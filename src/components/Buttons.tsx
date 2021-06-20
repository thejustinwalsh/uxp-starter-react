import React from 'react';
import Spectrum from 'react-uxp-spectrum';

export default function Buttons() {
  return (
    <>
      <div className="element">
        <Spectrum.Detail>NORMAL</Spectrum.Detail>
        <div className="flex-row begin">
          <Spectrum.ActionButton>Do Action</Spectrum.ActionButton>
          <Spectrum.ActionButton disabled>Do Action</Spectrum.ActionButton>
        </div>
      </div>
      <div className="element">
        <Spectrum.Detail>QUIET</Spectrum.Detail>
        <div className="flex-row begin">
          <Spectrum.ActionButton quiet>Do Action</Spectrum.ActionButton>
          <Spectrum.ActionButton quiet disabled>
            Do Action
          </Spectrum.ActionButton>
        </div>
      </div>
      <div className="element">
        <Spectrum.Detail>ICONS</Spectrum.Detail>
        <div className="flex-row begin">
          <Spectrum.ActionButton>
            <Spectrum.Icon name="ui:Magnifier" size="xs" slot="icon" />
            Do Action
          </Spectrum.ActionButton>
          <Spectrum.ActionButton>
            <Spectrum.Icon name="ui:Magnifier" size="xs" slot="icon" />
          </Spectrum.ActionButton>
        </div>
      </div>
    </>
  );
}
