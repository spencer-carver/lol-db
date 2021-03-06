package lol;

import com.google.appengine.api.rdbms.AppEngineDriver;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.*;

import javax.servlet.ServletException;
import javax.servlet.http.*;
import com.google.appengine.api.users.User;
import com.google.appengine.api.users.UserService;
import com.google.appengine.api.users.UserServiceFactory;

public class LOLdbServlet extends HttpServlet {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws IOException {
		UserService userService = UserServiceFactory.getUserService();
		User user = userService.getCurrentUser();

		if (user != null) {
			resp.setContentType("text/plain");
			resp.getWriter().println("Hello, " + user.getNickname());
		} else {
			resp.sendRedirect(userService.createLoginURL(req.getRequestURI()));
		}
	}

	@Override
	public void doPost(HttpServletRequest req, HttpServletResponse resp)
			throws IOException {

		PrintWriter out = resp.getWriter();
		Connection c = null;
		try {
			DriverManager.registerDriver(new AppEngineDriver());
			c = DriverManager
					.getConnection("jdbc:google:rdbms://league-of-legends-db:league-of-legends-db/LOL");
			String cname = req.getParameter("cname");
			if (cname == "") {
				out.println("<html><head></head><body>You are missing either a message or a name! Try again! Redirecting in 3 seconds...</body></html>");
			} else {
				String statement = "CALL champion_lookup( ? )";
				PreparedStatement stmt = c.prepareStatement(statement);
				stmt.setString(1, cname);
				int success = 2;
				ResultSet rs = stmt.executeQuery();
				req.setAttribute("result", rs);
				try {
					c.close();
					req.getRequestDispatcher("main.jsp").forward(req, resp);
				} catch (ServletException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				if (success == 1) {
					out.println("<html><head></head><body>Success! Redirecting in 3 seconds...</body></html>");
				} else if (success == 0) {
					out.println("<html><head></head><body>Failure! Please try again! Redirecting in 3 seconds...</body></html>");
				}
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			if (c != null)
				try {
					c.close();
				} catch (SQLException ignore) {
			}
		}
		resp.setHeader("Refresh", "3; url=/main.jsp");
	}
}