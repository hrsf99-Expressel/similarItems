'use strict';

var faker = require('faker');

var shopsAvalAtArr = ['COSTCO', 'Wallmart', 'Target', 'FRYs Electronics', 'AdoramaCamera'];

var generatePriceFunc = function generatePriceFunc() {
  var a = Math.floor(Math.random() * Math.floor(5000));
  return faker.commerce.price(0.10, a, 2, '$');
};

var generateDeliveryCostFunc = function generateDeliveryCostFunc() {
  return 'Free delivery';
};

var generateRandomDate = function generateRandomDate(start, end) {
  for (var i = 0; i < 100; i++) {
    var dateNew = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return dateNew;
  }
};

var generateDescFunc = function generateDescFunc() {
  return faker.commerce.productName();
};

var generateRatingNum = function generateRatingNum() {
  return Math.floor(Math.random() * Math.floor(1000));
};

var generateShopSelect = function generateShopSelect() {
  var max = shopsAvalAtArr.length;
  var indexNum = Math.floor(Math.random(0) * Math.floor(max));
  return shopsAvalAtArr[indexNum];
};

var imgPathArr = [];
var generateImagePath = function generateImagePath() {
  for (var i = 0; i < 90; i++) {
    var imgVar = '/images/image-' + i + '.jpg';
    imgPathArr.push(imgVar);
  }
  return imgPathArr;
};
// generateImagePath();

var itemList = [{
  id: 0,
  itemId: 1,
  imgPath: 'https://lh3.googleusercontent.com/proxy/xkwF1N8HSj8A5Cn2NNxcSJnQ2rnMB9gFds5Cirf1aEbySWjKSaUCQiRsMbJ4mBjVmZBc1UHnyJjqpopwYkZOkG_zRscc38OrUgVs52-ZTn2LLm5uKF29WMPqJ6SKEgJrf7POIw_rQx8e4KDuh-AAtrsUCSB5DLmaSHrjT1AHD3jsz_65V4g=s180-pd-e365-rw-pc0xffffff',
  price: '$2,349.00',
  deliveryCost: 'FREE delivery',
  dateOfDelivery: '19 days',
  desc: 'Apple MacBook Pro 15.4 - Core 6GB RAM-256 GB SSD- Silver',
  rating: 2129,
  shopsAvalAt: 'AdoramaCamera'
}, {
  id: 1,
  itemId: 1,
  imgPath: imgPathArr[1],
  price: '$2,399.0 ',
  deliveryCost: 'FREE delivery',
  dateOfDelivery: '19 days',
  desc: 'Apple MacBook Pro B- Silver- AMD Radeon Pro 555X',
  rating: 1,
  shopsAvalAt: 'AdoramaCamera'
}, {
  id: 2,
  itemId: 1,
  imgPath: imgPathArr[2],
  price: '$2,799.0 ',
  deliveryCost: 'FREE delivery',
  dateOfDelivery: '19 days',
  desc: 'Apple MacBook Pro with AMD Radeon Pro 555X',
  rating: 1,
  shopsAvalAt: 'AdoramaCamera'
}, {
  id: 3,
  itemId: 1,
  imgPath: imgPathArr[3],
  price: '$2,799.0 ',
  deliveryCost: 'FREE delivery',
  dateOfDelivery: '19 days',
  desc: 'Apple MacBook Pro 13.3"-Core RAM 256 GB SSD- Space Gray',
  rating: 8630,
  shopsAvalAt: 'AdoramaCamera'
}, {
  id: 4,
  itemId: 1,
  imgPath: imgPathArr[4],
  price: '$1,799.0 ',
  deliveryCost: 'FREE delivery',
  dateOfDelivery: '19 days',
  desc: 'Apple MacBook Pro with Touch B-8GB RAM 256 GB SSD-Silver',
  rating: 8630,
  shopsAvalAt: 'AdoramaCamera'
}, {
  id: 5,
  itemId: 1,
  imgPath: imgPathArr[5],
  price: '$1,799.0 ',
  deliveryCost: 'FREE delivery',
  dateOfDelivery: '19 days',
  desc: 'Apple MacBook Pro with Touch B-8GB RAM 256 GB SSD-Silver',
  rating: 8630,
  shopsAvalAt: 'AdoramaCamera'
}];

var populateData = function populateData() {
  for (var i = 6; i < 200; i++) {
    var item = {
      id: i,
      itemId: Math.ceil(i / 5),
      imgPath: imgPathArr[i],
      price: generatePriceFunc(),
      deliveryCost: generateDeliveryCostFunc(),
      dateOfDelivery: generateRandomDate(new Date(2012, 0, 1), new Date()),
      desc: generateDescFunc(),
      rating: generateRatingNum(),
      shopsAvalAt: generateShopSelect()
    };
    itemList.push(item);
  }
  return itemList;
};
// populateData();

module.exports.itemList = itemList;
module.exports.populateData = populateData;
module.exports.generateImagePath = generateImagePath;
//paths for mac book
//https://lh3.googleusercontent.com/proxy/3CBN6gHFXGzywV_aE7PTR_ybV4wT0stv_zf2kFyGCuYEs9kVNnamDw-zfCEOXFnXZHl-lsJcmEcWfBJU1vghilh7uzSeqvRnFOf8CJ3oiea8cxpWLM-z47szzQm8jkwVyFcXWtNnYmrCAeneXj8yLujxwRdS3ywmffYZdQ-pIwGvFEZHcw=s180-pd-e365-rw-pc0xffffff
//https://lh3.googleusercontent.com/proxy/xkwF1N8HSj8A5Cn2NNxcSJnQ2rnMB9gFds5Cirf1aEbySWjKSaUCQiRsMbJ4mBjVmZBc1UHnyJjqpopwYkZOkG_zRscc38OrUgVs52-ZTn2LLm5uKF29WMPqJ6SKEgJrf7POIw_rQx8e4KDuh-AAtrsUCSB5DLmaSHrjT1AHD3jsz_65V4g=s180-pd-e365-rw-pc0xffffff
//https://lh3.googleusercontent.com/proxy/xkwF1N8HSj8A5Cn2NNxcSJnQ2rnMB9gFds5Cirf1aEbySWjKSaUCQiRsMbJ4mBjVmZBc1UHnyJjqpopwYkZOkG_zRscc38OrUgVs52-ZTn2LLm5uKF29WMPqJ6SKEgJrf7POIw_rQx8e4KDuh-AAtrsUCSB5DLmaSHrjT1AHD3jsz_65V4g=s180-pd-e365-rw-pc0xffffff
//https://lh3.googleusercontent.com/proxy/unfvzely7bh00Qax4Ne1RyC-Aax-FB5cDFW8E2Hgz18w6roJNv136JyLqKbJZS-nRrTMCXtsgwxEM1XH7YLuxf3rsl2_R7P75qRM7HyaJsUmefNS_bgvy4oog7Tkj44ZT0vDy8B2pZ5FX6qtC3Les-hBtKwBLGo7bBpljt8gr8JbB_fltA6p4g-xDGv_B0HLqC4VzXKa9EJhdPbvfXq3=s180-pd-e365-rw-pc0xffffff
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NlZWQuanMiXSwibmFtZXMiOlsiZmFrZXIiLCJyZXF1aXJlIiwic2hvcHNBdmFsQXRBcnIiLCJnZW5lcmF0ZVByaWNlRnVuYyIsImEiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJjb21tZXJjZSIsInByaWNlIiwiZ2VuZXJhdGVEZWxpdmVyeUNvc3RGdW5jIiwiZ2VuZXJhdGVSYW5kb21EYXRlIiwic3RhcnQiLCJlbmQiLCJpIiwiZGF0ZU5ldyIsIkRhdGUiLCJnZXRUaW1lIiwiZ2VuZXJhdGVEZXNjRnVuYyIsInByb2R1Y3ROYW1lIiwiZ2VuZXJhdGVSYXRpbmdOdW0iLCJnZW5lcmF0ZVNob3BTZWxlY3QiLCJtYXgiLCJsZW5ndGgiLCJpbmRleE51bSIsImltZ1BhdGhBcnIiLCJnZW5lcmF0ZUltYWdlUGF0aCIsImltZ1ZhciIsInB1c2giLCJpdGVtTGlzdCIsImlkIiwiaXRlbUlkIiwiaW1nUGF0aCIsImRlbGl2ZXJ5Q29zdCIsImRhdGVPZkRlbGl2ZXJ5IiwiZGVzYyIsInJhdGluZyIsInNob3BzQXZhbEF0IiwicG9wdWxhdGVEYXRhIiwiaXRlbSIsImNlaWwiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLFFBQVFDLFFBQVEsT0FBUixDQUFkOztBQUVBLElBQU1DLGlCQUFpQixDQUFDLFFBQUQsRUFBVyxVQUFYLEVBQXVCLFFBQXZCLEVBQWlDLGtCQUFqQyxFQUFxRCxlQUFyRCxDQUF2Qjs7QUFFQSxJQUFNQyxvQkFBb0IsU0FBcEJBLGlCQUFvQixHQUFNO0FBQzlCLE1BQU1DLElBQUlDLEtBQUtDLEtBQUwsQ0FBV0QsS0FBS0UsTUFBTCxLQUFnQkYsS0FBS0MsS0FBTCxDQUFXLElBQVgsQ0FBM0IsQ0FBVjtBQUNBLFNBQU9OLE1BQU1RLFFBQU4sQ0FBZUMsS0FBZixDQUFxQixJQUFyQixFQUEyQkwsQ0FBM0IsRUFBOEIsQ0FBOUIsRUFBaUMsR0FBakMsQ0FBUDtBQUNELENBSEQ7O0FBS0EsSUFBTU0sMkJB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ZmFrZXIgPSByZXF1aXJlKCdmYWtlcicpO1xuXG5jb25zdCBzaG9wc0F2YWxBdEFyciA9IFsnQ09TVENPJywgJ1dhbGxtYXJ0JywgJ1RhcmdldCcsICdGUllzIEVsZWN0cm9uaWNzJywgJ0Fkb3JhbWFDYW1lcmEnXTtcblxuY29uc3QgZ2VuZXJhdGVQcmljZUZ1bmMgPSAoKSA9PiB7XG4gIGNvbnN0IGEgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKDUwMDApKTtcbiAgcmV0dXJuIGZha2VyLmNvbW1lcmNlLnByaWNlKDAuMTAsIGEsIDIsICckJyk7XG59O1xuXG5jb25zdCBnZW5lcmF0ZURlbGl2ZXJ5Q29zdEZ1bmMgPSAoKSA9PiB7XG4gIHJldHVybiAnRnJlZSBkZWxpdmVyeSc7XG59O1xuXG5jb25zdCBnZW5lcmF0ZVJhbmRvbURhdGUgPSAoc3RhcnQsIGVuZCkgPT4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XG4gICAgY29uc3QgZGF0ZU5ldyA9IG5ldyBEYXRlKHN0YXJ0LmdldFRpbWUoKSArIE1hdGgucmFuZG9tKCkgKiAoZW5kLmdldFRpbWUoKSAtIHN0YXJ0LmdldFRpbWUoKSkpO1xuICAgIHJldHVybiBkYXRlTmV3O1xuICB9XG59O1xuXG5jb25zdCBnZW5lcmF0ZURlc2NGdW5jID0gKCkgPT4ge1xuICByZXR1cm4gKGZha2VyLmNvbW1lcmNlLnByb2R1Y3ROYW1lKCkpO1xufTtcblxuY29uc3QgZ2VuZXJhdGVSYXRpbmdOdW0gPSAoKSA9PiB7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKDEwMDApKTtcbn07XG5cbmNvbnN0IGdlbmVyYXRlU2hvcFNlbGVjdCA9ICgpID0+IHtcbiAgY29uc3QgbWF4ID0gc2hvcHNBdmFsQXRBcnIubGVuZ3RoO1xuICBjb25zdCBpbmRleE51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oMCkgKiBNYXRoLmZsb29yKG1heCkpO1xuICByZXR1cm4gc2hvcHNBdmFsQXRBcnJbaW5kZXhOdW1dO1xufTtcblxuY29uc3QgaW1nUGF0aEFyciA9IFtdO1xuY29uc3QgZ2VuZXJhdGVJbWFnZVBhdGggPSAoKSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgOTA7IGkrKykge1xuICAgIGNvbnN0IGltZ1ZhciA9IGAvaW1hZ2VzL2ltYWdlLSR7aX0uanBnYDtcbiAgICBpbWdQYXRoQXJyLnB1c2goaW1nVmFyKTtcbiAgfVxuICByZXR1cm4gaW1nUGF0aEFycjtcbn07XG4vLyBnZW5lcmF0ZUltYWdlUGF0aCgpO1xuXG5sZXQgaXRlbUxpc3QgPSBbXG4gIHtcbiAgICBpZDogMCxcbiAgICBpdGVtSWQ6IDEsXG4gICAgaW1nUGF0aDogJ2h0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9wcm94eS94a3dGMU44SFNqOEE1Q24yTk54Y1NKblEycm5NQjlnRmRzNUNpcmYxYUVieVNXaktTYVVDUWlSc01iSjRtQmpWbVpCYzFVSG55SmpxcG9wd1lrWk9rR196UnNjYzM4T3JVZ1ZzNTItWlRuMkxMbTV1S0YyOVdNUHFKNlNLRWdKcmY3UE9Jd19yUXg4ZTRLRHVoLUFBdHJzVUNTQjVETG1hU0hyalQxQUhEM2pzel82NVY0Zz1zMTgwLXBkLWUzNjUtcnctcGMweGZmZmZmZicsXG4gICAgcHJpY2U6ICckMiwzNDkuMDAnLFxuICAgIGRlbGl2ZXJ5Q29zdDogJ0ZSRUUgZGVsaXZlcnknLFxuICAgIGRhdGVPZkRlbGl2ZXJ5OiAnMTkgZGF5cycsXG4gICAgZGVzYzogJ0FwcGxlIE1hY0Jvb2sgUHJvIDE1LjQgLSBDb3JlIDZHQiBSQU0tMjU2IEdCIFNTRC0gU2lsdmVyJyxcbiAgICByYXRpbmc6IDIxMjksXG4gICAgc2hvcHNBdmFsQXQ6ICdBZG9yYW1hQ2FtZXJhJyxcbiAgfSxcbiAge1xuICAgIGlkOiAxLFxuICAgIGl0ZW1JZDogMSxcbiAgICBpbWdQYXRoOiBpbWdQYXRoQXJyWzFdLFxuICAgIHByaWNlOiAnJDIsMzk5LjAgJyxcbiAgICBkZWxpdmVyeUNvc3Q6ICdGUkVFIGRlbGl2ZXJ5JyxcbiAgICBkYXRlT2ZEZWxpdmVyeTogJzE5IGRheXMnLFxuICAgIGRlc2M6ICdBcHBsZSBNYWNCb29rIFBybyBCLSBTaWx2ZXItIEFNRCBSYWRlb24gUHJvIDU1NVgnLFxuICAgIHJhdGluZzogMSxcbiAgICBzaG9wc0F2YWxBdDogJ0Fkb3JhbWFDYW1lcmEnLFxuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgaXRlbUlkOiAxLFxuICAgIGltZ1BhdGg6IGltZ1BhdGhBcnJbMl0sXG4gICAgcHJpY2U6ICckMiw3OTkuMCAnLFxuICAgIGRlbGl2ZXJ5Q29zdDogJ0ZSRUUgZGVsaXZlcnknLFxuICAgIGRhdGVPZkRlbGl2ZXJ5OiAnMTkgZGF5cycsXG4gICAgZGVzYzogJ0FwcGxlIE1hY0Jvb2sgUHJvIHdpdGggQU1EIFJhZGVvbiBQcm8gNTU1WCcsXG4gICAgcmF0aW5nOiAxLFxuICAgIHNob3BzQXZhbEF0OiAnQWRvcmFtYUNhbWVyYScsXG4gIH0sXG4gIHtcbiAgICBpZDogMyxcbiAgICBpdGVtSWQ6IDEsXG4gICAgaW1nUGF0aDogaW1nUGF0aEFyclszXSxcbiAgICBwcmljZTogJyQyLDc5OS4wICcsXG4gICAgZGVsaXZlcnlDb3N0OiAnRlJFRSBkZWxpdmVyeScsXG4gICAgZGF0ZU9mRGVsaXZlcnk6ICcxOSBkYXlzJyxcbiAgICBkZXNjOiAnQXBwbGUgTWFjQm9vayBQcm8gMTMuM1wiLUNvcmUgUkFNIDI1NiBHQiBTU0QtIFNwYWNlIEdyYXknLFxuICAgIHJhdGluZzogODYzMCxcbiAgICBzaG9wc0F2YWxBdDogJ0Fkb3JhbWFDYW1lcmEnLFxuICB9LFxuICB7XG4gICAgaWQ6IDQsXG4gICAgaXRlbUlkOiAxLFxuICAgIGltZ1BhdGg6IGltZ1BhdGhBcnJbNF0sXG4gICAgcHJpY2U6ICckMSw3OTkuMCAnLFxuICAgIGRlbGl2ZXJ5Q29zdDogJ0ZSRUUgZGVsaXZlcnknLFxuICAgIGRhdGVPZkRlbGl2ZXJ5OiAnMTkgZGF5cycsXG4gICAgZGVzYzogJ0FwcGxlIE1hY0Jvb2sgUHJvIHdpdGggVG91Y2ggQi04R0IgUkFNIDI1NiBHQiBTU0QtU2lsdmVyJyxcbiAgICByYXRpbmc6IDg2MzAsXG4gICAgc2hvcHNBdmFsQXQ6ICdBZG9yYW1hQ2FtZXJhJyxcbiAgfSxcbiAge1xuICAgIGlkOiA1LFxuICAgIGl0ZW1JZDogMSxcbiAgICBpbWdQYXRoOiBpbWdQYXRoQXJyWzVdLFxuICAgIHByaWNlOiAnJDEsNzk5LjAgJyxcbiAgICBkZWxpdmVyeUNvc3Q6ICdGUkVFIGRlbGl2ZXJ5JyxcbiAgICBkYXRlT2ZEZWxpdmVyeTogJzE5IGRheXMnLFxuICAgIGRlc2M6ICdBcHBsZSBNYWNCb29rIFBybyB3aXRoIFRvdWNoIEItOEdCIFJBTSAyNTYgR0IgU1NELVNpbHZlcicsXG4gICAgcmF0aW5nOiA4NjMwLFxuICAgIHNob3BzQXZhbEF0OiAnQWRvcmFtYUNhbWVyYScsXG4gIH0sXG5dO1xuXG5jb25zdCBwb3B1bGF0ZURhdGEgPSAoKSA9PiB7XG4gIGZvciAobGV0IGkgPSA2OyBpIDwgMjAwOyBpKyspIHtcbiAgICBjb25zdCBpdGVtID0ge1xuICAgICAgaWQ6IGksXG4gICAgICBpdGVtSWQ6IE1hdGguY2VpbChpLzUpLFxuICAgICAgaW1nUGF0aDogaW1nUGF0aEFycltpXSxcbiAgICAgIHByaWNlOiBnZW5lcmF0ZVByaWNlRnVuYygpLFxuICAgICAgZGVsaXZlcnlDb3N0OiBnZW5lcmF0ZURlbGl2ZXJ5Q29zdEZ1bmMoKSxcbiAgICAgIGRhdGVPZkRlbGl2ZXJ5OiBnZW5lcmF0ZVJhbmRvbURhdGUobmV3IERhdGUoMjAxMiwgMCwgMSksIG5ldyBEYXRlKCkpLFxuICAgICAgZGVzYzogZ2VuZXJhdGVEZXNjRnVuYygpLFxuICAgICAgcmF0aW5nOiBnZW5lcmF0ZVJhdGluZ051bSgpLFxuICAgICAgc2hvcHNBdmFsQXQ6IGdlbmVyYXRlU2hvcFNlbGVjdCgpLFxuICAgIH07XG4gICAgaXRlbUxpc3QucHVzaChpdGVtKTtcbiAgfVxuICByZXR1cm4gaXRlbUxpc3Q7XG59O1xuLy8gcG9wdWxhdGVEYXRhKCk7XG5cbm1vZHVsZS5leHBvcnRzLml0ZW1MaXN0ID0gaXRlbUxpc3Q7XG5tb2R1bGUuZXhwb3J0cy5wb3B1bGF0ZURhdGEgPSBwb3B1bGF0ZURhdGE7XG5tb2R1bGUuZXhwb3J0cy5nZW5lcmF0ZUltYWdlUGF0aCA9IGdlbmVyYXRlSW1hZ2VQYXRoO1xuLy9wYXRocyBmb3IgbWFjIGJvb2tcbi8vaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL3Byb3h5LzNDQk42Z0hGWEd6eXdWX2FFN1BUUl95YlY0d1Qwc3R2X3pmMmtGeUdDdVlFczlrVk5uYW1Edy16ZkNFT1hGblhaSGwtbHNKY21FY1dmQkpVMXZnaGlsaDd1elNlcXZSbkZPZjhDSjNvaWVhOGN4cFdMTS16NDdzenpRbThqa3dWeUZjWFd0Tm5ZbXJDQWVuZVhqOHlMdWp4d1JkUzN5d21mZllaZFEtcEl3R3ZGRVpIY3c9czE4MC1wZC1lMzY1LXJ3LXBjMHhmZmZmZmZcbi8vaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL3Byb3h5L3hrd0YxTjhIU2o4QTVDbjJOTnhjU0puUTJybk1COWdGZHM1Q2lyZjFhRWJ5U1dqS1NhVUNRaVJzTWJKNG1CalZtWkJjMVVIbnlKanFwb3B3WWtaT2tHX3pSc2NjMzhPclVnVnM1Mi1aVG4yTExtNXVLRjI5V01QcUo2U0tFZ0pyZjdQT0l3X3JReDhlNEtEdWgtQUF0cnNVQ1NCNURMbWFTSHJqVDFBSEQzanN6XzY1VjRnPXMxODAtcGQtZTM2NS1ydy1wYzB4ZmZmZmZmXG4vL2h0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9wcm94eS94a3dGMU44SFNqOEE1Q24yTk54Y1NKblEycm5NQjlnRmRzNUNpcmYxYUVieVNXaktTYVVDUWlSc01iSjRtQmpWbVpCYzFVSG55SmpxcG9wd1lrWk9rR196UnNjYzM4T3JVZ1ZzNTItWlRuMkxMbTV1S0YyOVdNUHFKNlNLRWdKcmY3UE9Jd19yUXg4ZTRLRHVoLUFBdHJzVUNTQjVETG1hU0hyalQxQUhEM2pzel82NVY0Zz1zMTgwLXBkLWUzNjUtcnctcGMweGZmZmZmZlxuLy9odHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vcHJveHkvdW5mdnplbHk3YmgwMFFheDROZTFSeUMtQWF4LUZCNWNERlc4RTJIZ3oxOHc2cm9KTnYxMzZKeUxxS2JKWlMtblJyVE1DWHRzZ3d4RU0xWEg3WUx1eGYzcnNsMl9SN1A3NXFSTTdIeWFKc1VtZWZOU19iZ3Z5NG9vZzdUa2o0NFpUMHZEeThCMnBaNUZYNnF0QzNMZXMtaEJ0S3dCTEdvN2JCcGxqdDhncjhKYkJfZmx0QTZwNGcteERHdl9CMEhMcUM0VnpYS2E5RUpoZFBidmZYcTM9czE4MC1wZC1lMzY1LXJ3LXBjMHhmZmZmZmYiXX0=