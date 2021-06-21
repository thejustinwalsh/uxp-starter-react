import React from 'react';
import Spectrum from 'react-uxp-spectrum';

export default function Sliders() {
  return (
    <>
      <div className="element">
        <Spectrum.Detail>SLIDER</Spectrum.Detail>
        <div className="flex-column begin">
          <Spectrum.Slider className="dropdown" min={0} max={100} value={50}>
            <Spectrum.Label slot="label">Slider Label</Spectrum.Label>
          </Spectrum.Slider>
          <br />
          <Spectrum.Slider className="dropdown" min={0} max={100} value={75} fillOffset="left" variant="filled" />
          <br />
          <Spectrum.Slider className="dropdown" min={0} max={100} value={25} fillOffset="right" variant="filled" />
        </div>
      </div>
    </>
  );
}
