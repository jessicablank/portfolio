function copyToClipboard(text, el) {
    let copyTest = document.queryCommandSupported('copy');
    let elOriginalText = el.attr('data-original-title');
  
    if (copyTest === true) {
      let copyTextArea = document.createElement("textarea");
      copyTextArea.value = text;
      document.body.appendChild(copyTextArea);
      copyTextArea.select();
      try {
        let successful = document.execCommand('copy');
        let msg = successful ? 'Copied!' : 'Whoops, not copied!';
        el.attr('data-original-title', msg).tooltip('show');
      } catch (err) {
        console.log('Oops, unable to copy');
      }
      document.body.removeChild(copyTextArea);
      el.attr('data-original-title', elOriginalText);
    } else {
      // Fallback if browser doesn't support .execCommand('copy')
      window.prompt("Copy to clipboard: Ctrl+C or Command+C, Enter", text);
    }
  }
   
//Activate tool tips
$(document).ready(function(){
    $('.js-tooltip').tooltip();
  
    // Copy to clipboard
    // Grab any text in the attribute 'data-copy' and pass it to the 
    // copy function
    $('.js-copy').click(function() {
      let text = $(this).attr('data-copy');
      let el = $(this);
      copyToClipboard(text, el);
    });
  });
  
  //Support Sticky Nav: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_navbar_sticky
  window.onscroll = function() {myFunction()};

let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky-nav")
  } else {
    navbar.classList.remove("sticky-nav");
  }
}