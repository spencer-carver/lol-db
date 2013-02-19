package lol;

public class GUID_transformer {
	private static int offset = 65;

	public static char transformToChar(int ID) {
		return Character.toChars(ID + offset)[0];
	}

	public static int transformToID(char c) {
		return c - offset;
	}
}
