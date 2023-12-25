// ref: http://blog.davidjs.com/2018/07/convert-exponential-numbers-to-decimal-in-javascript/
var convertExponentialToDecimal = function(exponentialNumber) {
  // sanity check - is it exponential number
  var str = exponentialNumber.toString();
  if (str.indexOf('e') !== -1) {
    var exponent = parseInt(str.split('-')[1], 10);
    // Unfortunately I can not return 1e-8 as 0.00000001, because even if I call parseFloat() on it,
    // it will still return the exponential representation
    // So I have to use .toFixed()
    var result = exponentialNumber.toFixed(exponent);
    return result;
  } else {
    return exponentialNumber;
  }
}

var fromSats = function(value) {
  return convertExponentialToDecimal(Number(Number(value * 0.00000001).toFixed(8)));
}

var sort = (data, sortBy) => {
  return data.sort((b, a) => {
    if (!sortBy || sortBy === 'height') {
      if (a[sortBy ? sortBy : 'height'] < 0 &&
          b[sortBy ? sortBy : 'height']) {
        return 1;
      }

      if (b[sortBy ? sortBy : 'height'] < 0 &&
          a[sortBy ? sortBy : 'height']) {
        return -1;
      }
    }

    if (!a[sortBy ? sortBy : 'height'] &&
        b[sortBy ? sortBy : 'height']) {
      return 1;
    }

    if (!b[sortBy ? sortBy : 'height'] &&
        a[sortBy ? sortBy : 'height']) {
      return -1;
    }

    if (a[sortBy ? sortBy : 'height'] < b[sortBy ? sortBy : 'height'] &&
        a[sortBy ? sortBy : 'height'] &&
        b[sortBy ? sortBy : 'height']) {
      return -1;
    }

    if (a[sortBy ? sortBy : 'height'] > b[sortBy ? sortBy : 'height'] &&
        a[sortBy ? sortBy : 'height'] &&
        b[sortBy ? sortBy : 'height']) {
      return 1;
    }

    return 0;
  });
}

function paginate(items, page, limit) {
  var pageNum = Number(page) || 1;
  var pagesTotal = Math.ceil((Number(items.length) ? Number(items.length) : 0) / limit);
  var currentPage = Number(pageNum) && Number(pageNum) <= pagesTotal && Number(pageNum) > 0 && Number(pageNum) % 1 === 0 ? Number(pageNum) : 1;
  
  if (items.length > limit) {
    items = items.slice(Number(currentPage - 1) * limit, (currentPage * limit));
  }

  return {
    pagesTotal: pagesTotal,
    pageNum: currentPage,
    items: items || []
  };
}

module.exports = {
  fromSats: fromSats,
  sort: sort,
  paginate: paginate
};