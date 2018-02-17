console.log("linked");
$(".off-on").hover(
  function() {
    $(this)
      .stop(true)
      .animate({ width: "60px" }, 500);
  },
  function() {
    $(this).animate({ width: "10px" }, 500);
  }
);

users = [
  "OgamingSC2",
  "cretetion",
  "freecodecamp",
  "storbeck",
  "habathcx",
  "ESL_SC2",
  "RobotCaleb",
  "noobs2ninjas",
  "TBNRfrags"
];

for (var user in users) {
  let current = users[user];
  console.log(current);
  $.ajax({
    url: "https://wind-bow.glitch.me/twitch-api/streams/" + current, //replace 'streams' with 'channels' to get info for offline channels
    type: "GET",
    success: function(data) {
      console.log(JSON.stringify(data));
      if (data.stream !== null) {
        $(".container").append(`
          <div class='row indiv online'> 
            <div class='col-md-1 emblem'><img class='logo' src='${data.stream.channel.logo}'></div> 
            <div class='col-md-2'> <a target = "_blank" href='${data.stream.channel.url}'>${data.stream.channel.display_name}</a></div> 
            <div class='col-md-9'> <a class="streaming" target = "_blank" href='${data.stream.channel.url}'><p>${data.stream.channel.status}</p></a> </div> 
          </div>`);
      } else {
        $.ajax({
          url: "https://wind-bow.glitch.me/twitch-api/channels/" + current, //replace 'streams' with 'channels' to get info for offline channels
          type: "GET",
          success: function(data2) {
            console.log(data2);
            $(".container").append(`
              <div class='row indiv offline'> 
                  <div class='col-md-1 emblem'><img class='logo' src='${data2.logo}'>  </div> 
                  <div class='col-md-2'> <a target = "_blank" href='${data2.url}'>${data2.display_name}</a></div> 
                  <div class='col-md-9'> <p>Offline</p> </div> 
              </div>`);
          }
        });
      }
    }
  });
}

$("#online").click(
  function() {
    $(".offline").hide();
    $(".online").show();
  });

$("#offline").click(
  function() {
    $(".online").hide();
    $(".offline").show();
  });

$("#all").click(
  function() {
    $(".online").show();
    $(".offline").show();
  });