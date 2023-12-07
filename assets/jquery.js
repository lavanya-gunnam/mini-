var substringMatcher = function (strs) {
  return function findMatches(query, callback) {
    var matches = [];
    var substrRegex = new RegExp(query, 'i');

    $.each(strs, function (index, str) {
      if (substrRegex.test(str)) {
        matches.push(str);
      }
    });

    callback(matches);
  };
};

var searchOptions = [
  'All brands', 'woomen wear', 'Men wear', 'Beauty', 'lip bams',
  'creams', 'footwear', 'Kids wear', 'Crocks',
  'mosituriser', 'trousers', 'Shirts', 'Night wear'
];

$(document).ready(function () {
  $('#the-basics .typeahead').typeahead({
    hint: true,
    highlight: true,
    minLength: 1
  },
  {
    name: 'search',
    source: substringMatcher(searchOptions),
    templates: {
      suggestion: function (data) {
        return '<div>' + data + '</div>';
      }
    }
  }).on('typeahead:select', function (e, suggestion) {
    // Display selected suggestion in the red box
    $('#search-results').html('<div class="red-box flex-data">' + suggestion + '</div>').removeClass('d-none');
  });
});
