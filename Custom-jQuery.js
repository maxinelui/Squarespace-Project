//Custom jQuery Code
<script src="https://code.jquery.com/jquery-3.4.1.js"></script>
<script>
  //Grab Thumbnail Image and Insert As Hero/Banner Image
  $(function() {
  $('meta[property="og:image"]').attr('content', 			$('meta[property="og:image"]').attr('content').replace( 'http', 'https')); 
    const image = $('meta[property="og:image"]').attr('content');

    let banner = '<div class="blog-banner"><img class="blog-banner-image" src="'+image+'"><div class="blog-banner-content"></div></div>';

    if (image.length > 0){
      $(banner).insertAfter( "header#header" );
      $('article section:first-of-type').css('padding-top','0px');
      $('.blog-item-top-wrapper').prependTo( ".blog-banner-content" );
      $('.blog-item-author-date-wrapper').prependTo( ".blog-item-inner-wrapper" );
    }    
  });
  
    //Redirect Marketing Toolkit to Overview
  $(document).ready(function () {
   $("#topNav .main-nav > ul > li.folder-collection.folder.active-link.active-folder > a, #topNav .main-nav > ul > li.folder-collection.folder > a")[0].onclick = null;
    $("#topNav .main-nav > ul > li.folder-collection.folder.active-link.active-folder > a, #topNav .main-nav > ul > li.folder-collection.folder > a").attr("href", "/overview");
  });
  
  //Redirect Brand
  $(document).ready(function () {
    $("#collection-5ed52fb11bd9736e7a4c962f .summary-metadata-item a[href]").attr("href", "/brand");
  });
  //Redirect PR & Comms
  $(document).ready(function () {
    $("#collection-5ed53270e18f3d3682b42dfd .summary-metadata-item a[href]").attr("href", "/pr-communications");
  });
  //Redirect Growth
  $(document).ready(function () {
    $("#collection-5ed5345b1bd9736e7a4d7c23 .summary-metadata-item a[href]").attr("href", "/growth");
  });
  //Redirect Management
  $(document).ready(function () {
    $("#collection-5ed535491d7235656812b876 .summary-metadata-item a[href]").attr("href", "/management");
  });
  //Redirect Thought Leadership
  $(document).ready(function () {
    $("#block-yui_3_17_2_1_1600103983534_4389 .summary-metadata-item a[href]").attr("href", "/thought-leadership");
  });
</script>
