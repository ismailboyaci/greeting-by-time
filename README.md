# timely-greet

Get a localized greeting based on the current time of day. Supports `en` and `tr`.

## Usage

```ts
import { getGreeting } from 'timely-greet';

console.log(getGreeting()); // e.g. Good evening
console.log(getGreeting({ lang: 'tr' })); // e.g. İyi akşamlar
