package com.cssl.entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "images")
@Getter
@Setter
@ToString
public class ImagesInfo {
    private String id;
    private String folder;
    private String imageName;
    private String bcolor;
    private String href;

    public ImagesInfo() {
    }

    public ImagesInfo(String id, String folder, String imageName, String bcolor, String href) {
        this.id = id;
        this.folder = folder;
        this.imageName = imageName;
        this.bcolor = bcolor;
        this.href = href;
    }
}
