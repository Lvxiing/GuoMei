package com.cssl.entity;

import java.io.Serializable;

/**
 * 方便查询收货地址的省市区街数据回显 并且和address表建立属性关系
 */
public class ProvinceAddress implements Serializable {
    //省
    private Integer provinceId;
    private String provinceName;
    //市
    private Integer cityId;
    private String cityName;
    //县
    private Integer districtId;
    private String districtName;
    //街
    private Integer streetId;
    private String streetName;

    public Integer getProvinceId() {
        return provinceId;
    }

    public void setProvinceId(Integer provinceId) {
        this.provinceId = provinceId;
    }

    public String getProvinceName() {
        return provinceName;
    }

    public void setProvinceName(String provinceName) {
        this.provinceName = provinceName;
    }

    public Integer getCityId() {
        return cityId;
    }

    public void setCityId(Integer cityId) {
        this.cityId = cityId;
    }

    public String getCityName() {
        return cityName;
    }

    public void setCityName(String cityName) {
        this.cityName = cityName;
    }

    public Integer getDistrictId() {
        return districtId;
    }

    public void setDistrictId(Integer districtId) {
        this.districtId = districtId;
    }

    public String getDistrictName() {
        return districtName;
    }

    public void setDistrictName(String districtName) {
        this.districtName = districtName;
    }

    public Integer getStreetId() {
        return streetId;
    }

    public void setStreetId(Integer streetId) {
        this.streetId = streetId;
    }

    public String getStreetName() {
        return streetName;
    }

    public void setStreetName(String streetName) {
        this.streetName = streetName;
    }


    public ProvinceAddress(Integer provinceId, String provinceName, Integer cityId, String cityName, Integer districtId, String districtName, Integer streetId, String streetName) {
        this.provinceId = provinceId;
        this.provinceName = provinceName;
        this.cityId = cityId;
        this.cityName = cityName;
        this.districtId = districtId;
        this.districtName = districtName;
        this.streetId = streetId;
        this.streetName = streetName;
    }

    public ProvinceAddress() {
    }

    @Override
    public String toString() {
        return "ProvinceAddress{" +
                "provinceId=" + provinceId +
                ", provinceName=" + provinceName +
                ", cityId=" + cityId +
                ", cityName=" + cityName +
                ", districtId=" + districtId +
                ", districtName=" + districtName +
                ", streetId=" + streetId +
                ", streetName=" + streetName +
                '}';
    }
}
