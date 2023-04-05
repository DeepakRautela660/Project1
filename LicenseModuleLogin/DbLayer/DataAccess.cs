using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;
using LicenseModuleLogin.Models;

namespace LicenseModuleLogin.DbLayer
{
    public class DataAccess
    {
        SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["db"].ConnectionString);
        public int userLogin(Account account)
        {
            SqlCommand cmd = new SqlCommand("Sp_UserMaster_Login", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@UserID",account.UserID);
            cmd.Parameters.AddWithValue("@Password", account.Password);
            cmd.Parameters.AddWithValue("@UserName", account.UserName);
            
          //  cmd.Parameters.AddWithValue("@Created",account.CreatedDate);
            SqlParameter sqlPara = new SqlParameter();
            sqlPara.ParameterName = "@Isvalid";
            sqlPara.Direction = ParameterDirection.Output;
            sqlPara.SqlDbType = SqlDbType.Bit;
            cmd.Parameters.Add(sqlPara);
            con.Open();
            cmd.ExecuteNonQuery();
            int res = Convert.ToInt32(sqlPara.Value);
            con.Close();
            return res;
        }

        public List<Product> ShowData()
        {


            DataAccess db = new DataAccess();
            DataTable dt = new DataTable();
            List<Product> pro = new List<Product>();
           
            using (SqlCommand cmd = new SqlCommand("SELECT P_ID,ProductName from tbl_Product", con))
                {
                con.Open();
                    SqlDataAdapter da = new SqlDataAdapter(cmd);
                    da.Fill(dt);
                    if (dt.Rows.Count > 0)
                    {
                        for (int i = 0; i < dt.Rows.Count; i++)
                        {
                            pro.Add(new Product
                            {
                                P_ID = Convert.ToInt32(dt.Rows[i]["P_ID"]),
                                ProductName = dt.Rows[i]["ProductName"].ToString()
                            });
                        }
                    }
                
                return pro;
                }
          


        }


    }
}