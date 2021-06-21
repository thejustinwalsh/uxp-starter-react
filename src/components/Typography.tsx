import React from 'react';
import Spectrum from 'react-uxp-spectrum';

export default function Typography() {
  return (
    <>
      <Spectrum.Heading size="L">UXP Starter React</Spectrum.Heading>
      <Spectrum.Body>
        Complete starter for writing{' '}
        <Spectrum.Link quiet href="https://www.adobe.io/xd/uxp/uxp/reference-spectrum/">
          UXP plugins
        </Spectrum.Link>{' '}
        using{' '}
        <Spectrum.Link quiet href="https://github.com/thejustinwalsh/react-uxp-spectrum">
          React
        </Spectrum.Link>{' '}
        and{' '}
        <Spectrum.Link quiet href="https://github.com/thejustinwalsh/uxp-types">
          Typescript
        </Spectrum.Link>
        .
      </Spectrum.Body>
      <br />
      <Spectrum.Detail size="M">Component Gallery</Spectrum.Detail>
    </>
  );
}
