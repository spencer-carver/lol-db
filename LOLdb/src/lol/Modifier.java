package lol;

public abstract class Modifier
{
	private int mID;
	private String name;
	private char guid;			public char getGuid() {	return guid; }
		public void setGuid(char c) { guid = c; }
	private double health; 			public double getHealth() { return health; }
		public void setHealth(double h) { health = h; }
	private double healthPerLevel; 		public double getHealthPerLevel() { return healthPerLevel; }
	private double healthRegen;		public double getHealthRegen() { return healthRegen; }
	private double healthRegenPerLevel;	public double getHealthRegenPerLevel() { return healthRegenPerLevel; }
	private double mana;			public double getMana() { return mana; }
	private double manaPerLevel;		public double getManaPerLevel() { return manaPerLevel; }
	private double manaRegen;		public double getManaRegen() { return manaRegen; }
	private double manaRegenPerLevel;	public double getManaRegenPerLevel() { return manaRegenPerLevel; }
	private double damage;			public double getDamage() { return damage; }
	private double damagePerLevel;		public double getDamagePerLevel() { return damagePerLevel; }
	private double attackSpeed;		public double getAttackSpeed() { return attackSpeed; }
	private double attackSpeedPerLevel;	public double getAttackSpeedPerLevel() { return attackSpeedPerLevel; }
	private double armor;			public double getArmor() { return armor; }
	private double armorPerLevel;		public double getArmorPerLevel() { return armorPerLevel; }
	private double magicResist;		public double getMagicResist() { return magicResist; }
	private double magicResistPerLevel;	public double getMagicResistPerLevel() { return magicResistPerLevel; }
	private double moveSpeed;		public double getMoveSpeed() { return moveSpeed; }
	
	public Modifier()
	{
		mID = 0;
		name = "Placeholder";
		guid = '0';
		health = 0;
		healthPerLevel = 0;
		healthRegen = 0;
		healthRegenPerLevel = 0;
		mana = 0;
		manaPerLevel = 0;
		manaRegen = 0;
		manaRegenPerLevel = 0;
		damage = 0;
		damagePerLevel = 0;
		attackSpeed = 0;
		attackSpeedPerLevel = 0;
		armor = 0;
		armorPerLevel = 0;
		magicResist = 0;
		magicResistPerLevel = 0;
		moveSpeed = 0;
	}
}
