import React from 'react';
import Spectrum from 'react-uxp-spectrum';

export default function Progressbar() {
  return (
    <>
      <div className="element">
        <Spectrum.Detail>PROGRESS BAR</Spectrum.Detail>
        <div className="flex-row begin">
          <Spectrum.Progressbar className="dropdown" min={0} max={100} value={75} valueLabel="128Kb">
            <Spectrum.Label slot="label">Progressing...</Spectrum.Label>
          </Spectrum.Progressbar>
        </div>
      </div>
    </>
  );
}
