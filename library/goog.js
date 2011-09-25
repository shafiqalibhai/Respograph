 //<![CDATA[

    function load() 
	{
      if (GBrowserIsCompatible()) 
	  {
        var map = new GMap2(document.getElementById("map"));
        map.setCenter(new GLatLng(17.306025, 78.457017), 15);
		map.setMapType(G_HYBRID_MAP);
		
		// Creates a marker at the given point
    	// Clicking the marker will hide it
    	function createMarker(latlng, number) 
		{
    	  var marker = new GMarker(latlng);
     	 marker.value = number;
     	 GEvent.addListener(marker,"click", function() 
	 	 {
      	  var myHtml = "<p>Aurora&rsquo;s Scientific Technological and Research Academy <br /> Keshavagiri Post, Bandlaguda, Near Chandrayana Gutta, <br /> Hyderabad, Andhra Pradesh - 500 005 <br />Tel : 91-040-2444 0840 <br />Telefax : 91-040-2444 3163";
      	  map.openInfoWindowHtml(latlng, myHtml);
     	 });
      	return marker;
	   }
	
 		// Add marker to the map
    	var latlng = new GLatLng(17.306025, 78.457017);
	  	map.addOverlay(createMarker(latlng,1));

      }
    }
    //]]>