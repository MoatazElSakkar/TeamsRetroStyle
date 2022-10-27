var logoIconUrl=chrome.runtime.getURL("/teams_logo_icon.png"); 
var logoUrl=chrome.runtime.getURL("/teams_logo.png"); 
var radius="3px"

var links=document.querySelectorAll('link[rel*="icon"]');
for (i=0;i<links.length;i++)
{
  links[i].href=logoIconUrl;
}

  var styletag = document.createElement("style");
  styletag.innerText+=".teamslogo-anim{background-image:url("+logoUrl+"); background-size: contain;}";
  styletag.innerText+=".scalingsymbol{visibility: collapse; }"
  styletag.innerText+=".ms-Persona-image{border-radius:"+radius+" !important;}";
  styletag.innerText+=".profileimage>.wrapper{border-radius:"+radius+" !important;}";
  styletag.innerText+=".ui-image{border-radius:"+radius+" !important;}";
  styletag.innerText+=".app-chat-header{border-radius:"+radius+" !important;}";
  styletag.innerText+=".profile-img{border-radius:"+radius+" !important;}";
  styletag.innerText+=".ms-Persona-image>img{border-radius:"+radius+" !important;}";
  styletag.innerText+=".profile-img-parent{border-radius:"+radius+" !important;}";
  styletag.innerText+=".ui-image{border-radius:"+radius+" !important;}"
  styletag.innerText+=".wrapper{border-radius:"+radius+" !important;}"
  styletag.innerText+=".ms-Image-image{border-radius:"+radius+" !important;}"
  styletag.innerText+=".circle.inner{visibility: collapse; }"
  styletag.innerText+=".ts-calling-participant-stream{border-radius:"+radius+" !important;}"
  styletag.innerText+=".left-rail-item .img-wrapper{border-radius:"+radius+" !important;}"

  document.getElementsByTagName("head")[0]?.appendChild(styletag);
  document.querySelector('.embedded-electron-webview')?.contentDocument?.getElementsByTagName("head")[0]?.appendChild(styletag);