package com.example.walmartAssessment;

/*This Controller class is the link from the POJO files to the JSP files.
It maps the JSP in a way that when you enter /home, it maps the function to that extension
and returns the respective JSP file.
*  */


public class Product {
    private int id;
    private String imgurl;
    private String description;
    private int price;
    private String brand;


    public Product() {

    }

    public long getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getImgurl() {
        return imgurl;
    }

    public void setImgurl(String imgurl) {
        this.imgurl = imgurl;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public Product(String imgurl, int price, String brand, int id, String description) {
        super();
       this.imgurl = imgurl;
       this. price = price;
       this.description = description;
       this.brand = brand;
       this.id = id;


    }

}