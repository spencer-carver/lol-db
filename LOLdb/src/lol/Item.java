package lol;

import java.util.ArrayList;

public class Item extends Modifier {
	private int cost;
	private String imagePath;

	public int getCost() {
		return cost;
	}

	public void setCost(int c) {
		cost = c;
	}
	
	public String getImagePath() {
		return imagePath;
	}
	
	public void setImagePath(String ip) {
		imagePath = ip;
	}

	public static ArrayList<Item> items = new ArrayList<Item>();

	public Item() {
		super();
		items.add(this);
	}
	
	public void parseModifier(int ResourceID, double value) {
		switch (ResourceID) {
		case 0: //Ability Power
			this.setAbilityPower(value);
			break;
		case 1: //Armor Penetration
			//TODO
			break;
		case 2: //Attack Damage
			this.setDamage(value);
			break;
		case 3: //Attack Speed
			this.setAttackSpeed(value);
			break;
		case 4: // Cooldown reduction
			//TODO
			break;
		case 5: // Critical Chance
			//TODO
			break;
		case 6: //Critical Damage
			//TODO
			break;
		case 7: //Energy
			//TODO
			break;
		case 8: //Energy Regeneration
			//TODO
			break;
		case 9: //Experience Gained
			//TODO
			break;
		case 10: //Gold Generation
			//TODO
			break;
		case 11: //Health
			this.setHealth(value);
			break;
		case 12: //Health Regeneration
			this.setHealthRegen(value);
			break;
		case 13: //Hybrid Penetration
			//TODO
			break;
		case 14: //Lifesteal
			//TODO
			break;
		case 15: //Magic Penetration
			//TODO
			break;
		case 16: //Magic Resist
			this.setMagicResist(value);
			break;
		case 17: //Mana
			this.setMana(value);
			break;
		case 18: //Mana Regen
			this.setManaRegen(value);
			break;
		case 19: //Movement Speed
			this.setMoveSpeedMultiplier(value);
			break;
		case 20: // Percent Health
			//TODO
			break;
		case 21: //Time Dead
			//TODO
			break;
		case 22: // Scaling Ability Power
			this.setAbilityPowerPerLevel(value);
			break;
		case 23: // Scaling Armor
			this.setArmorPerLevel(value);
			break;
		case 24: // Armor
			this.setArmor(value);
			break;
		case 25: // Attack Damage Per Level
			this.setDamagePerLevel(value);
			break;
		case 26: // Cooldown Reduction Per Level
			//TODO
			break;
		case 27: //Health Per Level
			this.setHealthPerLevel(value);
			break;
		case 28: // Health Regen Per Level
			this.setHealthRegenPerLevel(value);
			break;
		case 29: // Magic Resist Per Level
			this.setMagicResistPerLevel(value);
			break;
		case 30: // Mana Per Level
			this.setManaPerLevel(value);
			break;
		case 31: //Mana Regen Per Level
			this.setManaRegenPerLevel(value);
			break;
		case 32: //Spell Vamp
			//TODO
			break;
		default:
			//should not get here
			break;	
		}
	}
}
