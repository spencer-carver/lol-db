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
 
public class ChampionNames extends HttpServlet {
 
    private static final long serialVersionUID = 1L;
 
    public ChampionNames() {
        super();
    }
 
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request,response);
    }
 
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
 
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
 
        ArrayList<String> championNames = getInfo();
        JsonElement championObj = gson.toJsonTree(championNames);
        if(championNames.isEmpty()){
            myObj.addProperty("success", false);
        }
        else {
            myObj.addProperty("success", true);
        }
        myObj.add("championNames", championObj);
        out.println(myObj.toString());
 
        out.close();
 
    }
 
    //Get Country Information
    private ArrayList<String> getInfo() {
 
        ArrayList<String> names = new ArrayList<String>();
        Connection conn = null;            
        PreparedStatement stmt = null;     
        String sql = null;
 
        try {      
        	conn = DriverManager
					.getConnection("jdbc:google:rdbms://league-of-legends-db:league-of-legends-db/LOL");
        	sql = "SELECT Name FROM CHAMPIONS"; //Uncomment this and comment line below during debugging (stored proc will not work on debug server)
            //sql = "CALL champion_names()";
        	stmt = conn.prepareStatement(sql);
            ResultSet rs = stmt.executeQuery(); 
 
            while(rs.next()){ 
                names.add(rs.getString("Name"));
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
 
        return names;
 
    }   
 
}