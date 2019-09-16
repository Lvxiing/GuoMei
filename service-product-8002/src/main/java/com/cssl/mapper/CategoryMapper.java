package com.cssl.mapper;

import com.cssl.entity.Category;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;

import java.util.List;
import java.util.Map;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author lx
 * @since 2019-09-10
 */
public interface CategoryMapper extends BaseMapper<Category> {

    //查询所有分类
    List<Category> findCategory(Map<String,Object> map);

    //查询当前分类所在的父分类
    Category findCategoryParent(Integer parentId);

    //修改分类
    int updateCategoryInfo(Category category);

    //删除分类
    int deleteCategory(Integer cid);

    //查询生成zTree树状下拉框的分类值
    List<Map<String,Object>> findTreeCategory(Integer cLevel);

    //查询所有分类以及该分类是否存在父分类
    List<Map<String,Object>> findCategoryAndParentExist();

    //查询当前品牌分类下是否存商品
    int brandExistGood (Integer cid);

    //删除品牌分类
    int deleteBrand(Integer cid);

    //新增分类
    int addCategory(Category category);

    //查询当前分类所在的品牌编号
    int selectBrandId(Integer cid);

    //查询当前品牌的父分类
    Map findBrandIsParentCategory(Integer id);

    //根据商品编号查询该商品所在的分类信息
    Category findCategoryByGoodsId(Integer gid);
}
