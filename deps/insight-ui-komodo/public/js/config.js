var config = {
  symbol: 'OFC',
  url: window.location.origin,
  apiPrefix: '/insight-api-komodo',
  notarized: false,
  pageSize: 3, // oracles address book page size
};

window.pageSize = config.pageSize;
window.netSymbol = config.symbol;
window.apiPrefix = config.url + config.apiPrefix;
window.urlPrefix = config.url;
