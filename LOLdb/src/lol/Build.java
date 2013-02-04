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


	
	public void linkRune(Rune rune)
	{
		if(rune instanceof Glyph)
		{
			glyphs.add(rune);
		}
		if(rune instanceof Mark)
		{
			marks.add(rune);
		}
		if(rune instanceof Quintessence)
		{
			quints.add(rune);
		}
		if(rune instanceof Seal)
		{
			seals.add(rune);
		}
		linkModifier(rune, 1);
	}
	
	public void linkMastery(Mastery mastery)
	{
		masteries.add(mastery);
		linkModifier(mastery, 1);
	}
	
	public void linkItem(Item item)
	{
		items.add(item);
		linkModifier(item, 1);
	}
	
	private void linkModifier(Modifier mod, int pos)
	{
		//pos = 1 for link, pos = -1 for delink
		health += mod.health * pos;
		healthPerLevel += mod.healthPerLevel * pos;
		healthRegen += mod.healthRegen * pos;
		healthRegenPerLevel += mod.healthRegenPerLevel * pos;
		mana += mod.mana * pos;
		manaPerLevel += mod.manaPerLevel * pos;
		manaRegen += mod.manaRegen * pos;
		manaRegenPerLevel += mod.manaRegenPerLevel * pos;
		damage += mod.damage * pos;
		damagePerLevel += mod.damagePerLevel * pos;
		attackSpeed += mod.attackSpeed * pos;
		attackSpeedPerLevel += mod.attackSpeedPerLevel * pos;
		armor += mod.armor * pos;
		armorPerLevel += mod.armorPerLevel * pos;
		magicResist += mod.magicResist * pos;
		magicResistPerLevel += mod.magicResistPerLevel * pos;
		moveSpeed += mod.moveSpeed * pos;
		attackRange += mod.attackRange * pos;
	}

	public Champion getChampion() { return champion; }
	public double getHealth() { return health + level*healthPerLevel; }
	public double getHealthRegen() {returun healthRegen + level*healthRegenLevel; }
	public double getMana() { return mana + level*manaPerLevel; }
	public double getManaRegen() { return manaRegen + level*manaRegenPerLevel; }
	public double getDamage() { return damage + level*damagePerLevel; }
	public double getAttackSpeed() { return attackSpeed + level*attackSpeedPerLevel; }
	public double getArmor() { return armor + level*armorPerLevel; }
	public double getMagicResist() { return magicResist + level*magicResistPerLevel; }
	public double getMoveSpeed() { return moveSpeed; }
	public double getAttackRange() { return attackRange; }

}
