package com.cssl.entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@Getter
@Setter
@ToString
public class TreeCategory extends  Category{

    private List<TreeCategory> categoryChildren;

    public TreeCategory() {
    }

}
