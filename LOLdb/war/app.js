$(document).ready(function() {
	
	//get the form data and then serialize that
    dataString = $("#get_champion_dropdown").serialize();
    
    //make the AJAX request, dataType is set to json
    //meaning we are expecting JSON data in response from the server
    $.ajax({
        type: "POST",
        url: "ChampionNames",
        data: "",
        dataType: "json",
        
        //if received a response from the server
        success: function( data, textStatus, jqXHR) {
            //our country code was correct so we have some information to display
             if(data.success){
                 $("#championDropdown").html("");
                 var temp = "<select id=\"champion_select\">";
                 for (var i = 0; i < 110; i++) {
                	 temp = temp + "<option>" + data.championNames[i] + "</option>";
                 }
                 temp += "</select>";
                 $("#championDropdown").append(temp);
             } 
             //display error message
             else {
                 $("#championDropdown").html("<div><b>An Error has occurred retrieving the list of Champions.</b></div>");
             }
        },
        
        //If there was no resonse from the server
        error: function(jqXHR, textStatus, errorThrown){
             console.log("Something really bad happened " + textStatus);
              $("#championDropdown").html(jqXHR.responseText);
        },
        
        //capture the request before it was sent to server
        beforeSend: function(jqXHR, settings){
            //adding some Dummy data to the request
            settings.data += "&dummyData=whatever";
            //disable the button until we get the response
            $('#myButton').attr("disabled", true);
        },
        
        //this is called after the response or error functions are finsihed
        //so that we can take some action
        complete: function(jqXHR, textStatus){
            //enable the button 
            $('#myButton').attr("disabled", false);
        }

    });
 
    //Stops the submit request
    $("#get_champion_info").submit(function(e){
           e.preventDefault();
    });
    
    //checks for the button click event
    $("#addToBuild").click(function(e) {
    	$("#champion_icon").html("");
    	$("#champion_icon").append("image load");
    });
    
    //checks for the button click event
    $("#myButton").click(function(e){
           
            //get the form data and then serialize that
            dataString = $("#get_champion_info").serialize();
            
            //get the form data using another method 
            var championName = $("#champion_select option:selected").text(); 
            dataString = "championName=" + championName;
            
            //make the AJAX request, dataType is set to json
            //meaning we are expecting JSON data in response from the server
            $.ajax({
                type: "POST",
                url: "ChampionInfo",
                data: dataString,
                dataType: "json",
                
                //if received a response from the server
                success: function( data, textStatus, jqXHR) {
                    //our country code was correct so we have some information to display
                     if(data.success){
                         $("#info_pane").html("");
                         $("#info_pane").append("<img src=\"" + data.championInfo.mImagePath + "\"></img><br/>");
                         $("#info_pane").append("<b>Champion Name:</b> " + data.championInfo.mName + "<br/>");
                         $("#info_pane").append("<b>Health:</b> " + data.championInfo.mHealth + "<br/>");
                         $("#info_pane").append("<b>Health Per Level:</b> " + data.championInfo.mHealthPerLevel + "<br/>");
                         $("#info_pane").append("<b>Health Regen:</b> " + data.championInfo.mHealthRegen + "<br/>");
                         $("#info_pane").append("<b>Health Regen Per Level:</b> " + data.championInfo.mHealthRegenPerLevel + "<br/>");
                         $("#info_pane").append("<b>Mana:</b> " + data.championInfo.mMana + "<br/>");
                         $("#info_pane").append("<b>Mana Per Level:</b> " + data.championInfo.mManaPerLevel + "<br/>");
                         $("#info_pane").append("<b>Mana Regen:</b> " + data.championInfo.mManaRegen + "<br/>");
                         $("#info_pane").append("<b>Mana Regen Per Level:</b> " + data.championInfo.mManaRegenPerLevel + "<br/>");
                         $("#info_pane").append("<b>Damage:</b> " + data.championInfo.mDamage + "<br/>");
                         $("#info_pane").append("<b>Damage Per Level:</b> " + data.championInfo.mDamagePerLevel + "<br/>");
                         $("#info_pane").append("<b>Attack Speed:</b> " + data.championInfo.mAttackSpeed + "<br/>");
                         $("#info_pane").append("<b>Attack Speed Per Level:</b> " + data.championInfo.mAttackSpeedPerLevel + "<br/>");
                         $("#info_pane").append("<b>Armor:</b> " + data.championInfo.mArmor + "<br/>");
                         $("#info_pane").append("<b>Armor Per Level:</b> " + data.championInfo.mArmorPerLevel + "<br/>");
                         $("#info_pane").append("<b>Magic Resist:</b> " + data.championInfo.mMagicResist + "<br/>");
                         $("#info_pane").append("<b>Magic Resist Per Level:</b> " + data.championInfo.mMagicResistPerLevel + "<br/>");
                         $("#info_pane").append("<b>Movement Speed:</b> " + data.championInfo.mMoveSpeed + "<br/>");
                         $("#info_pane").append("<b>Attack Range:</b> " + data.championInfo.mAttackRange+ "<br/>");
                     } 
                     //display error message
                     else {
                    	 $("#info_pane").html("<div><b>Champion Information could not be found.</b></div>");
                     }
                },
                
                //If there was no resonse from the server
                error: function(jqXHR, textStatus, errorThrown){
                     console.log("Something really bad happened " + textStatus);
                     $("#info_pane").html(jqXHR.responseText);
                },
                
                //capture the request before it was sent to server
                beforeSend: function(jqXHR, settings){
                    //adding some Dummy data to the request
                    settings.data += "&dummyData=whatever";
                    //disable the button until we get the response
                    $('#myButton').attr("disabled", true);
                },
                
                //this is called after the response or error functions are finsihed
                //so that we can take some action
                complete: function(jqXHR, textStatus){
                    //enable the button 
                    $('#myButton').attr("disabled", false);
                }
      
            });        
    });
});