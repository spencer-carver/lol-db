$(document).ready(function() {
	
	var champion_data;
	
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
    $("#addChampToBuild").click(function(e) {
    	//var loaded_val = document.getElementById('info_icon');
    	//var build_val = document.getElementById('build_icon');
    	//build_val.innerHTML = loaded_val.innerHTML;
    	$("#build_icon").html("").append("<img src=\"" + champion_data.mImagePath + "\"></img>");
    	//$('#build_name').html("").append(""+champion_data.mName);
    });
    
    //checks for the button click event
    $("#getChampion").click(function(e){
           
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
                    	 champion_data = data.championInfo;
                         $("#info_icon").html("").append("<img src=\"" + data.championInfo.mImagePath + "\"></img><br/>");
                         $("#info_name").html("").append("<b>Champion Name:</b> " + data.championInfo.mName + "<br/>");
                         $("#info_hp").html("").append("<b>Health:</b> " + data.championInfo.mHealth + "<br/>");
                         $("#info_hp_lv").html("").append("<b>Health Per Level:</b> " + data.championInfo.mHealthPerLevel + "<br/>");
                         $("#info_hp5").html("").append("<b>Health Regen:</b> " + data.championInfo.mHealthRegen + "<br/>");
                         $("#info_hp5_lv").html("").append("<b>Health Regen Per Level:</b> " + data.championInfo.mHealthRegenPerLevel + "<br/>");
                         $("#info_mana").html("").append("<b>Mana:</b> " + data.championInfo.mMana + "<br/>");
                         $("#info_mana_lv").html("").append("<b>Mana Per Level:</b> " + data.championInfo.mManaPerLevel + "<br/>");
                         $("#info_mana5").html("").append("<b>Mana Regen:</b> " + data.championInfo.mManaRegen + "<br/>");
                         $("#info_mana5_lv").html("").append("<b>Mana Regen Per Level:</b> " + data.championInfo.mManaRegenPerLevel + "<br/>");
                         $("#info_damage").html("").append("<b>Damage:</b> " + data.championInfo.mDamage + "<br/>");
                         $("#info_damage_lv").html("").append("<b>Damage Per Level:</b> " + data.championInfo.mDamagePerLevel + "<br/>");
                         $("#info_attackspeed").html("").append("<b>Attack Speed:</b> " + data.championInfo.mAttackSpeed + "<br/>");
                         $("#info_attackspeed_lv").html("").append("<b>Attack Speed Per Level:</b> " + data.championInfo.mAttackSpeedPerLevel + "<br/>");
                         $("#info_armor").html("").append("<b>Armor:</b> " + data.championInfo.mArmor + "<br/>");
                         $("#info_armor_lv").html("").append("<b>Armor Per Level:</b> " + data.championInfo.mArmorPerLevel + "<br/>");
                         $("#info_mr").html("").append("<b>Magic Resist:</b> " + data.championInfo.mMagicResist + "<br/>");
                         $("#info_mr_lv").html("").append("<b>Magic Resist Per Level:</b> " + data.championInfo.mMagicResistPerLevel + "<br/>");
                         $("#info_movespeed").html("").append("<b>Movement Speed:</b> " + data.championInfo.mMoveSpeed + "<br/>");
                         $("#info_range").html("").append("<b>Attack Range:</b> " + data.championInfo.mAttackRange+ "<br/>");
                     } 
                     //display error message
                     else {
                    	 $("#champion_info_pane").html("<div><b>Champion Information could not be found.</b></div>");
                     }
                },
                
                //If there was no resonse from the server
                error: function(jqXHR, textStatus, errorThrown){
                     console.log("Something really bad happened " + textStatus);
                     $("#champion_info_pane").html(jqXHR.responseText);
                },
                
                //capture the request before it was sent to server
                beforeSend: function(jqXHR, settings){
                    //adding some Dummy data to the request
                    settings.data += "&dummyData=whatever";
                    //disable the button until we get the response
                    $('#getChampion').attr("disabled", true);
                },
                
                //this is called after the response or error functions are finsihed
                //so that we can take some action
                complete: function(jqXHR, textStatus){
                    //enable the button 
                    $('#getChampion').attr("disabled", false);
                }
      
            });        
    });
    
  //checks for the button click event
    $("#getItem").click(function(e){
           
            //get the form data and then serialize that
            dataString = $("#get_item_info").serialize();
            
            //get the form data using another method 
            var itemnName = $("#getItem").text(); 
            dataString = "itemName=" + itemName;
            
            //make the AJAX request, dataType is set to json
            //meaning we are expecting JSON data in response from the server
            $.ajax({
                type: "POST",
                url: "ItemInfo",
                data: dataString,
                dataType: "json",
                
                //if received a response from the server
                success: function( data, textStatus, jqXHR) {
                    //our country code was correct so we have some information to display
                     if(data.success){
                         $('#item_info_pane').html(""+data.itemInfo.name);
                     } 
                     //display error message
                     else {
                    	 $("#item_info_pane").html("<b>Item Information could not be found.</b>");
                     }
                },
                
                //If there was no resonse from the server
                error: function(jqXHR, textStatus, errorThrown){
                     console.log("Something really bad happened " + textStatus);
                     $("#item_info_pane").html(jqXHR.responseText);
                },
                
                //capture the request before it was sent to server
                beforeSend: function(jqXHR, settings){
                    //adding some Dummy data to the request
                    settings.data += "&dummyData=whatever";
                    //disable the button until we get the response
                    $('#getItem').attr("disabled", true);
                },
                
                //this is called after the response or error functions are finsihed
                //so that we can take some action
                complete: function(jqXHR, textStatus){
                    //enable the button 
                    $('#getItem').attr("disabled", false);
                }
      
            });        
    });
    
  //checks for the button click event
    $("#addChampToBuild").click(function(e) {
    	//var loaded_val = document.getElementById('info_icon');
    	//var build_val = document.getElementById('build_icon');
    	//build_val.innerHTML = loaded_val.innerHTML;
    	$("#build_icon").html("").append("<img src=\"" + champion_data.mImagePath + "\"></img>");
    	//$('#build_name').html("").append(""+champion_data.mName);
    });
    
    //checks for the button click event
    $("#saveBuild").click(function(e){
           
            //get the form data and then serialize that
            dataString = $("#save_build").serialize();
            
            //get the form data using another method 
            dataString = "championName=" + champion_data.mName;
            
            //make the AJAX request, dataType is set to json
            //meaning we are expecting JSON data in response from the server
            $.ajax({
                type: "POST",
                url: "SaveBuildInfo",
                data: dataString,
                dataType: "json",
                
                //if received a response from the server
                success: function( data, textStatus, jqXHR) {
                    //our country code was correct so we have some information to display
                     if(data.success){
                         $("#buildId").val(""+data.guid);
                     } 
                     //display error message
                     else {
                    	 $("#buildId").val("An error has occurred");
                     }
                },
                
                //If there was no resonse from the server
                error: function(jqXHR, textStatus, errorThrown){
                     console.log("Something really bad happened " + textStatus);
                     $("#buildId").val(jqXHR.responseText);
                },
                
                //capture the request before it was sent to server
                beforeSend: function(jqXHR, settings){
                    //adding some Dummy data to the request
                    settings.data += "&dummyData=whatever";
                    //disable the button until we get the response
                    $('#saveBuild').attr("disabled", true);
                },
                
                //this is called after the response or error functions are finsihed
                //so that we can take some action
                complete: function(jqXHR, textStatus){
                    //enable the button 
                    $('#saveBuild').attr("disabled", false);
                }
      
            });        
    });
});