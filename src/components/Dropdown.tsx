import React from 'react';
import Spectrum from 'react-uxp-spectrum';

export default function Dropdown() {
  return (
    <>
      <div className="element">
        <Spectrum.Detail>DROPDOWN</Spectrum.Detail>
        <div className="flex-row begin">
          <Spectrum.Dropdown className="dropdown" placeholder="Make a selection...">
            <Spectrum.Menu slot="options">
              <Spectrum.MenuItem key="1">First Item</Spectrum.MenuItem>
              <Spectrum.MenuItem key="2">Second Item</Spectrum.MenuItem>
              <Spectrum.MenuItem key="3">Third Item</Spectrum.MenuItem>
            </Spectrum.Menu>
          </Spectrum.Dropdown>
        </div>
      </div>
    </>
  );
}
