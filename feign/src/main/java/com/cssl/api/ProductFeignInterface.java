package com.cssl.api;

import com.cssl.entity.*;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
import java.util.Map;

@FeignClient("service-product")
public interface ProductFeignInterface {

    //------------------------------solr模块------------------------------
    @RequestMapping("goods/findAllSolrData")
    List<SolrPo> findAllSolrData();

    @RequestMapping("solr/saveData")
    String saveData();

    @RequestMapping("solr/showAll")
    PageInfo<SolrPo> showAll(@RequestParam Map<String,Object> map) throws Exception;

    //-----------------------------前台模块-------------------------------
    //首页显示
    //首页大轮播图
    @RequestMapping("index/mainImagesData")
    public List<ImagesInfo> mainImagesData();


    //--------------------前台收货地址-------------------------
    //查询所有省份
    @RequestMapping("province/findProvince")
    List<Province> findProVince();
    //根据省份id查询所有城市
    @RequestMapping("city/findCityByProvince")
    List<City> findCityByProvince(@RequestParam Integer province_id);
    //根据城市Id查询区
    @RequestMapping("district/findAreaByCity")
    List<District> findAreaByCity(@RequestParam Integer city_id);
    //根据区id查询所有街道
    @RequestMapping("street/findStreetByArea")
    List<Street> findStreetByArea(@RequestParam Integer district_id);
    //心怎收货地址
    @RequestMapping("address/addAddressPage")
    int addAddressPage(@RequestBody Address address1);
    //查询所有的收货地址
    @RequestMapping("address/findAddress")
    List<Address> findAddress();
    //根据城市id回显城市名称
    @RequestMapping("city/findNameByCityId")
    String findNameByCityId(@RequestParam Integer city_id);
    //根据省份id查询省名称
    @RequestMapping("province/findNameByProvinceId")
    String findNameByProvinceId(@RequestParam Integer province_id);
    //根据区id查询区名称
    @RequestMapping("district/findNameByDistrictId")
    String findNameByDistrictId(@RequestParam Integer district_id);
    //根据街id查询街名称
    @RequestMapping("street/findNameByStreetId")
    public String findNameByStreetId(@RequestParam Integer street_id);
    //查询所有地址
    @RequestMapping("address/showAddress")
    List<Address> showAddress(@RequestParam Map<String,Object>map);
    //判断该用户是否有收货地址
    @RequestMapping("address/selectAddressExist")
    String selectAddressExist(@RequestParam("uid") Integer uid);

    //根据address_id删除收货地址
    @RequestMapping("address/deleteAddress")
    boolean deleteAddress(@RequestParam(value = "address_id") Integer id);

    //---------------------------新闻前台模块--------------------------------
    //查询所有新闻
    @RequestMapping("news/findAllNews")
    List<News> findAllNews();

    @RequestMapping("news/findByNewsId")
    List<News> findByNewsId(@RequestParam("id") String id);

    @RequestMapping("news/findPageByTitle")
    PageInfo findPageByTitle(@RequestParam("pageIndex") Integer pageIndex ,@RequestParam("pageSize") Integer pageSize,@RequestParam("title") String title);
    //查询所有顶级分类

    //---------------------------分类前台模块--------------------------------
    //查询所有顶级分类
    @RequestMapping("category/findParentCategory")
    List<Category> findParentCategory(@RequestParam("pid") Integer pid);

    //根据分类编号查询当前分类下的所有子分类
    @RequestMapping("category/findCategoryAndChild")
    List<TreeCategory> findCategoryAndChild(@RequestParam("parentId") Integer parentId);

    //根据商品编号查询该商品所在的分类以及全部父分类信息
    @RequestMapping("category/findCategoryByGoodsId")
    Map<String,Object> findCategoryByGoodsId(@RequestParam("gid") Integer gid);

    //查询父分类信息(反向递归)
    @RequestMapping("category/findCategoryParent")
    Map<String, Object> findCategoryParent(@RequestParam("cid") Integer cid);


    //根据分类显示商品
    @RequestMapping("category/categoryGoodsShow")
    Map<String, Object> categoryGoodsShow(@RequestParam Map<String, Object> map);


    //---------------------------评价前台模块--------------------------------
    //商品评价
    @RequestMapping("evaluate/goodsEvaluate")
    PageInfo<Map<String,Object>> goodsEvaluate(@RequestParam("gid") Integer gid,@RequestParam("pageIndex") Integer pageIndex,@RequestParam("pageSize") Integer pageSize);
    //新增商品评价(追加评论)
    @RequestMapping("evaluate/addEvaluate")
    boolean addEvaluate(@RequestParam Map<String,Object> map);
    //修改评价根据评价id(评论晒单)
    @RequestMapping("evaluate/updateEvaluate")
    boolean updateEvaluate(@RequestParam Map<String,Object> map);
    //查询未评价也可查询已评价
    @RequestMapping("evaluate/evaluateInfo")
    Object evaluateInfo(@RequestParam Map<String,Object> map,@RequestParam("pageIndex") Integer pageIndex,@RequestParam("pageSize") Integer pageSize);


    //---------------------------商品前台模块--------------------------------
    //根据分类名称查询该分类下的所有品牌商品的热卖商品
    @RequestMapping("goods/findGoodsByCategoryName")
    List<Goods> findGoodsByCategoryName(@RequestParam("categoryName")String categoryName);

    //根据分类名称查询该分类下的所有品牌商品的新品抢先
    @RequestMapping("goods/findGoodsNewByCategoryName")
    List<Goods> findGoodsNewByCategoryName(@RequestParam("categoryName")String categoryName);

    //根据分类名称查询该分类下的所有品牌商品的畅想低价
    @RequestMapping("goods/findGoodsLowPrice")
    List<Goods> findGoodsLowPrice(@RequestParam("categoryName") String categoryName);

    //根据当前第二级分类编号查询该分类下的所有第三级分类的热销榜
    @RequestMapping("goods/findSaleByCategoryId")
    List<Map<String,Object>> findSaleByCategoryId(@RequestParam("cid")Integer cid);

    //根据当前一级分类编号查询该分类下的所有商品的热销榜
    @RequestMapping("goods/findSaleAll")
    List<Map<String,Object>> findSaleAll(@RequestParam("cid")Integer cid);

    //首页的商品热销榜
    @RequestMapping("goods/indexSaleGoods")
    List<Map<String,Object>> indexSaleGoods();

    //查询商品详情信息
    @RequestMapping("goods/GoodInfoShow")
    Map<String, Object> GoodInfoShow(@RequestParam("gid") Integer gid);

    //商品详情的热销榜
    @RequestMapping("goods/goodsInfoSale")
    List<Goods> goodsInfoSale(@RequestParam("cid") Integer cid);


    //会员商品
    @RequestMapping("vip_goods/vipGoodsFindAllQian")
    PageInfo<Map<String, Object>> vipGoodsFindAllQian(@RequestParam Map<String, Object> map);

    //最近浏览
    @RequestMapping("goods/browseGoods")
    List<Goods> browseGoods(@RequestBody(required=false)  String value);

    @RequestMapping("vip_goods/vipInfo")
    Map<String,Object> vipInfo(@RequestParam("gid") Integer gid);


    //----------------------------订单前台模块-----------------------------
    //用户下单信息
    @RequestMapping("orders/orderInfo")
    Map<String,Object> orderInfo(@RequestParam("uid") Integer uid,@RequestParam Map<String,Object> map);

    @RequestMapping("orders/addOrders")
    Map<String, Object>  addOrders(@RequestParam Map<String,Object> map);

    //用户订单
    @RequestMapping("orders/findOrdersByUserId")
    PageInfo<Map<String, Object>> findOrdersByUserId(@RequestParam Map<String, Object> map);

    //订单详情
    @RequestMapping("orders/findOrdersDetail")
    List<Map<String,Object>> findOrdersDetail(@RequestParam("oid") Integer oid);

    @RequestMapping("orders/findOrders")
    Orders findOrders(@RequestParam("oid") Integer oid);

    //查询用户订单的待付款待收货总记录数
    @RequestMapping("orders/findTotal")
    List<Map<String,Object>> findTotal(@RequestParam("uid")Integer uid);
    //根据订单号查询地址表相关信息
    @RequestMapping("orders/findAddressByOrder")
     Map<String,Object> findAddressByOrder(@RequestParam("oid") Integer oid);


    //--------------------------后台模块----------------------------------

    //---------------------------新闻后台模块--------------------------------
    //新闻查询
    @RequestMapping("news/findByNewsPage")
    Map<String,Object> findAllNews(@RequestParam("pageIndex") Integer pageIndex);
    //根据名称模糊查询
    @RequestMapping("news/findByTitle/{title}")
    Map<String, Object> findByTitle(@PathVariable("title") String title);
    //新增数据
    @RequestMapping("news/savaNews")
    String save(News newsVo);
    //删除新闻
    @RequestMapping("news/deleteNews/{id}")
    String deleteNews(@PathVariable("id") String id);
    //修改新闻数据
    @RequestMapping("news/updateNews")
    String updateNews(News news);
    //根据id查询需要修改的数据
    @RequestMapping("news/findByUpdateId/{id}")
    Map<String,Object> findByUpdateId(@PathVariable("id") String id);


    //--------------------------商品分类模块后台-------------------------------
    //查询所有分类
    @RequestMapping("category/findCategory")
    String findCategory();

    //返回当前进行更新的分类信息
    @RequestMapping("category/updateCategoryInfo/{cid}/{parentId}")
    String updateCategoryInfo(@PathVariable("cid")Integer cid,@PathVariable("parentId") Integer parentId);

    //更新分类
    @RequestMapping("category/updateCategory")
    String updateCategory(Category category);

    //删除分类
    @RequestMapping("category/deleteCategory/{cid}")
    String deleteCategory(@PathVariable("cid") Integer cid);

    //查询当前品牌下是否有商品
    @RequestMapping("category/brandExistGood/{cid}")
    String brandExistGood(@PathVariable("cid")Integer cid);

    //返回树状图数据的分类
    @RequestMapping("category/findTreeCategory/{cLevel}")
    String findTreeCategory(@PathVariable("cLevel")Integer cLevel);

    //添加分类
    @RequestMapping("category/addCategory")
    String addCategory(Category category);

    //根据不同条件返回分类信息
    @RequestMapping("category/categoryShow")
    List<Category> categoryShow(@RequestParam Map<String, String> param);

    //根据id查询当前分类
    @RequestMapping("category/findParentOne")
    Category findParentOne(@RequestParam("id")Integer id);

    //查询当前品牌的父分类信息
    @RequestMapping("category/findBrandIsParentCategory")
    Map findBrandIsParentCategory(@RequestParam("id")Integer id);


    //--------------------------商品模块后台-------------------------------
    //查询商品
    @RequestMapping("goods/findGoods")
    PageInfo<Map<String, Object>> findGoods(@RequestParam Map<String,Object> param);

    //新增商品
    @RequestMapping("goods/addGoods")
    String addGoods(@RequestParam Map<String,Object> map);

    //修改商品状态
    @RequestMapping("goods/upStateGoods")
    String upStateGoods(@RequestParam Map<String,Object> map);

    //查询所有会员等级
    @RequestMapping("grade/findAll")
    List<Grade> findGrade();

    @RequestMapping("grade/findGradeById")
    Grade findGradeById(@RequestParam("id") Integer id);

    @RequestMapping("grade/updateGradeMoney")
    String updateGradeMoney(@RequestParam("id") Integer id,@RequestParam("money") double money);


    //修改商品信息
    @RequestMapping("goods/modifyGoods")
    String modifyGoods(@RequestParam Map<String, Object> map);

    @RequestMapping("goods/findGoodsById")
    Map findGoodsById(@RequestParam("id") Integer id);

    //会员商品
    @RequestMapping("/vip_goods/vipGoodsFindAll")
    PageInfo<Map<String, Object>> vipGoodsFindAll(@RequestParam Map<String,Object> param, @RequestParam("page")int page, @RequestParam("limit")int limit);


    //---------------------------订单后台模块--------------------------------
    //查询全部和模糊查询
    @RequestMapping("/orders/orderList/{pageIndex}/{pageSize}/{orderNo}/{name}")
    PageInfo<Map<String, Object>> orderList(@PathVariable("pageIndex")Integer pageIndex, @PathVariable("pageSize")Integer pageSize, @PathVariable("orderNo")String orderNo, @PathVariable("name")String name);
    //根据订单号查询
    @RequestMapping("/orders/ByIdOrders/{orderNo}")
    List<Map<String,Object>> ByIdOrders(@PathVariable("orderNo")String orderNo);
    //根据订单号修改
    @RequestMapping("/orders/updateStatus")
    int updateStatus(@RequestParam("orderNo") String orderNo, @RequestParam("status") int status);
    //删除
    @RequestMapping("/orders/deleteOrders")
    int deleteOrders(@RequestParam("orderId")Integer orderId,@RequestParam("status")Integer status);
    //计算本月退单数量,订单数量和金额,本月订单实际金额,本月未付款金额
    @RequestMapping("/orders/inquiryAmount")
    Map<String,Object> inquiryAmount();
    //查询最近一周的订单金额,未付金额,退款金额,实际金额
    @RequestMapping("/orders/weekInquiryAmount")
    Map<String,Object> weekInquiryAmount();
    //查询最近一周对应日期的订单金额,未付金额,退款金额,实际金额
    @RequestMapping("/orders/weekOrder")
    List<Map<String,Object>> weekOrder();
   //查看订单详情购买商品信息
   @RequestMapping("/orders/orderDetail")
   PageInfo<Map<String, Object>> orderDetail(@RequestParam("order_no")String order_no,@RequestParam("page")int page,@RequestParam("limit")int limit);


    //---------------------------商品评论后台模块--------------------------------
    @RequestMapping("/evaluate/evaluateFindAll")
    PageInfo<Map<String, Object>> evaluateFindAll(@RequestParam Map<String,Object> param, @RequestParam("page")int page, @RequestParam("limit")int limit);

}
