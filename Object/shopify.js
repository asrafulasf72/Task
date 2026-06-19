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
 
});
