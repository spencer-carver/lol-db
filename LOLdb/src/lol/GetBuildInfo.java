package lol;

import com.google.gson.*;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class GetBuildInfo extends HttpServlet {

	private static final long serialVersionUID = 1L;

	public GetBuildInfo() {
		super();
	}

	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		doPost(request, response);
	}

	protected void doPost(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		Gson gson = new Gson();
		String id = request.getParameter("id");
		char champ_id = id.charAt(0);
		Champion champ = getChampionInfo(GUID_transformer.transformToID(champ_id));
		char item1_id = id.charAt(1);
		Item item1 = getItemInfo(GUID_transformer.transformToID(item1_id));
		char item2_id = id.charAt(2);
		Item item2 = getItemInfo(GUID_transformer.transformToID(item2_id));
		char item3_id = id.charAt(3);
		Item item3 = getItemInfo(GUID_transformer.transformToID(item3_id));
		char item4_id = id.charAt(4);
		Item item4 = getItemInfo(GUID_transformer.transformToID(item4_id));
		char item5_id = id.charAt(5);
		Item item5 = getItemInfo(GUID_transformer.transformToID(item5_id));
		char item6_id = id.charAt(6);
		Item item6 = getItemInfo(GUID_transformer.transformToID(item6_id));
		ArrayList<Item> itemArray = new ArrayList<Item>();
		itemArray.add(item1);
		itemArray.add(item2);
		itemArray.add(item3);
		itemArray.add(item4);
		itemArray.add(item5);
		itemArray.add(item6);
		Build build = new Build(champ);
		build.setItems(itemArray);

		PrintWriter out = response.getWriter();
		response.setContentType("text/html");
		response.setHeader("Cache-control", "no-cache, no-store");
		response.setHeader("Pragma", "no-cache");
		response.setHeader("Expires", "-1");

		response.setHeader("Access-Control-Allow-Origin", "*");
		response.setHeader("Access-Control-Allow-Methods", "POST");
		response.setHeader("Access-Control-Allow-Headers", "Content-Type");
		response.setHeader("Access-Control-Max-Age", "86400");

		JsonObject myObj = new JsonObject();
        JsonElement buildObj = gson.toJsonTree(build);
        if(champ.getmName() == null){
            myObj.addProperty("success", false);
        }
        else {
            myObj.addProperty("success", true);
        }
        myObj.add("build", buildObj);
        out.println(myObj.toString());
 
        out.close();

	}

	// Get Country Information
	private Champion getChampionInfo(int id) {
		Champion champion = new Champion();
        Connection conn = null;            
        PreparedStatement stmt = null;     
        String sql = null;
 
        try {      
        	conn = DriverManager
					.getConnection("jdbc:google:rdbms://league-of-legends-db:league-of-legends-db/LOL");
 
            sql = "SELECT * FROM CHAMPIONS WHERE ID=?"; 
            stmt = conn.prepareStatement(sql);
            stmt.setString(1, ""+id);
            ResultSet rs = stmt.executeQuery(); 
 
            while(rs.next()){ 
            	champion.setmID(rs.getInt("ID"));
                champion.setmName(rs.getString("Name"));
                champion.setmImagePath(rs.getString("ImagePath"));
                champion.setmHealth(rs.getInt("Health"));
                champion.setmHealthPerLevel(rs.getInt("HealthPerLevel"));
                champion.setmHealthRegen(rs.getDouble("HealthRegen"));
                champion.setmHealthRegenPerLevel(rs.getDouble("HealthRegenPerLevel"));
                champion.setmResourceType(rs.getInt("ResourceID"));
                champion.setmMana(rs.getInt("Mana"));
                champion.setmManaPerLevel(rs.getDouble("ManaPerLevel"));
                champion.setmManaRegen(rs.getDouble("ManaRegen"));
                champion.setmManaRegenPerLevel(rs.getDouble("ManaRegenPerLevel"));
                champion.setmDamage(rs.getDouble("Damage"));
                champion.setmDamagePerLevel(rs.getDouble("DamagePerLevel"));
                champion.setmAttackSpeed(rs.getDouble("AttackSpeed"));
                champion.setmAttackSpeedPerLevel(rs.getDouble("AttackSpeedPerLevel"));
                champion.setmArmor(rs.getDouble("Armor"));
                champion.setmArmorPerLevel(rs.getDouble("ArmorPerLevel"));
                champion.setmMagicResist(rs.getInt("MagicResist"));
                champion.setmMagicResistPerLevel(rs.getDouble("MagicResistPerLevel"));
                champion.setmMoveSpeed(rs.getInt("MovementSpeed"));
                champion.setmAttackRange(rs.getInt("AttackRange"));
            }                                                                         
 
            rs.close();                                                               
            stmt.close();                                                             
            stmt = null;                                                              
 
 
            conn.close();                                                             
            conn = null;                                                   
 
        }                                                               
        catch(Exception e){System.out.println(e);}                      
 
        finally {                                                       
  
            if (stmt != null) {                                            
                try {                                                         
                    stmt.close();                                                
                } catch (SQLException sqlex) {                                
                    // ignore -- as we can't do anything about it here           
                }                                                             
 
                stmt = null;                                            
            }                                                        
 
            if (conn != null) {                                      
                try {                                                   
                    conn.close();                                          
                } catch (SQLException sqlex) {                          
                    // ignore -- as we can't do anything about it here     
                }                                                       
 
                conn = null;                                            
            }                                                        
        }              
 
        return champion;
 
    }   
	
	 private Item getItemInfo(int id) {
		 
	        Item item = new Item();
	        Connection conn = null;            
	        PreparedStatement stmt = null;     
	        String sql = null;
	 
	        try {      
	        	conn = DriverManager
						.getConnection("jdbc:google:rdbms://league-of-legends-db:league-of-legends-db/LOL");
	 
	        	sql = "SELECT * FROM ITEMS WHERE ItemID=?";
	            stmt = conn.prepareStatement(sql);
	            stmt.setString(1, ""+id);
	            ResultSet rs = stmt.executeQuery(); 
	 
	            while(rs.next()){ 
	            	item.setmID(rs.getInt("ItemID"));
	                item.setmName(rs.getString("Name"));
	                item.setCost(rs.getInt("Cost"));
	                item.setImagePath(rs.getString("ImagePath"));
	                item.parseModifier(rs.getInt("ModifierID1"), rs.getFloat("Value1"));
	                item.parseModifier(rs.getInt("ModifierID2"), rs.getFloat("Value2"));
	                item.parseModifier(rs.getInt("ModifierID3"), rs.getFloat("Value3"));
	                item.parseModifier(rs.getInt("ModifierID4"), rs.getFloat("Value4"));
	                item.parseModifier(rs.getInt("ModifierID5"), rs.getFloat("Value5"));
	                item.parseModifier(rs.getInt("ModifierID6"), rs.getFloat("Value6"));
	                item.parseModifier(rs.getInt("ModifierID7"), rs.getFloat("Value7"));
	                //TODO Fill out once stored procedure is written
	            }                                                                         
	 
	            rs.close();                                                               
	            stmt.close();                                                             
	            stmt = null;                                                              
	 
	 
	            conn.close();                                                             
	            conn = null;                                                   
	 
	        }                                                               
	        catch(Exception e){System.out.println(e);}                      
	 
	        finally {                                                       
	  
	            if (stmt != null) {                                            
	                try {                                                         
	                    stmt.close();                                                
	                } catch (SQLException sqlex) {                                
	                    // ignore -- as we can't do anything about it here           
	                }                                                             
	 
	                stmt = null;                                            
	            }                                                        
	 
	            if (conn != null) {                                      
	                try {                                                   
	                    conn.close();                                          
	                } catch (SQLException sqlex) {                          
	                    // ignore -- as we can't do anything about it here     
	                }                                                       
	 
	                conn = null;                                            
	            }                                                        
	        }              
	 
	        return item;
	 
	    }   

}