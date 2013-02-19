empty_item={mID:0,name:"Placeholder",health:0,healthPerLevel:0,healthRegen:0,healthRegenPerLevel:0,mana:0,manaPerLevel:0,manaRegen:0,manaRegenPerLevel:0,
		damage:0,damagePerLevel:0,attackSpeed:0,attackSpeedPerLevel:0,armor:0,armorPerLevel:0,magicResist:0,magicResistPerLevel:0,moveSpeed:0,
		moveSpeedMultiplier:1,abilityPower:0,abilityPowerPerLevel:0,cost:0,
		imagePath:"http://s.momento.com.au/uploads/images/2012/New%20Consumer%20Pages%202012/Covers_Classic_Grey_80px.jpg"};

empty_champ={mID:0,mName:"Placeholder",
		mImagePath:"http://images1.wikia.nocookie.net/__cb20120730015739/leagueoflegends/images/thumb/9/95/ChampionSquare.png/120px-ChampionSquare.png",
		mHealth:0,mHealthPerLevel:0,mHealthRegen:0,mHealthRegenPerLevel:0,mResourceType:0,mMana:0,mManaPerLevel:0,mManaRegen:0,mManaRegenPerLevel:0,
		mDamage:0,mDamagePerLevel:0,mAttackSpeed:0,mAttackSpeedPerLevel:0,mArmor:0,mArmorPerLevel:0,mMagicResist:0,mMagicResistPerLevel:0,mMoveSpeed:0,
		mAttackRange:0};
var champion_data;
var build_champ = empty_champ;
var item_data;
var item_1 = empty_item;
var item_2 = empty_item;
var item_3 = empty_item;
var item_4 = empty_item;
var item_5 = empty_item;
var item_6 = empty_item;
var build_level = 18;

function update() {
	updateImages();
	updateStats();
}

function updateImages() {
    $("#build_icon").html("").append("<img src=\"" + build_champ.mImagePath + "\"></img>");
	if (item_1.imagePath == null) {
        $("#build_item_1").html("").append("" + item_1.name);
    } else {
        $("#build_item_1").html("").append("<img id=\"item_1_img\" src=\"" + item_1.imagePath + "\"></img>");
        $("#item_1_img").width(80);
    }
    if (item_2.imagePath == null) {
        $("#build_item_2").html("").append("" + item_2.name);
    } else {
        $("#build_item_2").html("").append("<img id=\"item_2_img\" src=\"" + item_2.imagePath + "\"></img>");
        $("#item_2_img").width(80);
    }
    if (item_3.imagePath == null) {
        $("#build_item_3").html("").append("" + item_3.name);
    } else {
        $("#build_item_3").html("").append("<img id=\"item_3_img\" src=\"" + item_3.imagePath + "\"></img>");
        $("#item_3_img").width(80);
    }
    if (item_4.imagePath == null) {
        $("#build_item_4").html("").append("" + item_4.name);
    } else {
        $("#build_item_4").html("").append("<img id=\"item_4_img\" src=\"" + item_4.imagePath + "\"></img>");
        $("#item_4_img").width(80);
    }
    if (item_5.imagePath == null) {
        $("#build_item_5").html("").append("" + item_5.name);
    } else {
        $("#build_item_5").html("").append("<img id=\"item_5_img\" src=\"" + item_5.imagePath + "\"></img>");
        $("#item_5_img").width(80);
    }
    if (item_6.imagePath == null) {
        $("#build_item_6").html("").append("" + item_6.name);
    } else {
        $("#build_item_6").html("").append("<img id=\"item_6_img\" src=\"" + item_6.imagePath + "\"></img>");
        $("#item_6_img").width(80);
    }
}

function updateStats() {
    var health = 0;
    if (build_champ != null) {
        health += build_champ.mHealth + build_champ.mHealthPerLevel * build_level;
    }
    if (item_1 != null) {
        if (item_1.health != null) {
            health += item_1.health;
        }
        if (item_1.healthPerLevel != null) {
            health += item_1.healthPerLevel * build_level;
        }
    }
    if (item_2 != null) {
        if (item_2.health != null) {
            health += item_2.health;
        }
        if (item_2.healthPerLevel != null) {
            health += item_2.healthPerLevel * build_level;
        }
    }
    if (item_3 != null) {
        if (item_3.health != null) {
            health += item_3.health;
        }
        if (item_3.healthPerLevel != null) {
            health += item_3.healthPerLevel * build_level;
        }
    }
    if (item_4 != null) {
        if (item_4.health != null) {
            health += item_4.health;
        }
        if (item_4.healthPerLevel != null) {
            health += item_4.healthPerLevel * build_level;
        }
    }
    if (item_5 != null) {
        if (item_5.health != null) {
            health += item_5.health;
        }
        if (item_5.healthPerLevel != null) {
            health += item_5.healthPerLevel * build_level;
        }
    }
    if (item_6 != null) {
        if (item_6.health != null) {
            health += item_6.health;
        }
        if (item_6.healthPerLevel != null) {
            health += item_6.healthPerLevel * build_level;
        }
    }
    $("#build_health").html("").append("Health: " + health);
    var health_regen = 0;
    if (build_champ != null) {
        health_regen += build_champ.mHealthRegen + build_champ.mHealthRegenPerLevel * build_level;
    }
    if (item_1 != null) {
        if (item_1.healthRegen != null) {
            health_regen += item_1.healthRegen;
        }
        if (item_1.healthRegenPerLevel != null) {
            health_regen += item_1.healthRegenPerLevel * build_level;
        }
    }
    if (item_2 != null) {
        if (item_2.healthRegen != null) {
            health_regen += item_2.healthRegen;
        }
        if (item_2.healthRegenPerLevel != null) {
            health_regen += item_2.healthRegenPerLevel * build_level;
        }
    }
    if (item_3 != null) {
        if (item_3.healthRegen != null) {
            health_regen += item_3.healthRegen;
        }
        if (item_3.healthRegenPerLevel != null) {
            health_regen += item_3.healthRegenPerLevel * build_level;
        }
    }
    if (item_4 != null) {
        if (item_4.healthRegen != null) {
            health_regen += item_4.healthRegen;
        }
        if (item_4.healthRegenPerLevel != null) {
            health_regen += item_4.healthRegenPerLevel * build_level;
        }
    }
    if (item_5 != null) {
        if (item_5.healthRegen != null) {
            health_regen += item_5.healthRegen;
        }
        if (item_5.healthRegenPerLevel != null) {
            health_regen += item_5.healthRegenPerLevel * build_level;
        }
    }
    if (item_6 != null) {
        if (item_6.healthRegen != null) {
            health_regen += item_6.healthRegen;
        }
        if (item_6.healthRegenPerLevel != null) {
            health_regen += item_6.healthRegenPerLevel * build_level;
        }
    }
    $("#build_health_regen").html("").append("Health Regen (per 5 seconds): " + health_regen);
    var mana = 0;
    var mana_regen = 0;
    if (build_champ != null) {
        mana += build_champ.mMana + build_champ.mManaPerLevel * build_level;
        mana_regen += build_champ.mManaRegen + build_champ.mManaRegenPerLevel * build_level;
    }
    // check resource here eventually
    if (build_champ.mResourceType == 1) {
        if (item_1 != null) {
            if (item_1.mana != null) {
                mana += item_1.mana;
                mana_regen += item_1.manaRegen;
            }
            if (item_1.manaPerLevel != null) {
                mana += item_1.manaPerLevel * build_level;
                mana_regen += item_1.manaRegenPerLevel * build_level;
            }
        }
        if (item_2 != null) {
            if (item_2.mana != null) {
                mana += item_2.mana;
                mana_regen += item_2.manaRegen;
            }
            if (item_2.manaPerLevel != null) {
                mana += item_2.manaPerLevel * build_level;
                mana_regen += item_2.manaRegenPerLevel * build_level;
            }
        }
        if (item_3 != null) {
            if (item_3.mana != null) {
                mana += item_3.mana;
                mana_regen += item_3.manaRegen;
            }
            if (item_3.manaPerLevel != null) {
                mana += item_3.manaPerLevel * build_level;
                mana_regen += item_3.manaRegenPerLevel * build_level;
            }
        }
        if (item_4 != null) {
            if (item_4.mana != null) {
                mana += item_4.mana;
                mana_regen += item_4.manaRegen;
            }
            if (item_4.manaPerLevel != null) {
                mana += item_4.manaPerLevel * build_level;
                mana_regen += item_4.manaRegenPerLevel * build_level;
            }
        }
        if (item_5 != null) {
            if (item_5.mana != null) {
                mana += item_5.mana;
                mana_regen += item_5.manaRegen;
            }
            if (item_5.manaPerLevel != null) {
                mana += item_5.manaPerLevel * build_level;
                mana_regen += item_5.manaRegenPerLevel * build_level;
            }
        }
        if (item_6 != null) {
            if (item_6.mana != null) {
                mana += item_6.mana;
                mana_regen += item_6.manaRegen;
            }
            if (item_6.manaPerLevel != null) {
                mana += item_6.manaPerLevel * build_level;
                mana_regen += item_6.manaRegenPerLevel * build_level;
            }
        }
        $("#build_mana").html("").append("Mana: " + mana);
        $("#build_mana_regen").html("").append("Mana Regen (per 5 seconds): " + mana_regen);
    } else {
    	if (build_champ.mResourceType == 3) { // Energy
    		$("#build_mana").html("").append("Energy: " + mana);
    		$("#build_mana_regen").html("").append("Energy Regen (per 5 seconds): " + mana_regen);
    	} else {
    		$("#build_mana").html("");
    		$("#build_mana_regen").html("");
    	}
    }
    // TODO other stats here
    var damage = 0;
    if (build_champ != null) {
        damage += build_champ.mDamage + build_champ.mDamagePerLevel * build_level;
    }
    if (item_1 != null) {
        if (item_1.damage != null) {
            damage += item_1.damage;
        }
        if (item_1.damagePerLevel != null) {
            damage += item_1.damagePerLevel * build_level;
        }
    }
    if (item_2 != null) {
        if (item_2.damage != null) {
            damage += item_2.damage;
        }
        if (item_2.damagePerLevel != null) {
            damage += item_2.damagePerLevel * build_level;
        }
    }
    if (item_3 != null) {
        if (item_3.damage != null) {
            damage += item_3.damage;
        }
        if (item_3.damagePerLevel != null) {
            damage += item_3.damagePerLevel * build_level;
        }
    }
    if (item_4 != null) {
        if (item_4.damage != null) {
            damage += item_4.damage;
        }
        if (item_4.damagePerLevel != null) {
            damage += item_4.damagePerLevel * build_level;
        }
    }
    if (item_5 != null) {
        if (item_5.damage != null) {
            damage += item_5.damage;
        }
        if (item_5.damagePerLevel != null) {
            damage += item_5.damagePerLevel * build_level;
        }
    }
    if (item_6 != null) {
        if (item_6.damage != null) {
            damage += item_6.damage;
        }
        if (item_6.damagePerLevel != null) {
            damage += item_6.damagePerLevel * build_level;
        }
    }
    $("#build_damage").html("").append("Attack Damage: " + damage);
    var abilityPower = 0;
    if (item_1 != null) {
        if (item_1.abilityPower != null) {
            abilityPower += item_1.abilityPower;
        }
        if (item_1.abilityPowerPerLevel != null) {
            abilityPower += item_1.abilityPowerPerLevel * build_level;
        }
    }
    if (item_2 != null) {
        if (item_2.abilityPower != null) {
            abilityPower += item_2.abilityPower;
        }
        if (item_2.abilityPowerPerLevel != null) {
            abilityPower += item_2.abilityPowerPerLevel * build_level;
        }
    }
    if (item_3 != null) {
        if (item_3.abilityPower != null) {
            abilityPower += item_3.abilityPower;
        }
        if (item_3.abilityPowerPerLevel != null) {
            abilityPower += item_3.abilityPowerPerLevel * build_level;
        }
    }
    if (item_4 != null) {
        if (item_4.abilityPower != null) {
            abilityPower += item_4.abilityPower;
        }
        if (item_4.abilityPowerPerLevel != null) {
            abilityPower += item_4.abilityPowerPerLevel * build_level;
        }
    }
    if (item_5 != null) {
        if (item_5.abilityPower != null) {
            abilityPower += item_5.abilityPower;
        }
        if (item_5.abilityPowerPerLevel != null) {
            abilityPower += item_5.abilityPowerPerLevel * build_level;
        }
    }
    if (item_6 != null) {
        if (item_6.abilityPower != null) {
            abilityPower += item_6.abilityPower;
        }
        if (item_6.abilityPowerPerLevel != null) {
            abilityPower += item_6.abilityPowerPerLevel * build_level;
        }
    }
    $("#build_ability_power").html("").append("Ability Power: " + abilityPower);
    var armor = 0;
    if (build_champ != null) {
        armor += build_champ.mArmor + build_champ.mArmorPerLevel * build_level;
    }
    if (item_1 != null) {
        if (item_1.armor != null) {
            armor += item_1.armor;
        }
        if (item_1.armorPerLevel != null) {
            armor += item_1.armorPerLevel * build_level;
        }
    }
    if (item_2 != null) {
        if (item_2.armor != null) {
            armor += item_2.armor;
        }
        if (item_2.armorPerLevel != null) {
            armor += item_2.armorPerLevel * build_level;
        }
    }
    if (item_3 != null) {
        if (item_3.armor != null) {
            armor += item_3.armor;
        }
        if (item_3.armorPerLevel != null) {
            armor += item_3.armorPerLevel * build_level;
        }
    }
    if (item_4 != null) {
        if (item_4.armor != null) {
            armor += item_4.armor;
        }
        if (item_4.armorPerLevel != null) {
            armor += item_4.armorPerLevel * build_level;
        }
    }
    if (item_5 != null) {
        if (item_5.armor != null) {
            armor += item_5.armor;
        }
        if (item_5.armorPerLevel != null) {
            armor += item_5.armorPerLevel * build_level;
        }
    }
    if (item_6 != null) {
        if (item_6.armor != null) {
            armor += item_6.armor;
        }
        if (item_6.armorPerLevel != null) {
            armor += item_6.armorPerLevel * build_level;
        }
    }
    $("#build_armor").html("").append("Armor: " + armor);
    var magicResist = 0;
    if (build_champ != null) {
        magicResist += build_champ.mMagicResist + build_champ.mMagicResistPerLevel * build_level;
    }
    if (item_1 != null) {
        if (item_1.magicResist != null) {
            magicResist += item_1.magicResist;
        }
        if (item_1.magicResistPerLevel != null) {
            magicResist += item_1.magicResistPerLevel * build_level;
        }
    }
    if (item_2 != null) {
        if (item_2.magicResist != null) {
            magicResist += item_2.magicResist;
        }
        if (item_2.magicResistPerLevel != null) {
            magicResist += item_2.magicResistPerLevel * build_level;
        }
    }
    if (item_3 != null) {
        if (item_3.magicResist != null) {
            magicResist += item_3.magicResist;
        }
        if (item_3.magicResistPerLevel != null) {
            magicResist += item_3.magicResistPerLevel * build_level;
        }
    }
    if (item_4 != null) {
        if (item_4.magicResist != null) {
            magicResist += item_4.magicResist;
        }
        if (item_4.magicResistPerLevel != null) {
            magicResist += item_4.magicResistPerLevel * build_level;
        }
    }
    if (item_5 != null) {
        if (item_5.magicResist != null) {
            magicResist += item_5.magicResist;
        }
        if (item_5.magicResistPerLevel != null) {
            magicResist += item_5.magicResistPerLevel * build_level;
        }
    }
    if (item_6 != null) {
        if (item_6.magicResist != null) {
            magicResist += item_6.magicResist;
        }
        if (item_6.magicResistPerLevel != null) {
            magicResist += item_6.magicResistPerLevel * build_level;
        }
    }
    $("#build_magic_resist").html("").append("Magic Resistance: " + magicResist);
    var attackSpeed = 0;
    if (build_champ != null) {
        attackSpeed += build_champ.mAttackSpeed + build_champ.mAttackSpeedPerLevel * build_level;
    }
    if (item_1 != null) {
        if (item_1.attackSpeed != null) {
            attackSpeed += item_1.attackSpeed;
        }
        if (item_1.attackSpeedPerLevel != null) {
            attackSpeed += item_1.attackSpeedPerLevel * build_level;
        }
    }
    if (item_2 != null) {
        if (item_2.attackSpeed != null) {
            attackSpeed += item_2.attackSpeed;
        }
        if (item_2.attackSpeedPerLevel != null) {
            attackSpeed += item_2.attackSpeedPerLevel * build_level;
        }
    }
    if (item_3 != null) {
        if (item_3.attackSpeed != null) {
            attackSpeed += item_3.attackSpeed;
        }
        if (item_3.attackSpeedPerLevel != null) {
            attackSpeed += item_3.attackSpeedPerLevel * build_level;
        }
    }
    if (item_4 != null) {
        if (item_4.attackSpeed != null) {
            attackSpeed += item_4.attackSpeed;
        }
        if (item_4.attackSpeedPerLevel != null) {
            attackSpeed += item_4.attackSpeedPerLevel * build_level;
        }
    }
    if (item_5 != null) {
        if (item_5.attackSpeed != null) {
            attackSpeed += item_5.attackSpeed;
        }
        if (item_5.attackSpeedPerLevel != null) {
            attackSpeed += item_5.attackSpeedPerLevel * build_level;
        }
    }
    if (item_6 != null) {
        if (item_6.attackSpeed != null) {
            attackSpeed += item_6.attackSpeed;
        }
        if (item_6.attackSpeedPerLevel != null) {
            attackSpeed += item_6.attackSpeedPerLevel * build_level;
        }
    }
    $("#build_attack_speed").html("").append("Attack Speed: " + attackSpeed);
    var moveSpeed = 0;
    if (build_champ != null) {
        moveSpeed += build_champ.mMoveSpeed;
    }
    if (item_1 != null) {
        if (item_1.moveSpeed != null) {
            moveSpeed += item_1.moveSpeed;
        }
        if (item_1.moveSpeedPerLevel != null) {
            moveSpeed += item_1.moveSpeedPerLevel * build_level;
        }
    }
    if (item_2 != null) {
        if (item_2.moveSpeed != null) {
            moveSpeed += item_2.moveSpeed;
        }
        if (item_2.moveSpeedPerLevel != null) {
            moveSpeed += item_2.moveSpeedPerLevel * build_level;
        }
    }
    if (item_3 != null) {
        if (item_3.moveSpeed != null) {
            moveSpeed += item_3.moveSpeed;
        }
        if (item_3.moveSpeedPerLevel != null) {
            moveSpeed += item_3.moveSpeedPerLevel * build_level;
        }
    }
    if (item_4 != null) {
        if (item_4.moveSpeed != null) {
            moveSpeed += item_4.moveSpeed;
        }
        if (item_4.moveSpeedPerLevel != null) {
            moveSpeed += item_4.moveSpeedPerLevel * build_level;
        }
    }
    if (item_5 != null) {
        if (item_5.moveSpeed != null) {
            moveSpeed += item_5.moveSpeed;
        }
        if (item_5.moveSpeedPerLevel != null) {
            moveSpeed += item_5.moveSpeedPerLevel * build_level;
        }
    }
    if (item_6 != null) {
        if (item_6.moveSpeed != null) {
            moveSpeed += item_6.moveSpeed;
        }
        if (item_6.moveSpeedPerLevel != null) {
            moveSpeed += item_6.moveSpeedPerLevel * build_level;
        }
    }
    $("#build_movement_speed").html("").append("Movement Speed: " + moveSpeed);
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
    $("#build_cost").html("").append("Build Cost: " + cost + " Gold");
}

$(document).ready(function () {

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
        success: function (data, textStatus, jqXHR) {
            // our country code was correct so we have some information to
            // display
            if (data.success) {
                $("#championDropdown").html("");
                var temp = "<select id=\"champion_select\">";
                for (var i = 0; i < data.championNames.length; i++) {
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
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("Something really bad happened " + textStatus);
            $("#championDropdown").html(jqXHR.responseText);
        },

        // capture the request before it was sent to server
        beforeSend: function (jqXHR, settings) {
            // adding some Dummy data to the request
            settings.data += "&dummyData=whatever";
            // disable the button until we get the response
            $('#getChampion').attr("disabled", true);
        },

        // this is called after the response or error functions are finsihed
        // so that we can take some action
        complete: function (jqXHR, textStatus) {
            // enable the button
            $('#getChampion').attr("disabled", false);
        }

    });
    
    $.ajax({
        type: "POST",
        url: "ItemNames",
        data: "",
        dataType: "json",

        // if received a response from the server
        success: function (data, textStatus, jqXHR) {
            // our country code was correct so we have some information to
            // display
            if (data.success) {
                $("#itemDropdown").html("");
                var temp = "<select id=\"item_select\">";
                for (var i = 0; i < data.itemNames.length; i++) {
                    temp = temp + "<option>" + data.itemNames[i] + "</option>";
                }
                temp += "</select>";
                $("#itemDropdown").append(temp);
            }
            // display error message
            else {
                $("#itemDropdown").html("<div><b>An Error has occurred retrieving the list of Items.</b></div>");
            }
        },

        // If there was no resonse from the server
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("Something really bad happened " + textStatus);
            $("#itemDropdown").html(jqXHR.responseText);
        },

        // capture the request before it was sent to server
        beforeSend: function (jqXHR, settings) {
            // adding some Dummy data to the request
            settings.data += "&dummyData=whatever";
            // disable the button until we get the response
            $('#getItem').attr("disabled", true);
        },

        // this is called after the response or error functions are finsihed
        // so that we can take some action
        complete: function (jqXHR, textStatus) {
            // enable the button
            $('#getItem').attr("disabled", false);
        }

    });

    // Stops the submit request
    $("#get_champion_info").submit(function (e) {
        e.preventDefault();
    });

    // checks for the button click event
    $("#getChampion").click(function (e) {

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
            success: function (data, textStatus, jqXHR) {
                // our country code was correct so we have some information
                // to display
                if (data.success) {
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
                    $("#info_range").html("").append("<b>Attack Range:</b> " + data.championInfo.mAttackRange + "<br/>");
                }
                // display error message
                else {
                    $("#champion_info_pane").html("<div><b>Champion Information could not be found.</b></div>");
                }
            },

            // If there was no resonse from the server
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("Something really bad happened " + textStatus);
                $("#champion_info_pane").html(jqXHR.responseText);
            },

            // capture the request before it was sent to server
            beforeSend: function (jqXHR, settings) {
                // adding some Dummy data to the request
                settings.data += "&dummyData=whatever";
                // disable the button until we get the response
                $('#getChampion').attr("disabled", true);
            },

            // this is called after the response or error functions are
            // finsihed
            // so that we can take some action
            complete: function (jqXHR, textStatus) {
                // enable the button
                $('#getChampion').attr("disabled", false);
            }

        });
    });

    // checks for the button click event
    $("#getItem").click(function (e) {

        // get the form data and then serialize that
        dataString = $("#get_item_info").serialize();

        // get the form data using another method
        var itemName = $("#item_select option:selected").text();
        dataString = "itemName=" + itemName;

        // make the AJAX request, dataType is set to json
        // meaning we are expecting JSON data in response from the server
        $.ajax({
            type: "POST",
            url: "ItemInfo",
            data: dataString,
            dataType: "json",

            // if received a response from the server
            success: function (data, textStatus, jqXHR) {
                // our country code was correct so we have some information
                // to display
                if (data.success) {
                    item_data = data.itemInfo;
                    $('#item_info_pane').html("");
                    $('#item_info_pane').append("<img src=\"" + data.itemInfo.imagePath + "\"></img><br/>");
                    $('#item_info_pane').append("<b>Cost:</b> " + data.itemInfo.cost + "<br/>");
                    if (data.itemInfo.abilityPower != 0) {
                    	$('#item_info_pane').append("<b>Ability Power:</b> " + data.itemInfo.abilityPower + "<br/>");
                    }
//                    if (data.itemInfo.armorPenetration != 0) {
//                    	$('#item_info_pane').append("Armor Penetration: " + data.itemInfo.armorPenetration);
//                    }
                    if (data.itemInfo.damage != 0) {
                    	$('#item_info_pane').append("<b>Attack Damage:</b> " + data.itemInfo.damage + "<br/>");
                    }
                    if (data.itemInfo.attackSpeed != 0) {
                    	$('#item_info_pane').append("<b>Attack Speed:</b> " + data.itemInfo.attackSpeed + "<br/>");
                    }
//                    if (data.itemInfo.cooldownReduction != 0) {
//                    	$('#item_info_pane').append("Cooldown Reduction: " + data.itemInfo.cooldownReduction);
//                    }
//                    if (data.itemInfo.criticalChance != 0) {
//                    	$('#item_info_pane').append("Critical Chance: " + data.itemInfo.criticalChance);
//                    }
//                    if (data.itemInfo.criticalDamage != 0) {
//                    	$('#item_info_pane').append("Critical Damage: " + data.itemInfo.criticalDamage);
//                    }
//                    if (data.itemInfo.energy != 0) {
//                    	$('#item_info_pane').append("Energy: " + data.itemInfo.energy);
//                    }
//                    if (data.itemInfo.energyRegeneration != 0) {
//                    	$('#item_info_pane').append("Energy Regeneration (per 5 seconds): " + data.itemInfo.energyRegeneration);
//                    }
//                    if (data.itemInfo.experienceGained != 0) {
//                    	$('#item_info_pane').append("Experience Gained: " + data.itemInfo.experienceGained);
//                    }
//                    if (data.itemInfo.goldGeneration != 0) {
//                    	$('#item_info_pane').append("Gold Generation (per 5 seconds): " + data.itemInfo.goldGeneration);
//                    }
                    if (data.itemInfo.health != 0) {
                    	$('#item_info_pane').append("<b>Health:</b> " + data.itemInfo.health + "<br/>");
                    }
                    if (data.itemInfo.healthRegen != 0) {
                    	$('#item_info_pane').append("<b>Health Regeneration (per 5 seconds):</b> " + data.itemInfo.healthRegen + "<br/>");
                    }
//                    if (data.itemInfo.hybridPenetration != 0) {
//                    	$('#item_info_pane').append("Hybrid Penetration: " + data.itemInfo.hybridPenetration);
//                    }
//                    if (data.itemInfo.lifesteal != 0) {
//                    	$('#item_info_pane').append("Lifesteal: " + data.itemInfo.lifesteal);
//                    }
//                    if (data.itemInfo.magicPenetration != 0) {
//                    	$('#item_info_pane').append("Magic Penetration: " + data.itemInfo.magicPenetration);
//                    }
                    if (data.itemInfo.magicResist != 0) {
                    	$('#item_info_pane').append("<b>Magic Resist:</b> " + data.itemInfo.magicResist + "<br/>");
                    }
                    if (data.itemInfo.mana != 0) {
                    	$('#item_info_pane').append("<b>Mana:</b> " + data.itemInfo.mana + "<br/>");
                    }
                    if (data.itemInfo.manaRegen != 0) {
                    	$('#item_info_pane').append("<b>Mana Regeneration (per 5 seconds):</b> " + data.itemInfo.manaRegen + "<br/>");
                    }
                    if (data.itemInfo.moveSpeedMultiplier != 1) {
                    	$('#item_info_pane').append("<b>Movement Speed Bonus:</b> " + data.itemInfo.moveSpeedMultiplier + "<br/>");
                    }
//                    if (data.itemInfo.percentHealth != 0) {
//                    	$('#item_info_pane').append("Percent Health: " + data.itemInfo.percent Health);
//                    }
//                    if (data.itemInfo.timeDead != 0) {
//                    	$('#item_info_pane').append("Time Dead: " + data.itemInfo.time Dead);
//                    }
                    if (data.itemInfo.abilityPowerPerLevel != 0) {
                    	$('#item_info_pane').append("<b>Ability Power (per level):</b> " + data.itemInfo.abilityPowerPerLevel + "<br/>");
                    }
                    if (data.itemInfo.armor != 0) {
                    	$('#item_info_pane').append("<b>Armor:</b> " + data.itemInfo.armor + "<br/>");
                    }
                    if (data.itemInfo.armorPerLevel != 0) {
                    	$('#item_info_pane').append("<b>Armor (per level):</b> " + data.itemInfo.armorPerLevel + "<br/>");
                    }
                    if (data.itemInfo.damagePerLevel != 0) {
                    	$('#item_info_pane').append("<b>Attack Damage (per level):</b> " + data.itemInfo.damagePerLevel + "<br/>");
                    }
//                    if (data.itemInfo.cooldownReductionPerLevel != 0) {
//                    	$('#item_info_pane').append("Cooldown Reduction (per level): " + data.itemInfo.cooldownReductionPerLevel);
//                    }
                    if (data.itemInfo.healthPerLevel != 0) {
                    	$('#item_info_pane').append("<b>Health (per level):</b> " + data.itemInfo.healthPerLevel) + "<br/>";
                    }
                    if (data.itemInfo.healthRegenPerLevel != 0) {
                    	$('#item_info_pane').append("<b>Health Regeneration (per level):</b> " + data.itemInfo.healthRegenPerLevel + "<br/>");
                    }
                    if (data.itemInfo.magicResistPerLevel != 0) {
                    	$('#item_info_pane').append("<b>Magic Resistance (per level):</b> " + data.itemInfo.magicResistPerLevel + "<br/>");
                    }
                    if (data.itemInfo.manaPerLevel != 0) {
                    	$('#item_info_pane').append("<b>Mana (per level):</b> " + data.itemInfo.manaPerLevel + "<br/>");
                    }
                    if (data.itemInfo.manaRegenPerLevel != 0) {
                    	$('#item_info_pane').append("<b>Mana Regeneration (per level):</b> " + data.itemInfo.manaRegenPerLevel + "<br/>");
                    }
//                    if (data.itemInfo.spellvamp != 0) {
//                    	$('#item_info_pane').append("Spell Vampirism: " + data.itemInfo.spellvamp);
//                    }
                }
                // display error message
                else {
                    $("#item_info_pane").html("<b>Item Information could not be found.</b>");
                }
            },

            // If there was no resonse from the server
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("Something really bad happened " + textStatus);
                $("#item_info_pane").html(jqXHR.responseText);
            },

            // capture the request before it was sent to server
            beforeSend: function (jqXHR, settings) {
                // adding some Dummy data to the request
                settings.data += "&dummyData=whatever";
                // disable the button until we get the response
                $('#getItem').attr("disabled", true);
            },

            // this is called after the response or error functions are
            // finsihed
            // so that we can take some action
            complete: function (jqXHR, textStatus) {
                // enable the button
                $('#getItem').attr("disabled", false);
            }

        });
    });

    // checks for the button click event
    $("#addChampToBuild").click(function (e) {
        // var loaded_val = document.getElementById('info_icon');
        // var build_val = document.getElementById('build_icon');
        // build_val.innerHTML = loaded_val.innerHTML;
        build_champ = champion_data;
        update();
        // $('#build_name').html("").append(""+champion_data.mName);
    });

    // checks for the button click event
    $("#addI1ToBuild").click(function (e) {
        item_1 = item_data;
        update();
    });

    // checks for the button click event
    $("#addI2ToBuild").click(function (e) {
        item_2 = item_data;
        update();
    });

    // checks for the button click event
    $("#addI3ToBuild").click(function (e) {
        item_3 = item_data;
        update();
    });

    // checks for the button click event
    $("#addI4ToBuild").click(function (e) {
        item_4 = item_data;
        update();
    });

    // checks for the button click event
    $("#addI5ToBuild").click(function (e) {
        item_5 = item_data;
        update();
    });

    // checks for the button click event
    $("#addI6ToBuild").click(function (e) {
        item_6 = item_data;
        update();
    });

    // checks for the button click event
    $("#saveBuild").click(function (e) {

        // get the form data and then serialize that
        dataString = $("#save_build").serialize();

        // get the form data using another method
        dataString = {champion:JSON.stringify(build_champ),item1:JSON.stringify(item_1),item2:JSON.stringify(item_2),
        		item3:JSON.stringify(item_3),item4:JSON.stringify(item_4),item5:JSON.stringify(item_5),item6:JSON.stringify(item_6)};
        // make the AJAX request, dataType is set to json
        // meaning we are expecting JSON data in response from the server
        $.ajax({
            type: "POST",
            url: "SaveBuildInfo",
            data: dataString,
            dataType: "json",

            // if received a response from the server
            success: function (data, textStatus, jqXHR) {
                // our country code was correct so we have some information
                // to display
                if (data.success) {
                    $("#buildId").val("" + data.guid);
                }
                // display error message
                else {
                    $("#buildId").val("An error has occurred");
                }
            },

            // If there was no resonse from the server
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("Something really bad happened " + textStatus);
                $("#buildId").val(jqXHR.responseText);
            },

            // capture the request before it was sent to server
            beforeSend: function (jqXHR, settings) {
                // adding some Dummy data to the request
                settings.data += "&dummyData=whatever";
                // disable the button until we get the response
                $('#saveBuild').attr("disabled", true);
            },

            // this is called after the response or error functions are
            // finsihed
            // so that we can take some action
            complete: function (jqXHR, textStatus) {
                // enable the button
                $('#saveBuild').attr("disabled", false);
            }

        });
    });
    
 // checks for the button click event
    $("#getBuild").click(function (e) {

        // get the form data and then serialize that
        dataString = $("#save_build").serialize();

        // get the form data using another method
        dataString = "id=" + $("#buildId").val();
        // make the AJAX request, dataType is set to json
        // meaning we are expecting JSON data in response from the server
        $.ajax({
            type: "POST",
            url: "GetBuildInfo",
            data: dataString,
            dataType: "json",

            // if received a response from the server
            success: function (data, textStatus, jqXHR) {
                // our country code was correct so we have some information
                // to display
                if (data.success) {
                    build_champ = data.build.champion;
                    item_1 = data.build.items[0];
                    item_2 = data.build.items[1];
                    item_3 = data.build.items[2];
                    item_4 = data.build.items[3];
                    item_5 = data.build.items[4];
                    item_6 = data.build.items[5];
                    update();
                }
                // display error message
                else {
                    $("#buildId").val("An error has occurred");
                }
            },

            // If there was no resonse from the server
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("Something really bad happened " + textStatus);
                $("#buildId").val(jqXHR.responseText);
            },

            // capture the request before it was sent to server
            beforeSend: function (jqXHR, settings) {
                // adding some Dummy data to the request
                settings.data += "&dummyData=whatever";
                // disable the button until we get the response
                $('#getBuild').attr("disabled", true);
            },

            // this is called after the response or error functions are
            // finsihed
            // so that we can take some action
            complete: function (jqXHR, textStatus) {
                // enable the button
                $('#getBuild').attr("disabled", false);
            }

        });
    });
});