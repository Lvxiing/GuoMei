package com.cssl.service;

import com.cssl.entity.Category;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;
import java.util.Map;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author lx
 * @since 2019-09-10
 */
public interface CategoryService extends IService<Category> {

    //查询所有分类
    List<Category> findCategory(Map<String,Object> map);

    //查询当前分类所在的父分类
    Category findCategoryParent(Integer parentId);

    //修改分类
    int updateCategoryInfo(Category category);

    //查询生成zTree树状下拉框的分类值
    List<Map<String,Object>> findTreeCategory(Integer cLevel);

    //查询所有分类以及该分类是否存在父分类
    List<Map<String,Object>> findCategoryAndParentExist();

    //删除分类
    int deleteCategory(Integer cid);

    //查询当前品牌分类下是否有商品
    int brandExistGood (Integer cid);

    //删除品牌分类
    int deleteBrand(Integer cid);

    //根据商品编号查询该商品所在的分类信息
    Category findCategoryByGoodsId(Integer gid);


    //新增分类
    int addCategory(Category category);


    //查询当前分类所在的品牌编号
    int selectBrandId(Integer cid);

    //查询当前品牌的父分类
    Map findBrandIsParentCategory(Integer id);


    List<Integer> selectCategoryByLevel1(Integer cid);

    List<Integer> selectCategoryByLevel2(Integer cid);
}
