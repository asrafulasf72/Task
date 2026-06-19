//Google Tag Manager Code
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-0000000');



//page view event setup
 analytics.subscribe("page_viewed", (event) => {
  console.log('custom event', event)
     
window.dataLayer.push({
  event: 'page_view',
  client_id: event.clientId,
  event_id: event.id,
  time_stamp: event.timestamp,
  time_stamp_unix: Math.round(new Date(event.timestamp).getTime() / 1000), 
  page_location: event.context.document.location.href,
  page_path: event.context.document.location.pathname,
  page_hostname: event.context.document.location.hostname,
  fired_from: 'custom_event',
  });  
});

// view item list event setup
analytics.subscribe("collection_viewed", (event) => {
  console.log('custom event', event)

  var currencyToCountry = {
  'USD': 'US', 'EUR': 'NL', 'BDT': 'BD', 'GBP': 'GB', 'CAD': 'CA', 'AUD': 'AU', 'JPY': 'JP',
  'INR': 'IN', 'CNY': 'CN', 'SEK': 'SE', 'NOK': 'NO', 'CHF': 'CH', 'SGD': 'SG', 'BRL': 'BR',
  'ZAR': 'ZA', 'RUB': 'RU', 'AED': 'AE', 'KRW': 'KR', 'MXN': 'MX', 'TRY': 'TR', 'MYR': 'MY',
  'NZD': 'NZ', 'HKD': 'HK', 'DKK': 'DK', 'PLN': 'PL', 'THB': 'TH', 'EGP': 'EG', 'ILS': 'IL',
  'IDR': 'ID', 'CZK': 'CZ', 'HUF': 'HU', 'ARS': 'AR', 'CLP': 'CL', 'PHP': 'PH', 'COP': 'CO',
  'RSD': 'RS', 'QAR': 'QA', 'BHD': 'BH', 'KWD': 'KW', 'OMR': 'OM', 'PKR': 'PK', 'SAR': 'SA'
};

var products = event.data.collection.productVariants;
var itemsArray = [];
var currency = event.data.collection.productVariants[0].price.currencyCode;


for (var i = 0; i < products.length; i++) {
  var item_variant = products[i].id;
  var item_id = products[i].product.id;
  var item_name = products[i].product.title;
  var item_category = products[i].product.type;
  var item_brand = products[i].product.vendor;
  var price = products[i].price.amount;
  var quantity = 1;

  var productObject = {
    item_id: item_id,
    item_variant: item_variant,
    item_name: item_name,
    item_category: item_category,
    item_brand: item_brand,
    item_delivery: 'in_store',
    price: price,
    quantity: quantity
  };

  itemsArray.push(productObject);
}

var quantityFromArray = itemsArray;
var quantityInitialValue = 0;
var totalQuantity = quantityFromArray.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue.quantity;
}, quantityInitialValue);

var priceFromArray = itemsArray;
var priceInitialValue = 0;
var total = priceFromArray.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue.price;
}, priceInitialValue);



// Get the country code based on the currency code
var countryCode = currencyToCountry[currency] || 'US'; // Default to US if the currency is not found

// Generate the dynamic Google Ads Remarketing id
var gadsItems = itemsArray.map(function(product) {
  return {
    id: 'shopify_' + countryCode + '_' + product.item_id + '_' + product.item_variant,
    google_business_vertical: 'retail'
  };
});

// Create arrays and string for content_ids, content_names, and content categories
var contentId = itemsArray.map(function(product) {
  return product.item_id;
}).length === 1 ? itemsArray[0].item_id : itemsArray.map(product => product.item_id);

var contentName = itemsArray.map(function(product) {
  return product.item_name;
}).length === 1 ? itemsArray[0].item_name : itemsArray.map(product => product.item_name);

var uniqueCategories = [...new Set(itemsArray.map(product => product.item_category))];
var contentCategory = uniqueCategories.length === 1 ? uniqueCategories[0] : uniqueCategories.join(', ');

  // Facebook schema data
var fbItems = itemsArray.map(function(product) {
  return {
    id: product.item_id,
    item_price: product.price,
    delivery_category: product.item_delivery,
    quantity: product.quantity || 1
  };
});
  
// Tiktok contents build-up
var tiktokItems = itemsArray.map(function(product) {
  return {
    content_id: product.item_id,
    content_name: product.item_name,
    content_category: product.item_category,
    brand: product.item_brand,
    price: product.price,
    quantity: product.quantity || 1
  };
});

// Pinterest contents array build-up
var pinterestItems = itemsArray.map(function(product) {
  return {
    product_id: product.item_id,
    product_name: product.item_name,
    product_price: product.price,
    product_brand: product.item_brand,
    product_quantity: product.quantity || 1,
    product_category: product.item_category,
  };
})
  

window.dataLayer.push({
  event: 'view_item_list',
  client_id: event.clientId,
  event_id: event.id,
  time_stamp: event.timestamp,
  time_stamp_unix: Math.round(new Date(event.timestamp).getTime() / 1000), 
  page_location: event.context.document.location.href,
  page_path: event.context.document.location.pathname,
  page_hostname: event.context.document.location.hostname,
  fired_from: 'custom_event',
    ecommerce: {
    value: total,
    currency: currency,
    items: itemsArray
  },
  google_ads: {
    remarketing: gadsItems
  },
  facebook: {
    content_type: 'product_group',
    content_ids: contentId,
    content_name: contentName,
    content_category: contentCategory,
    value: total,
    currency: currency,
    num_items: totalQuantity,
    contents: fbItems
  },
  tiktok: {
    content_type: 'product_group',
    content_id: contentId,
    content_name: contentName,
    content_category: contentCategory,
    value: total,
    currency: currency,
    quantity: totalQuantity,
    contents: tiktokItems
  },
  pinterest: {
    product_ids: contentId,
    product_names: contentName,
    value: total,
    product_quantity: totalQuantity,
    product_category: contentCategory,
    line_items: pinterestItems
  },
  snapchat: {
    item_ids: contentId,
    item_category: contentCategory,
    price: total,
    number_items: totalQuantity
  }
  });  
});
