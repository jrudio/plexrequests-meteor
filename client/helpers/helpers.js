UI.registerHelper('resultsloaded',function(input){
  return Session.get("resultsloaded");
});

UI.registerHelper('searchingresults',function(input){
  return Session.get("searchingresults");
});

UI.registerHelper('noresults',function(input){
  return Session.get("noresults");
});

UI.registerHelper('searcherror',function(input){
  return Session.get("searcherror");
});

UI.registerHelper('requests',function(input){
  return Session.get("requests");
});

UI.registerHelper('movieexists',function(input){
  return Session.get("movieexists");
});

UI.registerHelper('movieadded',function(input){
  return Session.get("movieadded");
});

UI.registerHelper('moviedownloaded',function(input){
  return Session.get("moviedownloaded");
});


UI.registerHelper('plexauthuser',function(input){
    //Return whether they're authorized or not, the admin account is now
    //inserted into the list that is checked so they get their own token set
    return Session.get("plexauthuser");
});