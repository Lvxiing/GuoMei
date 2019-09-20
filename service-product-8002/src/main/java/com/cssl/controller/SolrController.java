package com.cssl.controller;

import com.cssl.entity.Goods;
import com.cssl.entity.SolrPo;
import com.cssl.service.GoodsService;
import org.apache.solr.client.solrj.SolrClient;
import org.apache.solr.client.solrj.SolrQuery;
import org.apache.solr.client.solrj.response.QueryResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.solr.core.SolrTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
import java.util.Map;
import java.util.UUID;

@Controller
@RequestMapping("solr")
public class SolrController {
    @Autowired
    private SolrClient client;

    @Autowired
    private SolrTemplate template;

    @Autowired
    private GoodsService goodsService;

    @RequestMapping("saveData")
    @ResponseBody
    public String saveData() throws Exception {
        List<SolrPo> list = goodsService.findAllSolrData();
        client.addBeans(list);
        client.commit();
        return "success";
    }


    @RequestMapping("/showAll/{keywords}/{pageIndex}/{pageSize}/{bs}")
    @ResponseBody
    public List<SolrPo> showAll(@PathVariable String keywords, @PathVariable Integer pageIndex, @PathVariable Integer pageSize, @PathVariable Integer bs) throws Exception {
        SolrQuery solrQuery = new SolrQuery();
        // 设置查询关键字
        solrQuery.setQuery("title:" + keywords + "or sub:" + keywords);
        //查询条件
        //solrQuery.setQuery(keywords + "*");
        solrQuery.set("df", "keywords");
        System.out.println("keywords:" + keywords);
        solrQuery.setHighlight(true); // 开启高亮
        solrQuery.addHighlightField("title"); // 高亮字段
        solrQuery.addHighlightField("sub"); // 高亮字段
        solrQuery.setHighlightSimplePre("<font color='red'>"); // 高亮单词的前缀
        solrQuery.setHighlightSimplePost("</font>"); // 高亮单词的后缀
        if (bs == 1) {//表示新品
            solrQuery.setSort("times", SolrQuery.ORDER.desc);
        }
        if (bs == 2) {//表示高价
            solrQuery.setSort("price", SolrQuery.ORDER.desc);
        }
        if (bs == 3) {//表示低价
            solrQuery.setSort("price", SolrQuery.ORDER.asc);
        }

        /**
         * hl.snippets
         * hl.snippets参数是返回高亮摘要的段数，因为我们的文本一般都比较长，含有搜索关键字的地方有多处，如果hl.snippets的值大于1的话，
         * 会返回多个摘要信息，即文本中含有关键字的几段话，默认值为1，返回含关键字最多的一段描述。solr会对多个段进行排序。
         * hl.fragsize
         * hl.fragsize参数是摘要信息的长度。默认值是100，这个长度是出现关键字的位置向前移6个字符，再往后100个字符，取这一段文本。
         */
        int index = (pageIndex - 1) * pageSize;
        //分页
        solrQuery.setStart(index);
        solrQuery.setRows(pageSize);
        solrQuery.setHighlightFragsize(100);
        QueryResponse query = client.query(solrQuery);
        List<SolrPo> articleList = query.getBeans(SolrPo.class);
        Map<String, Map<String, List<String>>> highlightresult = query.getHighlighting();
        System.out.println(highlightresult);
        for (int i = 0; i < articleList.size(); ++i) {
            String id = articleList.get(i).getId().toString();
            if (highlightresult.get(id) != null && highlightresult.get(id).get("title") != null) {
                articleList.get(i).setTitle(highlightresult.get(id).get("title").get(0));
            }
            if (highlightresult.get(id) != null && highlightresult.get(id).get("sub") != null) {
                articleList.get(i).setSub(highlightresult.get(id).get("sub").get(0));
            }
            System.out.println("articleList = " + articleList.get(i));
        }
        return articleList;

    }


}
