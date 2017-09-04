/* 
* Scroll to the top
*/

$(window).bind("scroll",display);
function display () {
    if($(document).scrollTop()>300) {
        //$("#top").show();
		$("#top").fadeIn(300);
    }else {
        //$("#top").hide();
		$("#top").fadeOut(300);
    }
}

/* 
* Tab of posts
*/
$(document).ready(function () {
	var tabContainer = $(".posts-tabs");
	if (tabContainer.length) {
		$(".tab-three").bind("click", showTabthree);
		$(".tab-two").bind("click", showTabTwo);
		$(".tab-one").bind("click", showTabOne);
	}
	function showTabOne () {
		$(".tab-one").addClass("active");
		$(".tab-one-list").removeClass("tab-hidden");	
		$(".page-holder-one").removeClass("tab-hidden");			
		$(".tab-two").removeClass("active");
		$(".tab-two-list").addClass("tab-hidden");
		$(".page-holder-two").addClass("tab-hidden");
		$(".tab-three").removeClass("active");
		$(".tab-three-list").addClass("tab-hidden");
		$(".page-holder-three").addClass("tab-hidden");				
	}
	function showTabTwo () {
		$(".tab-two").addClass("active");
		$(".tab-two-list").removeClass("tab-hidden");	
		$(".page-holder-two").removeClass("tab-hidden");			
		$(".tab-one").removeClass("active");
		$(".tab-one-list").addClass("tab-hidden");
		$(".page-holder-one").addClass("tab-hidden");
		$(".tab-three").removeClass("active");
		$(".tab-three-list").addClass("tab-hidden");
		$(".page-holder-three").addClass("tab-hidden");			
	}
	function showTabthree () {
		$(".tab-three").addClass("active");
		$(".tab-three-list").removeClass("tab-hidden");
		$(".page-holder-three").removeClass("tab-hidden");
		$(".tab-one").removeClass("active");
		$(".tab-one-list").addClass("tab-hidden");
		$(".page-holder-one").addClass("tab-hidden");		
		$(".tab-two").removeClass("active");		
		$(".tab-two-list").addClass("tab-hidden");
		$(".page-holder-two").addClass("tab-hidden");		
	}	
})

/*
 * Pagination
 */
$(function(){
  /* initiate the plugin */
  $("div.page-holder-one").jPages({
      containerID  : "pag-itemContainer-one",
      previous: "«",
      next: "»",
      perPage      : 5,  /* num of items per page */
      startPage    : 1,
      startRange   : 1,
      midRange     : 4,
      endRange     : 1,
      direction    : "auto"
  });
  $("div.page-holder-two").jPages({
      containerID  : "pag-itemContainer-two",
      previous: "«",
      next: "»",
      perPage      : 5,  /* num of items per page */
      startPage    : 1,
      startRange   : 1,
      midRange     : 4,
      endRange     : 1,
      direction    : "auto"
  });
  $("div.page-holder-three").jPages({
      containerID  : "pag-itemContainer-three",
      previous: "«",
      next: "»",
      perPage      : 5,  /* num of items per page */
      startPage    : 1,
      startRange   : 1,
      midRange     : 4,
      endRange     : 1,
      direction    : "auto"
  });  
});
