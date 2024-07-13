// utils/helpers.js

module.exports = {
  format_date: (date) => {
    console.log('Date to format:', date, 'Type:', typeof date); // Log the date value

    // Ensure date is valid
    if (!date || isNaN(new Date(date).getTime())) {
      return 'Invalid Date';
    }

    const d = new Date(date);
    const month = d.getMonth() + 1;
    const day = d.getDate();
    const year = d.getFullYear();

    return `${month}/${day}/${year}`;
  },

  format_plural: (word, amount) => {
    return amount !== 1 ? `${word}s` : word;
  },

  format_url: (url) => {
    return url.replace('http://', '').replace('https://', '').replace('www.', '').split('/')[0];
  },
};
