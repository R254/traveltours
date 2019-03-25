// Sidenav
const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav, {});

// Slider
const slider = document.querySelector('.slider');
M.Slider.init(slider, {
	indicators:false,
	height:500,
	transition:500,
	interval:3600
});

// Autocomplete
const ac = document.querySelector('.autocomplete');
M.Autocomplete.init(ac, {
      data: {
           "Kenya": null,
            "Uganda": null,
            "Tz": null,
            "Rwanda": null,
            "Dubai": null,
            "South Africa": null,
      }
});

// Material Boxed... Gallary zoom feature
const mb = document.querySelectorAll('.materialboxed');
M.Materialbox.init(mb, {});  

// Scrollspy
const ss = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(ss, {});

// Date Picker
const dp = document.querySelectorAll('.datepicker');
M.Datepicker.init(dp, {});
