chrome.tabs.query({
 active: true,
 windowId: chrome.windows.WINDOW_ID_CURRENT
},

function(array_of_Tabs) {
 var tab = array_of_Tabs[0];
 var taburl = tab.url;
 var title = tab.title;
 var imgurl = 15;
 
 if (localStorage["bufferActive"] == "false") {
  document.getElementById('buffer').style.display = "none";
 }
 if (localStorage["deliciousActive"] == "false") {
  document.getElementById('delicious').style.display = "none";
 }
 if (localStorage["diggActive"] == "false") {
  document.getElementById('digg').style.display = "none";
 }
 if (localStorage["evernoteActive"] == "false") {
  document.getElementById('evernote').style.display = "none";
 }
 if (localStorage["facebookActive"] == "false") {
  document.getElementById('facebook').style.display = "none";
 }
 if (localStorage["googleplusActive"] == "false") {
  document.getElementById('googleplus').style.display = "none";
 }
 if (localStorage["linkedinActive"] == "false") {
  document.getElementById('linkedin').style.display = "none";
 }
 if (localStorage["pinterestActive"] == "false") {
  document.getElementById('pinterest').style.display = "none";
 }
 if (localStorage["pocketActive"] == "false") {
  document.getElementById('pocket').style.display = "none";
 }
 if (localStorage["redditActive"] == "false") {
  document.getElementById('reddit').style.display = "none";
 }
 if (localStorage["stumbleuponActive"] == "false") {
  document.getElementById('stumbleupon').style.display = "none";
 }
 if (localStorage["tumblrActive"] == "false") {
  document.getElementById('tumblr').style.display = "none";
 }
 if (localStorage["twitterActive"] == "false") {
  document.getElementById('twitter').style.display = "none";
 }
 
 document.getElementById('buffer-link').href="http://bufferapp.com/add?text=" + title + "&url=" + taburl;
 document.getElementById('delicious-link').href="https://delicious.com/save?v=5&noui&jump=close&url=" + taburl + "&title=" + title;
 document.getElementById('digg-link').href="http://digg.com/submit?url=" + taburl + "&title=" + title;
 document.getElementById('evernote-link').href="http://s.evernote.com/grclip?url=" + taburl + "&title=" + title;
 document.getElementById('facebook-link').href="https://www.facebook.com/sharer/sharer.php?u=" + taburl + "&t=" + title;
 document.getElementById('googleplus-link').href="https://plus.google.com/share?url=" + taburl;
 document.getElementById('linkedin-link').href="http://www.linkedin.com/shareArticle?mini=true&title=" + title + "&url=" + taburl + "&summary=" + title;
 document.getElementById('pinterest-link').href="http://pinterest.com/pin/create/button/?url=" + taburl + "&description=" + title + "&media=" + imgurl;
 document.getElementById('pocket-link').href="https://getpocket.com/edit?url=" + taburl + "&title=" + title;
 document.getElementById('reddit-link').href="http://reddit.com/submit?url=" + taburl + "&title=" + title;
 document.getElementById('stumbleupon-link').href="https://www.stumbleupon.com/submit?url=" + taburl;
 document.getElementById('tumblr-link').href="http://www.tumblr.com/share/link?url=" + taburl + "&name=" + title + "&description=";
 document.getElementById('twitter-link').href="http://twitter.com/home/?status=" + title + " on " +taburl;
});