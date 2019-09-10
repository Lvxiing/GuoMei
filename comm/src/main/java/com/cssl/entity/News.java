package com.cssl.entity;


import lombok.*;
import lombok.experimental.Accessors;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "newsinfo")
public class News {
    private String id;
    private String title;
    @Field("time")
    private String subtime;
    private String subtitle;
    private String context;

    public News(String id, String title, String subtime, String subtitle, String context) {
        this.id = id;
        this.title = title;
        this.subtime = subtime;
        this.subtitle = subtitle;
        this.context = context;
    }

    public News(String title, String subtime, String subtitle, String context) {
        this.title = title;
        this.subtime = subtime;
        this.subtitle = subtitle;
        this.context = context;
    }

    public News() {
    }
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getSubtime() {
        return subtime;
    }

    public void setSubtime(String subtime) {
        this.subtime = subtime;
    }

    public String getSubtitle() {
        return subtitle;
    }

    public void setSubtitle(String subtitle) {
        this.subtitle = subtitle;
    }

    public String getContext() {
        return context;
    }

    public void setContext(String context) {
        this.context = context;
    }

    @Override
    public String toString() {
        return "News{" +
                "id='" + id + '\'' +
                ", title='" + title + '\'' +
                ", subtime='" + subtime + '\'' +
                ", subtitle='" + subtitle + '\'' +
                ", context='" + context + '\'' +
                '}';
    }
}

