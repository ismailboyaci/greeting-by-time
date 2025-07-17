# greeting-by-time

Get a localized greeting based on the current time of day. Supports `en` and `tr`.

## Usage

```ts
import { getGreeting } from 'greeting-by-time';

console.log(getGreeting()); // e.g. Good evening
console.log(getGreeting({ lang: 'tr' })); // e.g. İyi akşamlar
