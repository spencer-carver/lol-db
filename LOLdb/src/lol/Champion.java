package lol;

public class Champion {

	private int mID;
	private String mName;
	private String mImagePath;
	private int mHealth;
	private int mHealthPerLevel;
	private double mHealthRegen;
	private double mHealthRegenPerLevel;
	private int mResourceType;
	private int mMana;
	private double mManaPerLevel;
	private double mManaRegen;
	private double mManaRegenPerLevel;
	private double mDamage;
	private double mDamagePerLevel;
	private double mAttackSpeed;
	private double mAttackSpeedPerLevel;
	private double mArmor;
	private double mArmorPerLevel;
	private int mMagicResist = 30;
	private double mMagicResistPerLevel;
	private int mMoveSpeed;
	private int mAttackRange;
	
	public char getGuid() {
		return GUID_transformer.transformToChar(mID);
	}

	public int getmID() {
		return mID;
	}

	public void setmID(int mID) {
		this.mID = mID;
	}

	public String getmName() {
		return mName;
	}

	public void setmName(String mName) {
		this.mName = mName;
	}

	public String getmImagePath() {
		return mImagePath;
	}

	public void setmImagePath(String mImagePath) {
		this.mImagePath = mImagePath;
	}

	public int getmHealth() {
		return mHealth;
	}

	public void setmHealth(int mHealth) {
		this.mHealth = mHealth;
	}

	public int getmHealthPerLevel() {
		return mHealthPerLevel;
	}

	public void setmHealthPerLevel(int mHealthPerLevel) {
		this.mHealthPerLevel = mHealthPerLevel;
	}

	public double getmHealthRegen() {
		return mHealthRegen;
	}

	public void setmHealthRegen(double mHealthRegen) {
		this.mHealthRegen = mHealthRegen;
	}

	public double getmHealthRegenPerLevel() {
		return mHealthRegenPerLevel;
	}

	public void setmHealthRegenPerLevel(double mHealthRegenPerLevel) {
		this.mHealthRegenPerLevel = mHealthRegenPerLevel;
	}

	public int getmResourceType() {
		return mResourceType;
	}

	public void setmResourceType(int mResourceType) {
		this.mResourceType = mResourceType;
	}

	public int getmMana() {
		return mMana;
	}

	public void setmMana(int mMana) {
		this.mMana = mMana;
	}

	public double getmManaPerLevel() {
		return mManaPerLevel;
	}

	public void setmManaPerLevel(double mManaPerLevel) {
		this.mManaPerLevel = mManaPerLevel;
	}

	public double getmManaRegen() {
		return mManaRegen;
	}

	public void setmManaRegen(double mManaRegen) {
		this.mManaRegen = mManaRegen;
	}

	public double getmManaRegenPerLevel() {
		return mManaRegenPerLevel;
	}

	public void setmManaRegenPerLevel(double mManaRegenPerLevel) {
		this.mManaRegenPerLevel = mManaRegenPerLevel;
	}

	public double getmDamage() {
		return mDamage;
	}

	public void setmDamage(double mDamage) {
		this.mDamage = mDamage;
	}

	public double getmDamagePerLevel() {
		return mDamagePerLevel;
	}

	public void setmDamagePerLevel(double mDamagePerLevel) {
		this.mDamagePerLevel = mDamagePerLevel;
	}

	public double getmAttackSpeed() {
		return mAttackSpeed;
	}

	public void setmAttackSpeed(double mAttackSpeed) {
		this.mAttackSpeed = mAttackSpeed;
	}

	public double getmAttackSpeedPerLevel() {
		return mAttackSpeedPerLevel;
	}

	public void setmAttackSpeedPerLevel(double mAttackSpeedPerLevel) {
		this.mAttackSpeedPerLevel = mAttackSpeedPerLevel;
	}

	public double getmArmor() {
		return mArmor;
	}

	public void setmArmor(double mArmor) {
		this.mArmor = mArmor;
	}

	public double getmArmorPerLevel() {
		return mArmorPerLevel;
	}

	public void setmArmorPerLevel(double mArmorPerLevel) {
		this.mArmorPerLevel = mArmorPerLevel;
	}

	public int getmMagicResist() {
		return mMagicResist;
	}

	public void setmMagicResist(int mMagicResist) {
		this.mMagicResist = mMagicResist;
	}

	public double getmMagicResistPerLevel() {
		return mMagicResistPerLevel;
	}

	public void setmMagicResistPerLevel(double mMagicResistPerLevel) {
		this.mMagicResistPerLevel = mMagicResistPerLevel;
	}

	public int getmMoveSpeed() {
		return mMoveSpeed;
	}

	public void setmMoveSpeed(int mMoveSpeed) {
		this.mMoveSpeed = mMoveSpeed;
	}

	public int getmAttackRange() {
		return mAttackRange;
	}

	public void setmAttackRange(int mAttackRange) {
		this.mAttackRange = mAttackRange;
	}

}
