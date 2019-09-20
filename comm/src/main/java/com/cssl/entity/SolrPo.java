package com.cssl.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.apache.solr.client.solrj.beans.Field;
import org.springframework.data.solr.core.mapping.SolrDocument;

import java.io.Serializable;
import java.util.Date;

@Setter
@Getter
@ToString
@NoArgsConstructor
public class SolrPo  implements Serializable {
    @Field
    private String id;

    @Field
    private Integer gid;

    @Field
    private String title;

    @Field
    private String sub;

    @Field
    private String img;

    @Field
    private Date times;

    @Field
    private Double price;

    @Field
    private Integer cid;

}
