var champion_data;
var build_champ;
var item_data;
var item_1;
var item_2;
var item_3;
var item_4;
var item_5;
var item_6;
var build_level = 18;

function update() {
    var health = 0;
    if (build_champ != null) {
    	health += build_champ.mHealth + build_champ.mHealthPerLevel*build_level;
    }
    if (item_1 != null) {
    	if (item_1.health != null) {
        	health += item_1.health;
    	}
    	if (item_1.healthPerLevel != null) {
    		health += item_1.healthPerLevel*build_level;
    	}
    }
    if (item_2 != null) {
    	if (item_2.health != null) {
    		health += item_2.health;
    	}
    	if (item_2.healthPerLevel != null) {
    		health += item_2.healthPerLevel*build_level;
    	}
    }
    if (item_3 != null) {
    	if (item_3.health != null) {
    		health += item_3.health;
    	}
    	if (item_3.healthPerLevel != null) {
    		health += item_3.healthPerLevel*build_level;
    	}
    }
    if (item_4 != null) {
    	if (item_4.health != null) {
    		health += item_4.health;
    	}
    	if (item_4.healthPerLevel != null) {
    		health += item_4.healthPerLevel*build_level;
    	}
    }
    if (item_5 != null) {
    	if (item_5.health != null) {
    		health += item_5.health;
    	}
    	if (item_5.healthPerLevel != null) {
    		health += item_5.healthPerLevel*build_level;
    	}
    }
    if (item_6 != null) {
    	if (item_6.health != null) {
    		health += item_6.health;
    	}
    	if (item_6.healthPerLevel != null) {
    		health += item_6.healthPerLevel*build_level;
    	}
    }
    $("#build_health").html("").append("Health: "+ health);
    var health_regen = 0;
    if (build_champ != null) {
    	health_regen += build_champ.mHealthRegen + build_champ.mHealthRegenPerLevel*build_level;
    }
    if (item_1 != null) {
    	if (item_1.healthRegen != null) {
        	health_regen += item_1.healthRegen;
    	}
    	if (item_1.healthRegenPerLevel != null) {
    		health_regen += item_1.healthRegenPerLevel*build_level;
    	}
    }
    if (item_2 != null) {
    	if (item_2.healthRegen != null) {
        	health_regen += item_2.healthRegen;
    	}
    	if (item_2.healthRegenPerLevel != null) {
    		health_regen += item_2.healthRegenPerLevel*build_level;
    	}
    	if (item_3 != null) {
        	if (item_3.healthRegen != null) {
            	health_regen += item_3.healthRegen;
        	}
        	if (item_3.healthRegenPerLevel != null) {
        		health_regen += item_3.healthRegenPerLevel*build_level;
        	}
        }
    	if (item_4 != null) {
        	if (item_4.healthRegen != null) {
            	health_regen += item_4.healthRegen;
        	}
        	if (item_4.healthRegenPerLevel != null) {
        		health_regen += item_4.healthRegenPerLevel*build_level;
        	}
        }
    	if (item_5 != null) {
        	if (item_5.healthRegen != null) {
            	health_regen += item_5.healthRegen;
        	}
        	if (item_5.healthRegenPerLevel != null) {
        		health_regen += item_5.healthRegenPerLevel*build_level;
        	}
        }
    	if (item_6 != null) {
        	if (item_6.healthRegen != null) {
            	health_regen += item_6.healthRegen;
        	}
        	if (item_6.healthRegenPerLevel != null) {
        		health_regen += item_6.healthRegenPerLevel*build_level;
        	}
        }
    $("#build_health_regen").html("").append("Health Regen (per 5 seconds): "+ health_regen);
    var mana = 0;
    if (build_champ != null) {
    	mana += build_champ.mMana + build_champ.mManaPerLevel*build_level;
    }
    // check resource here eventually
    if (true) {
    	if (item_1 != null) {
    		if (item_1.mana != null) {
    			mana += item_1.mana;
    		}
    		if (item_1.manaPerLevel != null) {
    			mana += item_1.manaPerLevel*build_level;
    		}
    	}
    	if (item_2 != null) {
    		if (item_2.mana != null) {
    			mana += item_2.mana;
    		}
    		if (item_2.manaPerLevel != null) {
    			mana += item_2.manaPerLevel*build_level;
    		}
    	}
    	if (item_3 != null) {
    		if (item_3.mana != null) {
    			mana += item_3.mana;
    		}
    		if (item_3.manaPerLevel != null) {
    			mana += item_3.manaPerLevel*build_level;
    		}
    	}
    	if (item_4 != null) {
    		if (item_4.mana != null) {
    			mana += item_4.mana;
    		}
    		if (item_4.manaPerLevel != null) {
    			mana += item_4.manaPerLevel*build_level;
    		}
    	}
    	if (item_5 != null) {
    		if (item_5.mana != null) {
    			mana += item_5.mana;
    		}
    		if (item_5.manaPerLevel != null) {
    			mana += item_5.manaPerLevel*build_level;
    		}
    	}
    	if (item_6 != null) {
    		if (item_6.mana != null) {
    			mana += item_6.mana;
    		}
    		if (item_6.manaPerLevel != null) {
    			mana += item_6.manaPerLevel*build_level;
    		}
    	}
    	$("#build_mana").html("").append("Mana: "+ mana);
    }
    //TODO other stats here
    var cost = 0;
    // check resource here eventually
    if (item_1 != null && item_1.cost != null) {
    	cost += item_1.cost;
    }
    if (item_2 != null && item_2.cost != null) {
    	cost += item_2.cost;
    }
    if (item_3 != null && item_3.cost != null) {
    	cost += item_3.cost;
    }
    if (item_4 != null && item_4.cost != null) {
    	cost += item_4.cost;
    }
    if (item_5 != null && item_5.cost != null) {
    	cost += item_5.cost;
    }
    if (item_6 != null && item_6.cost != null) {
    	cost += item_6.cost;
    }
    $("#build_cost").html("").append("Build Cost: "+ cost + " Gold");
}

$(document).ready(function() {
	
	// get the form data and then serialize that
    dataString = $("#get_champion_dropdown").serialize();
    
    // make the AJAX request, dataType is set to json
    // meaning we are expecting JSON data in response from the server
    $.ajax({
        type: "POST",
        url: "ChampionNames",
        data: "",
        dataType: "json",
        
        // if received a response from the server
        success: function( data, textStatus, jqXHR) {
            // our country code was correct so we have some information to
			// display
             if(data.success){
                 $("#championDropdown").html("");
                 var temp = "<select id=\"champion_select\">";
                 for (var i = 0; i < 110; i++) {
                	 temp = temp + "<option>" + data.championNames[i] + "</option>";
                 }
                 temp += "</select>";
                 $("#championDropdown").append(temp);
             } 
             // display error message
             else {
                 $("#championDropdown").html("<div><b>An Error has occurred retrieving the list of Champions.</b></div>");
             }
        },
        
        // If there was no resonse from the server
        error: function(jqXHR, textStatus, errorThrown){
             console.log("Something really bad happened " + textStatus);
              $("#championDropdown").html(jqXHR.responseText);
        },
        
        // capture the request before it was sent to server
        beforeSend: function(jqXHR, settings){
            // adding some Dummy data to the request
            settings.data += "&dummyData=whatever";
            // disable the button until we get the response
            $('#myButton').attr("disabled", true);
        },
        
        // this is called after the response or error functions are finsihed
        // so that we can take some action
        complete: function(jqXHR, textStatus){
            // enable the button
            $('#myButton').attr("disabled", false);
        }

    });
 
    // Stops the submit request
    $("#get_champion_info").submit(function(e){
           e.preventDefault();
    });
    
    // checks for the button click event
    $("#addChampToBuild").click(function(e) {
    	// var loaded_val = document.getElementById('info_icon');
    	// var build_val = document.getElementById('build_icon');
    	// build_val.innerHTML = loaded_val.innerHTML;
    	$("#build_icon").html("").append("<img src=\"" + champion_data.mImagePath + "\"></img>");
    	// $('#build_name').html("").append(""+champion_data.mName);
    });
    
    // checks for the button click event
    $("#getChampion").click(function(e){
           
            // get the form data and then serialize that
            dataString = $("#get_champion_info").serialize();
            
            // get the form data using another method
            var championName = $("#champion_select option:selected").text(); 
            dataString = "championName=" + championName;
            
            // make the AJAX request, dataType is set to json
            // meaning we are expecting JSON data in response from the server
            $.ajax({
                type: "POST",
                url: "ChampionInfo",
                data: dataString,
                dataType: "json",
                
                // if received a response from the server
                success: function( data, textStatus, jqXHR) {
                    // our country code was correct so we have some information
					// to display
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
                     // display error message
                     else {
                    	 $("#champion_info_pane").html("<div><b>Champion Information could not be found.</b></div>");
                     }
                },
                
                // If there was no resonse from the server
                error: function(jqXHR, textStatus, errorThrown){
                     console.log("Something really bad happened " + textStatus);
                     $("#champion_info_pane").html(jqXHR.responseText);
                },
                
                // capture the request before it was sent to server
                beforeSend: function(jqXHR, settings){
                    // adding some Dummy data to the request
                    settings.data += "&dummyData=whatever";
                    // disable the button until we get the response
                    $('#getChampion').attr("disabled", true);
                },
                
                // this is called after the response or error functions are
				// finsihed
                // so that we can take some action
                complete: function(jqXHR, textStatus){
                    // enable the button
                    $('#getChampion').attr("disabled", false);
                }
      
            });        
    });
    
    // checks for the button click event
    $("#getItem").click(function(e){
           
            // get the form data and then serialize that
            dataString = $("#get_item_info").serialize();
            
            // get the form data using another method
            var itemName = $("#itemName").val(); 
            dataString = "itemName=" + itemName;
            
            // make the AJAX request, dataType is set to json
            // meaning we are expecting JSON data in response from the server
            $.ajax({
                type: "POST",
                url: "ItemInfo",
                data: dataString,
                dataType: "json",
                
                // if received a response from the server
                success: function( data, textStatus, jqXHR) {
                    // our country code was correct so we have some information
					// to display
                     if(data.success){
                    	 item_data = data.itemInfo;
                         $('#item_info_pane').html("");
                         $('#item_info_pane').append("<img src=\"" + data.itemInfo.imagePath + "\"></img><br/>");
                     } 
                     // display error message
                     else {
                    	 $("#item_info_pane").html("<b>Item Information could not be found.</b>");
                     }
                },
                
                // If there was no resonse from the server
                error: function(jqXHR, textStatus, errorThrown){
                     console.log("Something really bad happened " + textStatus);
                     $("#item_info_pane").html(jqXHR.responseText);
                },
                
                // capture the request before it was sent to server
                beforeSend: function(jqXHR, settings){
                    // adding some Dummy data to the request
                    settings.data += "&dummyData=whatever";
                    // disable the button until we get the response
                    $('#getItem').attr("disabled", true);
                },
                
                // this is called after the response or error functions are
				// finsihed
                // so that we can take some action
                complete: function(jqXHR, textStatus){
                    // enable the button
                    $('#getItem').attr("disabled", false);
                }
      
            });        
    });

    // checks for the button click event
    $("#addChampToBuild").click(function(e) {
    	// var loaded_val = document.getElementById('info_icon');
    	// var build_val = document.getElementById('build_icon');
    	// build_val.innerHTML = loaded_val.innerHTML;
    	build_champ = champion_data;
    	update();
    	$("#build_icon").html("").append("<img src=\"" + build_champ.mImagePath + "\"></img>");
    	// $('#build_name').html("").append(""+champion_data.mName);
    });
    
    // checks for the button click event
    $("#addI1ToBuild").click(function(e) {
      	item_1 = item_data;
      	update();
      	if (item_1.imagePath == null) {
      		$("#build_item_1").html("").append(""+item_1.name);
      	} else {
          	$("#build_item_1").html("").append("<img id=\"item_1_img\" src=\"" +item_1.imagePath + "\"></img>");
          	$("#item_1_img").width(80);
      	}
    });
    
    // checks for the button click event
    $("#addI2ToBuild").click(function(e) {
    	item_2 = item_data;
    	update();
      	if (item_2.imagePath == null) {
      		$("#build_item_2").html("").append(""+item_2.name);
      	} else {
          	$("#build_item_2").html("").append("<img id=\"item_2_img\" src=\"" +item_2.imagePath + "\"></img>");
          	$("#item_2_img").width(80);
      	}
    });
    
    // checks for the button click event
    $("#addI3ToBuild").click(function(e) {
      	item_3 = item_data;
      	update();
      	if (item_3.imagePath == null) {
      		$("#build_item_3").html("").append(""+item_3.name);
      	} else {
      		$("#build_item_3").html("").append("<img id=\"item_3_img\" src=\"" +item_3.imagePath + "\"></img>");
      		$("#item_3_img").width(80);
      	}
    });
    
    // checks for the button click event
    $("#addI4ToBuild").click(function(e) {
    	item_4 = item_data;
    	update();
      	if (item_4.imagePath == null) {
      		$("#build_item_4").html("").append(""+item_4.name);
      	} else {
      		$("#build_item_4").html("").append("<img id=\"item_4_img\" src=\"" +item_4.imagePath + "\"></img>");
      		$("#item_4_img").width(80);
      	}
    });
    
    // checks for the button click event
    $("#addI5ToBuild").click(function(e) {
    	item_5 = item_data;
    	update();
      	if (item_5.imagePath == null) {
      		$("#build_item_5").html("").append(""+item_5.name);
      	} else {
      		$("#build_item_5").html("").append("<img id=\"item_5_img\" src=\"" +item_5.imagePath + "\"></img>");
      		$("#item_5_img").width(80);
      	}
    });
    
    // checks for the button click event
    $("#addI6ToBuild").click(function(e) {
    	item_6 = item_data;
    	update();
      	if (item_6.imagePath == null) {
      		$("#build_item_6").html("").append(""+item_6.name);
      	} else {
      		$("#build_item_6").html("").append("<img id=\"item_6_img\" src=\"" +item_6.imagePath + "\"></img>");
      		$("#item_6_img").width(80);
      	}
    });
    
    // checks for the button click event
    $("#saveBuild").click(function(e){
           
            // get the form data and then serialize that
            dataString = $("#save_build").serialize();
            
            // get the form data using another method
            dataString = "championName=" + champion_data.mName;
            // make the AJAX request, dataType is set to json
            // meaning we are expecting JSON data in response from the server
            $.ajax({
                type: "POST",
                url: "SaveBuildInfo",
                data: "champion=" + JSON.stringify(champion_data),
                dataType: "json",
                
                // if received a response from the server
                success: function( data, textStatus, jqXHR) {
                    // our country code was correct so we have some information
					// to display
                     if(data.success){
                         $("#buildId").val(""+data.guid);
                     } 
                     // display error message
                     else {
                    	 $("#buildId").val("An error has occurred");
                     }
                },
                
                // If there was no resonse from the server
                error: function(jqXHR, textStatus, errorThrown){
                     console.log("Something really bad happened " + textStatus);
                     $("#buildId").val(jqXHR.responseText);
                },
                
                // capture the request before it was sent to server
                beforeSend: function(jqXHR, settings){
                    // adding some Dummy data to the request
                    settings.data += "&dummyData=whatever";
                    // disable the button until we get the response
                    $('#saveBuild').attr("disabled", true);
                },
                
                // this is called after the response or error functions are
				// finsihed
                // so that we can take some action
                complete: function(jqXHR, textStatus){
                    // enable the button
                    $('#saveBuild').attr("disabled", false);
                }
      
            });        
    });
});