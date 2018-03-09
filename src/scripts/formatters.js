/*eslint-env node*/

exports.dateFormatter = new Intl.DateTimeFormat('en-US', {
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  month: 'long',
  second: 'numeric',
  year: 'numeric',
  timeZoneName: 'short'
});

exports.formatSites = tags => {
  const sitePrefix = 'site:';
  return tags
    .filter(tagging => tagging.name.startsWith(sitePrefix))
    .map(tagging => tagging.name.slice(sitePrefix.length))
    .join(', ');
};
