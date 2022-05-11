function save_options() {
  localStorage['bufferActive'] = document.getElementById('buffer').checked;
  localStorage['deliciousActive'] = document.getElementById('delicious').checked;
  localStorage['diggActive'] = document.getElementById('digg').checked;
  localStorage['evernoteActive'] = document.getElementById('evernote').checked;
  localStorage['facebookActive'] = document.getElementById('facebook').checked;
  localStorage['googleplusActive'] = document.getElementById('googleplus').checked;
  localStorage['linkedinActive'] = document.getElementById('linkedin').checked;
  localStorage['pinterestActive'] = document.getElementById('pinterest').checked;
  localStorage['pocketActive'] = document.getElementById('pocket').checked;
  localStorage['redditActive'] = document.getElementById('reddit').checked;
  localStorage['stumbleuponActive'] = document.getElementById('stumbleupon').checked;
  localStorage['tumblrActive'] = document.getElementById('tumblr').checked;
  localStorage['twitterActive'] = document.getElementById('twitter').checked;
    
  var status = document.getElementById('status');
  status.textContent = 'Options saved.';
  setTimeout(function() {
    status.textContent = '';
  }, 750);
}

function restore_options() {
  if (localStorage['bufferActive'] == 'true') {
   document.getElementById('buffer').checked = true;
  }
  if (localStorage['deliciousActive'] == 'true') {
   document.getElementById('delicious').checked = true;
  }
  if (localStorage['diggActive'] == 'true') {
   document.getElementById('digg').checked = true;
  }
  if (localStorage['evernoteActive'] == 'true') {
   document.getElementById('evernote').checked = true;
  }
  if (localStorage['facebookActive'] == 'true') {
   document.getElementById('facebook').checked = true;
  }
  if (localStorage['googleplusActive'] == 'true') {
   document.getElementById('googleplus').checked = true;
  }
  if (localStorage['linkedinActive'] == 'true') {
   document.getElementById('linkedin').checked = true;
  }
  if (localStorage['pinterestActive'] == 'true') {
   document.getElementById('pinterest').checked = true;
  }
  if (localStorage['pocketActive'] == 'true') {
   document.getElementById('pocket').checked = true;
  }
  if (localStorage['redditActive'] == 'true') {
   document.getElementById('reddit').checked = true;
  }
  if (localStorage['stumbleuponActive'] == 'true') {
   document.getElementById('stumbleupon').checked = true;
  }
  if (localStorage['tumblrActive'] == 'true') {
   document.getElementById('tumblr').checked = true;
  }
  if (localStorage['twitterActive'] == 'true') {
   document.getElementById('twitter').checked = true;
  }
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);