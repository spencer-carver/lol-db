package lol;

import java.util.ArrayList;

public class Build {
	private int bID;
	private Champion champion;
	private ArrayList<Glyph> glyphs; // 9
	private ArrayList<Mark> marks; // 9
	private ArrayList<Quintessence> quints; // 3
	private ArrayList<Seal> seals; // 9
	private ArrayList<Mastery> masteries; // 30
	private ArrayList<Item> items; // 6
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
	private double moveSpeedMultiplier;
	private double attackRange;

	public Build(Champion champ) {
		level = 1;

		this.champion = champ;
		this.items = new ArrayList<Item>();
		this.glyphs = new ArrayList<Glyph>();
		this.marks = new  ArrayList<Mark>();
		this.quints = new ArrayList<Quintessence>();
		this.seals = new ArrayList<Seal>();
		this.masteries = new ArrayList<Mastery>();
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
		moveSpeedMultiplier = 1;
		attackRange = champ.getmAttackSpeed();
	}
	
	public void setItems(ArrayList<Item> newItems) {
		items = newItems;
	}

	public void setLevel(int newLevel) {
		level = newLevel;
	}

	public String getGuid() {
		String guid = "";
		char g;
		g = champion.getGuid();
		guid += g;
		for (int i = 0; i < 6; i++) {
			if (items.size() != 0 && items.get(i) != null) {
				g = items.get(i).getGuid();
				guid += g;
			} else {
				guid += '0';
			}
		}
		for (int i = 0; i < 9; i++) {
			if (glyphs.size() != 0 && glyphs.get(i) != null) {
				g = glyphs.get(i).getGuid();
				guid += g;
			} else {
				guid += '0';
			}
		}
		for (int i = 0; i < 9; i++) {
			if (marks.size() != 0 && marks.get(i) != null) {
				g = marks.get(i).getGuid();
				guid += g;
			} else {
				guid += '0';
			}
		}
		for (int i = 0; i < 9; i++) {
			if (seals.size() != 0 && seals.get(i) != null) {
				g = seals.get(i).getGuid();
				guid += g;
			} else {
				guid += '0';
			}
		}
		for (int i = 0; i < 3; i++) {
			if (quints.size() != 0 && quints.get(i) != null) {
				g = quints.get(i).getGuid();
				guid += g;
			} else {
				guid += '0';
			}
		}
		for (int i = 0; i < 30; i++) {
			if (masteries.size() != 0 && masteries.get(i) != null) {
				g = masteries.get(i).getGuid();
				guid += g;
			} else {
				guid += '0';
			}
		}
		return guid;
	}

	public int getItemCost() {
		int cost = 0;
		for (Item item : items) {
			cost += item.getCost();
		}
		return cost;
	}

	public void linkRune(Rune rune) {
		if (rune instanceof Glyph) {
			glyphs.add((Glyph) rune);
		}
		if (rune instanceof Mark) {
			marks.add((Mark) rune);
		}
		if (rune instanceof Quintessence) {
			quints.add((Quintessence) rune);
		}
		if (rune instanceof Seal) {
			seals.add((Seal) rune);
		}
		linkModifier(rune, 1);
	}

	public void linkMastery(Mastery mastery) {
		masteries.add(mastery);
		linkModifier(mastery, 1);
	}

	public void linkItem(Item item) {
		items.add(item);
		linkModifier(item, 1);
	}

	private void linkModifier(Modifier mod, double pos) {
		// pos = 1 for link, pos = -1 for delink
		health += mod.getHealth() * pos;
		healthPerLevel += mod.getHealthPerLevel() * pos;
		healthRegen += mod.getHealthRegen() * pos;
		healthRegenPerLevel += mod.getHealthRegenPerLevel() * pos;
		mana += mod.getMana() * pos;
		manaPerLevel += mod.getManaPerLevel() * pos;
		manaRegen += mod.getManaRegen() * pos;
		manaRegenPerLevel += mod.getManaRegenPerLevel() * pos;
		damage += mod.getDamage() * pos;
		damagePerLevel += mod.getDamagePerLevel() * pos;
		attackSpeed += mod.getAttackSpeed() * pos;
		attackSpeedPerLevel += mod.getAttackSpeedPerLevel() * pos;
		armor += mod.getArmor() * pos;
		armorPerLevel += mod.getArmorPerLevel() * pos;
		magicResist += mod.getMagicResist() * pos;
		magicResistPerLevel += mod.getMagicResistPerLevel() * pos;
		moveSpeed += mod.getMoveSpeed() * pos;
		if (pos == 1) {
			moveSpeedMultiplier *= mod.getMoveSpeedMultiplier();
		} else {
			moveSpeedMultiplier = moveSpeedMultiplier
					/ mod.getMoveSpeedMultiplier();
		}
	}

	public Champion getChampion() {
		return champion;
	}

	public double getHealth() {
		return health + level * healthPerLevel;
	}

	public double getHealthRegen() {
		return healthRegen + level * healthRegenPerLevel;
	}

	public double getMana() {
		return mana + level * manaPerLevel;
	}

	public double getManaRegen() {
		return manaRegen + level * manaRegenPerLevel;
	}

	public double getDamage() {
		return damage + level * damagePerLevel;
	}

	public double getAttackSpeed() {
		return attackSpeed + level * attackSpeedPerLevel;
	}

	public double getArmor() {
		return armor + level * armorPerLevel;
	}

	public double getMagicResist() {
		return magicResist + level * magicResistPerLevel;
	}

	public double getMoveSpeed() {
		return moveSpeed * moveSpeedMultiplier;
	}

	public double getAttackRange() {
		return attackRange;
	}

}
