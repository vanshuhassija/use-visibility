# use-visibility
React hook for tracking components visibility

# Installation
With npm
`npm install --save use-visibility`
With yarn
`yarn add use-visibility`

# Usage
```js
import React from 'react';
import useVisibility from 'use-visibility';

function CheckElementVisibility() {
  const [isElementVisible,elementRef]=useVisibility(100);

  return (
    <img
      ref={elementRef}
      src={imageSource}
      className={isVisible ? 'excited' : ''}
      alt="an image"
    />
  );
}
```
# API Reference
### `useVisibility`
```js
const isVisible = useVisibility(throttleTime);
```
Accepts `number of pixels up to the observable element from the top` as first argument.(defaults to 0)
Accepts `throttle milliseconds` (in ms) as second parameter.(defaults to 100)

Returns if an `element is in viewport` and a `reference to the element`.