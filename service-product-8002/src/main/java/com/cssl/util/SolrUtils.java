package com.cssl.util;

import com.cssl.entity.SolrPo;
import org.apache.solr.client.solrj.SolrServerException;
import org.apache.solr.client.solrj.impl.HttpSolrClient;
import org.apache.solr.common.SolrInputDocument;

import java.io.IOException;

public class SolrUtils {
    //获取客户端的连接地址
    private final static String SOLR_URL = "http://127.0.0.1:8983/solr/mycore";

    //获取客户端的连接
    public HttpSolrClient createSolrServer() {
        HttpSolrClient solr = null;
        solr = new HttpSolrClient.Builder(SOLR_URL).withConnectionTimeout(10000).withSocketTimeout(60000).build();
        return solr;
    }
    //添加文档
    public void addDoc(SolrPo solrPo) throws SolrServerException, IOException {
        SolrInputDocument document = new SolrInputDocument();
        document.setField("id", solrPo.getId());
        document.setField("title",solrPo.getTitle());
        document.setField("sub",solrPo.getSub());
        document.setField("img",solrPo.getImg());
        document.setField("times",solrPo.getTimes());
        document.setField("price",solrPo.getPrice());
        document.setField("cid",solrPo.getCid());
        HttpSolrClient solr = new HttpSolrClient.Builder(SOLR_URL).withConnectionTimeout(10000)
                .withSocketTimeout(60000).build();
        solr.add(document);
        solr.commit();
        solr.close();
        System.out.println("添加成功");
    }

}
