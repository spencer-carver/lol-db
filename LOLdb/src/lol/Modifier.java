package lol;

public abstract class Modifier {
	private int mID;
	private String name;
	private char guid;

	public char getGuid() {
		return guid;
	}

	public void setGuid(char c) {
		guid = c;
	}

	private double health;

	public double getHealth() {
		return health;
	}

	public void setHealth(double h) {
		health = h;
	}

	private double healthPerLevel;

	public double getHealthPerLevel() {
		return healthPerLevel;
	}

	public void setHealthPerLevel(double h) {
		healthPerLevel = h;
	}

	private double healthRegen;

	public double getHealthRegen() {
		return healthRegen;
	}

	public void setHealthRegen(double h) {
		healthRegen = h;
	}

	private double healthRegenPerLevel;

	public double getHealthRegenPerLevel() {
		return healthRegenPerLevel;
	}

	public void setHealthRegenPerLevel(double h) {
		healthRegenPerLevel = h;
	}

	private double mana;

	public double getMana() {
		return mana;
	}

	public void setMana(double m) {
		mana = m;
	}

	private double manaPerLevel;

	public double getManaPerLevel() {
		return manaPerLevel;
	}

	public void setManaPerLevel(double m) {
		manaPerLevel = m;
	}

	private double manaRegen;

	public double getManaRegen() {
		return manaRegen;
	}

	public void setManaRegen(double m) {
		manaRegen = m;
	}

	private double manaRegenPerLevel;

	public double getManaRegenPerLevel() {
		return manaRegenPerLevel;
	}

	public void setManaRegenPerLevel(double m) {
		manaRegenPerLevel = m;
	}

	private double damage;

	public double getDamage() {
		return damage;
	}

	public void setDamage(double d) {
		damage = d;
	}

	private double damagePerLevel;

	public double getDamagePerLevel() {
		return damagePerLevel;
	}

	public void setDamagePerLevel(double d) {
		damagePerLevel = d;
	}

	private double attackSpeed;

	public double getAttackSpeed() {
		return attackSpeed;
	}

	public void setAttackSpeed(double as) {
		attackSpeed = as;
	}

	private double attackSpeedPerLevel;

	public double getAttackSpeedPerLevel() {
		return attackSpeedPerLevel;
	}

	public void setAttackSpeedPerLevel(double as) {
		attackSpeedPerLevel = as;
	}

	private double armor;

	public double getArmor() {
		return armor;
	}

	public void setArmor(double a) {
		armor = a;
	}

	private double armorPerLevel;

	public double getArmorPerLevel() {
		return armorPerLevel;
	}

	public void setArmorPerLevel(double a) {
		armorPerLevel = a;
	}

	private double magicResist;

	public double getMagicResist() {
		return magicResist;
	}

	public void setMagicResist(double mr) {
		magicResist = mr;
	}

	private double magicResistPerLevel;

	public double getMagicResistPerLevel() {
		return magicResistPerLevel;
	}

	public void setMagicResistPerLevel(double mr) {
		magicResistPerLevel = mr;
	}

	private double moveSpeed;

	public double getMoveSpeed() {
		return moveSpeed;
	}

	public void setMoveSpeed(double ms) {
		moveSpeed = ms;
	}

	private double moveSpeedMultiplier;

	public double getMoveSpeedMultiplier() {
		return moveSpeedMultiplier;
	}

	public void setMoveSpeedMultiplier(double ms) {
		moveSpeedMultiplier = ms;
	}

	public Modifier() {
		mID = 0;
		setmName("Placeholder");
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
		moveSpeedMultiplier = 1;
	}

	public String getmName() {
		return name;
	}

	public void setmName(String name) {
		this.name = name;
	}
}
