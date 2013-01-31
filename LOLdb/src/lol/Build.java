package lol;

import java.util.ArrayList;

public class Build
{
  private int bID;
	private Champion champ;
	//private ArrayList<Glyph> glyphs;
	//private ArrayList<Mark> marks;
	//private ArrayList<Quintessence> quints;
	//private ArrayList<Seal> seals;
	//private ArrayList<Mastery> masteries;
	//private ArrayList<Item> items;
	private int level;

	private double health;
	private double healthPerLevel;
	private double healthRegen;
	private double healthRegenPerLevel;
	private double resourceType;
	private double mana;
	private double manaPerLevel;
	private double manaRegen;
	private double manaRegenPerLevel;
	private double damage;
	private double damagePerLevel;
	private double attackSpeed;
	private double attackSpeedPerLevel;
	private double armor;
	private double armorPerLevel;
	private double magicResist;
	private double magicResistPerLevel;
	private double moveSpeed;
	private double attackRange;

	public Build(Champion champ)
	{
		level = 1;

		this.champ = champ;
		health = champ.getmHealth();
		healthPerLevel = champ.getmHealthPerLevel();
		healthRegen = champ.getmHealthRegen();
		healthRegenPerLevel = champ.getmHealthRegenPerLevel();
		resourceType = champ.getmResourceType();
		mana = champ.getmMana();
		manaPerLevel = champ.getmManaPerLevel();
		manaRegen = champ.getmManaRegen();
		manaRegenPerLevel = champ.getmManaRegenPerLevel();
		damage = champ.getmDamage();
		damagePerLevel = champ.getmDamagePerLevel();
		attackSpeed = champ.getmAttackSpeed();
		attackSpeedPerLevel = champ.getmAttackSpeedPerLevel();
		armor = champ.getmArmor();
		armorPerLevel = champ.getmArmorPerLevel();
		magicResist = champ.getmMagicResist();
		magicResistPerLevel = champ.getmMagicResistPerLevel();
		moveSpeed = champ.getmMoveSpeed();
		attackRange = champ.getmAttackSpeed();
	}

	public void setLevel(int newLevel) { level = newLevel; }


	//public void linkRune(Rune rune);
	//public void linkMastery(Mastery mastery);
	//public void linkItem(Item item);

	private double getHealth() { return health + level*healthPerLevel; }
	private double getHealthRegen() {returun healthRegen + level*healthRegenLevel; }
	//private double resourceType;
	private double getMana() { return mana + level*manaPerLevel; }
	private double getManaRegen() { return manaRegen + level*manaRegenPerLevel; }
	private double getDamage() { return damage + level*damagePerLevel; }
	private double getAttackSpeed() { return attackSpeed + level*attackSpeedPerLevel; }
	private double getArmor() { return armor + level*armorPerLevel; }
	private double getMagicResist() { return magicResist + level*magicResistPerLevel; }
	private double getMoveSpeed() { return moveSpeed; }
	private double getAttackRange() { return attackRange; }

}
