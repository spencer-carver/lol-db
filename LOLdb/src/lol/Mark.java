package lol;

import java.util.ArrayList;

public class Mark extends Rune
{
  public static ArrayList<Mark> marks = new ArrayList<Mark>();
  public Mark()
  {
    super();
    marks.add(this);
  }
}
