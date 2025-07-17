const { getGreeting } = require('./dist');

console.log(getGreeting()); // This will log the greeting based on the current time
console.log(getGreeting({lang: 'tr'})); // This will log the greeting in Turkish
console.log(getGreeting({lang: 'en'})); // This will log the greeting in English
console.log(getGreeting({date: new Date('2023-01-01T08:00:00')})); // This will log "Good Morning" in the default language