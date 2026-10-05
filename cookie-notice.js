(function(){try{if(localStorage.getItem("rh_cookie_notice")==="1")return;}catch(e){}
var d=document.createElement("div");d.setAttribute("role","region");d.setAttribute("aria-label","Cookie notice");
d.style.cssText="position:fixed;left:12px;right:12px;bottom:12px;max-width:640px;margin:0 auto;background:#121a29;color:#e6ebf3;border:1px solid #243149;border-radius:12px;padding:14px 16px;font:14px/1.5 system-ui,sans-serif;z-index:3000;box-shadow:0 8px 30px rgba(0,0,0,.4)";
d.innerHTML='This site uses cookies, including cookies from Google to show and measure ads. Read the <a href="cookies.html" style="color:#8cc4ff">cookie policy</a> and <a href="privacy-policy.html" style="color:#8cc4ff">privacy policy</a> to see your choices. <button type="button" style="margin-left:8px;background:#4fd1a1;color:#04130d;border:0;border-radius:8px;padding:6px 14px;font-weight:700;cursor:pointer">OK</button>';
d.querySelector("button").onclick=function(){try{localStorage.setItem("rh_cookie_notice","1")}catch(e){}d.remove()};
document.addEventListener("DOMContentLoaded",function(){document.body.appendChild(d)});if(document.readyState!=="loading")document.body.appendChild(d);})();
