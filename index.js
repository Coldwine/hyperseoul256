exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    foregroundColor: '#d9d9d9',
    backgroundColor: '#4b4b4b',
    borderColor: '#4b4b4b',
    cursorColor: 'rgba(217, 217, 217, .4)',
    colors: [ '#616161', '#df9b99', '#719672', '#e0bc72', '#96bcdc', '#dfbebd', '#98bcbd', '#d9d9d9',
              '#757575', '#e17799', '#98bb99', '#ffde99', '#baddfc', '#ffbebd', '#97dedf', '#e9e9e9' ]
  });
};
