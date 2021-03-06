package lol;

import com.google.gson.*;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
 
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
 
public class ChampionInfo extends HttpServlet {
 
    private static final long serialVersionUID = 1L;
 
    public ChampionInfo() {
        super();
    }
 
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request,response);
    }
 
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
 
        String championName = request.getParameter("championName");
 
        PrintWriter out = response.getWriter();
        response.setContentType("text/html");
        response.setHeader("Cache-control", "no-cache, no-store");
        response.setHeader("Pragma", "no-cache");
        response.setHeader("Expires", "-1");
 
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Methods", "POST");
        response.setHeader("Access-Control-Allow-Headers", "Content-Type");
        response.setHeader("Access-Control-Max-Age", "86400");
 
        Gson gson = new Gson(); 
        JsonObject myObj = new JsonObject();
 
        Champion championInfo = getInfo(championName);
        JsonElement championObj = gson.toJsonTree(championInfo);
        if(championInfo.getmName() == null){
            myObj.addProperty("success", false);
        }
        else {
            myObj.addProperty("success", true);
        }
        myObj.add("championInfo", championObj);
        out.println(myObj.toString());
 
        out.close();
 
    }
 
    //Get Country Information
    private Champion getInfo(String championName) {
 
        Champion champion = new Champion();
        Connection conn = null;            
        PreparedStatement stmt = null;     
        String sql = null;
 
        try {      
        	conn = DriverManager
					.getConnection("jdbc:google:rdbms://league-of-legends-db:league-of-legends-db/LOL");
 
            sql = "CALL champion_lookup( ? )"; 
            stmt = conn.prepareStatement(sql);
            stmt.setString(1, championName.trim());
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
 
}